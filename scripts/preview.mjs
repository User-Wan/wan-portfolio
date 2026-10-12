import { createReadStream } from 'node:fs';
import { access, realpath, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = fileURLToPath(new URL('.', import.meta.url));
const configuredOutputDirectory = resolve(scriptDirectory, '..', 'out');
const host = '127.0.0.1';
const portValue = process.env.PORT?.trim() || '4173';
const port = Number(portValue);

if (!Number.isInteger(port) || port < 0 || port > 65535) {
  console.error('PORT must be an integer between 0 and 65535.');
  process.exit(1);
}

let outputRoot;

try {
  await access(resolve(configuredOutputDirectory, 'index.html'));
  outputRoot = await realpath(configuredOutputDirectory);
} catch {
  console.error('No static export found in out/. Run "npm run build" first.');
  process.exit(1);
}

const contentTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.gif', 'image/gif'],
  ['.html', 'text/html; charset=utf-8'],
  ['.ico', 'image/x-icon'],
  ['.jpeg', 'image/jpeg'],
  ['.jpg', 'image/jpeg'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.txt', 'text/x-component; charset=utf-8'],
  ['.webp', 'image/webp'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2'],
]);

function isInsideOutputRoot(path) {
  return path === outputRoot || path.startsWith(`${outputRoot}${sep}`);
}

async function findStaticFile(pathname) {
  const candidate = resolve(outputRoot, `.${pathname}`);

  if (!isInsideOutputRoot(candidate)) return null;

  try {
    const candidateInfo = await stat(candidate);
    const fileCandidate = candidateInfo.isDirectory()
      ? resolve(candidate, 'index.html')
      : candidate;
    const realFilePath = await realpath(fileCandidate);

    if (!isInsideOutputRoot(realFilePath)) return null;

    const fileInfo = await stat(realFilePath);
    return fileInfo.isFile() ? { path: realFilePath, info: fileInfo } : null;
  } catch {
    return null;
  }
}

function sendFile(request, response, file, statusCode = 200) {
  const extension = extname(file.path).toLowerCase();
  response.writeHead(statusCode, {
    'Content-Length': file.info.size,
    'Content-Type': contentTypes.get(extension) ?? 'application/octet-stream',
    'X-Content-Type-Options': 'nosniff',
  });

  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  createReadStream(file.path)
    .on('error', () => response.destroy())
    .pipe(response);
}

async function sendNotFound(request, response) {
  const notFoundFile = await findStaticFile('/404.html');

  if (notFoundFile) {
    sendFile(request, response, notFoundFile, 404);
    return;
  }

  response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end('Not found');
}

const server = createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD', 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Method not allowed');
    return;
  }

  let pathname;

  try {
    pathname = decodeURIComponent(new URL(request.url ?? '/', `http://${host}`).pathname);
  } catch {
    response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Bad request');
    return;
  }

  const file = await findStaticFile(pathname);

  if (!file) {
    await sendNotFound(request, response);
    return;
  }

  sendFile(request, response, file);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port || '(automatic)'} is already in use. Set PORT to another local port and try again.`);
  } else {
    console.error(`Could not start the local preview: ${error.message}`);
  }
  process.exitCode = 1;
});

server.listen(port, host, () => {
  const address = server.address();
  const listeningPort = typeof address === 'object' && address ? address.port : port;
  console.log(`Static preview: http://${host}:${listeningPort}/`);
  console.log('Press Ctrl+C to stop. This server is bound to 127.0.0.1 only.');
});
