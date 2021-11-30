function PageHome() {
    return `<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>ToDo</title>
                <link rel="stylesheet" href="/css/home.css">
            </head>
           
            <body>
                <header class="header">
                    <img class="logo" src="./img/logo.png" alt="TODO logo">
                    <nav class="meniu">
                        <a class="link" href="#">Register</a>
                        <a class="link" href="#">Login</a>
                    </nav>
                </header>
                <main class="content">
                    <img class="hero-img" src="./img/Reminder.svg" alt="Main hero image">
                    <div class="hero-text">
                        <h1 class="main-title">TODO for YOU</h1>
                        <p class="main-description">Simple ToDo Web Design. Create your own ToDo cards. Register and organise Your day!</p>
                        <button class = "button" >Login</button>
                        </div>
                </main>
            </body>

            </html>`;
}

export { PageHome };
