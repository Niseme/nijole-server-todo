import { Footer } from '../components/footer/Footer.js';
import { Head } from '../components/head/Head.js';
import { Header } from '../components/header/Header.js';

function Page404() {
    const HeaderObj = new Header();
    const HeaderHTML = HeaderObj.render();

    const FooterObj = new Footer();
    const FooterHTML = FooterObj.render();

    const HeadObj = new Head('Puslapis nerastas');
    const HeadHTML = HeadObj.render();

    return `<!DOCTYPE html>
            <html lang="en">

            ${HeadHTML}

            <body>
                ${HeaderHTML}
                <h1>404 puslapis</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquam velit nisi id culpa, optio rerum. Ullam reiciendis laudantium earum accusamus sed, eius numquam distinctio vitae aliquam incidunt, non rem.</p>
                ${FooterHTML}
            </body>

            </html>`;
}

export { Page404 };
