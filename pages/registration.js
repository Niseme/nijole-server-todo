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
                    <div class="registration">Welcome to Registration
                        <div class="input">
                        <input id="name" type="text" placeholder="Name" required>
                        </div>
                        <div class="input">
                        <input id="name" type="text" placeholder="Last Name" required>
                        </div>
                        <div class="input">
                        <input id="name" type="text" placeholder="Date of Birth" required>
                        </div>
                        <div class="input">
                        <input id="name" type="text" placeholder="Select Nationality" required>
                        </div>
                        <div class="input">
                        <input id="name" type="text" placeholder="Male/Female" required>
                        </div>
                        <div class="input">
                        <input id="name" type="text" placeholder="Email Address" required>
                        </div>
                        <div class="input">
                        <input id="name" type="text" placeholder="Password" required>
                        </div>
                        <div class="input">
                        <input id="name" type="text" placeholder="Confirm Password" required>
                        </div>
                        <div class="input">
                        <input id="name" type="text" placeholder="Mobile Number" required>
                        </div>
                        <div class="input">
                        <input id="name" type="text" placeholder="I agree Terms & Conditions" required>
                        </div>
                    </div>
                    <button>Create Account</button>
                </main>
                <footer class="footer">All rights reserved 2021</footer>
            </body>

            </html>`;
}

export { PageHome };
