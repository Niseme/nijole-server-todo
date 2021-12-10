function PageRegister() {
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
                    <div class="registration borderbox">
                        <h1>Welcome to Registration</h1>
                        <div class="input">
                        <input id="name" type="text" placeholder="Name" required>
                        </div>
                        <div class="input">
                        <input id="lastname" type="text" placeholder="Last Name" required>
                        </div>

                        <div class="input">
                            <input id="birthday" type="date" placeholder="Date of Birth" required>
                        </div>

                        <div class="input">
                            <input id="nationality" type="text" placeholder="Select Nationality" required>
                        </div>

                        <div class="input-gender">
                            <input id="male-gender" name="gender" type="radio" value="male" required>
                            <label class="gender">Male</label>
                            <input id="female-gender" name="gender" type="radio" value="female" required>
                            <label class="gender">Female</label>
                        </div>

                        <div class="input">
                            <input id="email" type="email" placeholder="Email Address" required>
                        </div>
                        <div class="input">
                            <input id="pass" type="text" placeholder="Password" required>
                        </div>
                        <div class="input">
                            <input id="confirm-pass" type="text" placeholder="Confirm Password" required>
                        </div>

                        <div class="input">
                            <input id="number" type="tel" placeholder="Mobile Number" required>
                        </div>

                        <div class="input">
                        <input id="termsandcond" type="checkbox" value="termsandcond" required>
                        <label for="termsandcond"> I agree with terms and conditions </label>
                        </div>
                    </div>
                    <button>Create Account</button>
                </main>
                <footer class="footer">All rights reserved 2021</footer>
            </body>

            </html>`;
}

export { PageRegister };
