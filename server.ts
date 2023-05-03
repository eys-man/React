import express from 'express';
import { createServer } from 'vite';

import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexHTML = path.resolve(__dirname, 'index.html');

async function startServer() {
  const app = express();
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (request, response) => {
    try {
      const template = fs.readFileSync(indexHTML, 'utf8');
      const transformHTML = await vite.transformIndexHtml(
        request.originalUrl,
        template
      );
      const [startHTML, endHTML] = transformHTML.split('<!--content-->');

      const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');

      try {
        response.write(startHTML);
        const { stream, injectPreload } = await render(request.originalUrl, {
          onShellReady() {
            stream.pipe(response);
          },
          onAllReady() {
            const preloadEndHTML = endHTML.replace(
              '<!--preload-->',
              injectPreload()
            );
            response.write(preloadEndHTML);
            response.end();
          },
        });
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  });

  return app;
}

startServer().then((app) => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
