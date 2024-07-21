document.getElementById('toggle-signup').addEventListener('click', function(e) {
    e.preventDefault();
    const formTitle = document.getElementById('form-title');
    const formDescription = document.getElementById('form-description');
    const authForm = document.getElementById('auth-form');
    const togglesignup = document.getElementById('toggle-signup');
    const toggleText = document.getElementById('toggle-text');
    
    if (formTitle.textContent === 'Hello User') {
        formTitle.textContent = 'Join Us';
        formDescription.textContent = 'Create a new account!';
        authForm.innerHTML = `
            <div class="input-group mb-3">
                <input type="text" id="username" name="username" class="form-control" placeholder="Username">
            </div>
            <div class="input-group mb-3">
                <input type="text" id="email" name="email" class="form-control" placeholder="Email">
            </div>
            <div class="input-group mb-3">
                <input type="password" id="password" name="password" class="form-control" placeholder="Password">
            </div>
            <div class="input-group mb-3">
                <input type="text" id="phno" name="phno" class="form-control" placeholder="Phone No.">
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success">Sign Up</button>
            </div>
        `;
        togglesignup.textContent = 'Login';
        toggleText.textContent = 'Already have an Account?';
    } else {
        formTitle.textContent = 'Hello User';
        formDescription.textContent = 'We are happy to have you back!';
        authForm.innerHTML = `
            <div class="input-group mb-3">
                <input type="text" id="username" name="username" class="form-control" placeholder="Username">
            </div>
            <div class="input-group mb-3">
                <input type="password" id="password" name="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="exampleCheckbox1">
                <label class="form-check-label" for="exampleCheckbox1">Remember me</label>
                <a href="#" class="ms-2">Forgot Password?</a>
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-success">Login</button>
            </div>
        `;
        togglesignup.textContent = 'Sign Up';
        toggleText.textContent = "Don't have an Account?";
    }
});

function validateForm() {
    const formTitle = document.getElementById('form-title').textContent;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (formTitle === 'Hello User') {
        if (username === "") {
            alert("Username is required!");
            document.getElementById("username").focus();
            return false;
        } else if (password === "") {
            alert("Password is required!");
            document.getElementById("password").focus();
            return false;
        } else if (password.length !== 8) {
            alert("Password length should be exactly 8 characters");
            document.getElementById("password").focus();
            return false;
        } else {
            alert("Login Successful!!");
            return true;
        }
    } else {
        const email = document.getElementById('email').value;
        const phno = document.getElementById('phno').value;
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (username === "") {
            alert("Username is required!");
            document.getElementById("username").focus();
            return false;
        } else if (email === "") {
            alert("Email is required!");
            document.getElementById("email").focus();
            return false;
        } else if (atpos<1||dotpos-atpos<2) {
            alert("Invalid email format!");
            document.getElementById("email").focus();
            return false;
        } else if (password === "") {
            alert("Password is required!");
            document.getElementById("password").focus();
            return false;
        } else if (password.length !== 8) {
            alert("Password length should be exactly 8 characters");
            document.getElementById("password").focus();
            return false;
        } else if (phno === "") {
            alert("Phone number is required!");
            document.getElementById("phno").focus();
            return false;
        } else if (isNaN(phno)) {
            alert("Invalid phone number format!");
            document.getElementById("phno").focus();
            return false;
        } 
        else if (phno.length!==10) {
            alert("Invalid phone number format!");
            document.getElementById("phno").focus();
            return false;
        } 
        else {
            alert("Sign Up Successfull!!");
            return true;
        }
    }
}