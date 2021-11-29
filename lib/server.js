import http from 'http';
import { config } from '../config.js';
import fs from './fs.js';

const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encrypted ? 's' : ''}://${req.headers.host}`;
    const parsedURL = new URL(req.url, baseURL);
    const parsedPathName = parsedURL.pathname;
    const httpMethod = req.method.toLowerCase();
    const trimmedPath = parsedPathName.replace(/^\/+|\/+$/g, '');

    //  -> home psl
    // about -> about psl

    // css/main.css -> css faila
    // css/button.css -> css faila

    // js/main.js -> js faila
    // js/button.js -> js faila

    req.on('data', () => {
        console.log('uzklausa in progress...');
    });

    req.on('end', async () => {
        const textFileExtensions = ['css', 'js', 'svg', 'webmanifest'];
        const binaryFileExtensions = ['woff2', 'woff', 'ttf', 'eot', 'otf', 'png', 'jpg', 'ico'];
        const urlParts = trimmedPath.split('.');
        const fileExtension = urlParts[urlParts.length - 1];
        const isTestFile = trimmedPath.includes('.test.');
        const isTextFile = textFileExtensions.includes(fileExtension);
        const isBinaryFile = binaryFileExtensions.includes(fileExtension);
        const isAPI = trimmedPath.indexOf('api') === 0;
        const isPage = !isTestFile && !isTextFile && !isBinaryFile && !isAPI;

        const MIMES = {
            html: 'text/html',
            css: 'text/css',
            js: 'text/javascript',
            svg: 'image/svg+xml',
            woff2: 'font/woff2',
            woff: 'font/woff',
            ttf: 'font/ttf',
            eot: 'application/vnd.ms-fontobject',
            otf: 'font/otf',
            png: 'image/png',
            jpg: 'image/jpeg',
            ico: 'image/x-icon',
            webmanifest: 'application/manifest+json',
        };

        if (isTextFile) {
            const fileContent = await fs.readStaticTextFile(trimmedPath);
            res.writeHead(200, {
                'Content-Type': MIMES[fileExtension],
            });
            return res.end(fileContent);
        }
        if (isBinaryFile) {
            const fileContent = await fs.readStaticBinaryFile(trimmedPath);
            res.writeHead(200, {
                'Content-Type': MIMES[fileExtension],
            });
            return res.end(fileContent);
        }
        if (isPage) {
            let pageTemplate = trimmedPath;
            if (pageTemplate === '') {
                pageTemplate = 'home';
            }

            const htmlContent = await fs.readHTMLFile(pageTemplate);
            res.writeHead(200, {
                'Content-Type': MIMES.html,
            });
            if (htmlContent === '') {
                const html404 = await fs.readHTMLFile('404');

                return res.end(html404);
            }

            return res.end(htmlContent);
        }

        res.writeHead(404);
        return res.end('Nerastas norimas tipas/turinys');
    });
});

// server.routes = {
//     '': 'home',
//     'about': 'about',
//     '404': '404',
// }

server.init = () => {
    server.httpServer.listen(config.httpPort, () => {
        console.log(`Tavo serveris sukasi ant http://localhost:${config.httpPort}`);
    });
};

export { server };

/*

/                               - home
/404                            - 404

/about                          - about

/naujienos                      - posts-list
/naujienos/xyz-vestuves         - naujiena
/naujienos/kepe-blynus          - naujiena
/naujienos/naujas-prezidentas   - naujiena
/paslaugos                      - services-list
/paslaugos/nuoma                - paslauga
/paslaugos/remontas             - paslauga
/paslaugos/konsultacija         - paslauga

*/
