function PageHome() {
    return `<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>ToDo Registration</title>
                <link rel="stylesheet" href="/css/registration.css">

            </head>
           
            <body>
                <header class="header">
                    <div class="kalbos">
                        <a>En</a>
                        <a>Fr</a>
                        <a>Es</a>
                    </div>
                    <div class="prisijungimai">
                        <i class="fa fa-sign-in" aria-hidden="true"></i>
                        <a>Login</a>
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <a>Register</a>
                    </div>
                </header> 
                <main class="content">
                    <img class="logo" src="./img/logo.png" alt="TODO logo">
                    <div class="registration">Welcome to Registration</div>
                </main>
                <footer class="footer">All rights reserved 2021</footer>
            </body>

            </html>`;
}

export { PageHome };
