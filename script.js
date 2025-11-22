// -------------------------
// STEP 1: Account Creation
// -------------------------
const new_email = prompt("Create your New EMAIL :\n1. Must Include @gmail.com\n2. Must have a username before '@gmail.com'\n3. For-Example: yourname@gmail.com");
const new_password = prompt("Create your New PASSWORD:\n• At least 4 characters");

// Show what user created
alert(`✅ Your Account has Created!\nYour Email: ${new_email}\nYour Password: ${new_password} \nNow Try to Login Same Email, Password`);


// -------------------------
// STEP 2: Login Inputs
// -------------------------
const login_email = prompt("Enter your EMAIL to Login:");
const login_password = prompt("Enter your PASSWORD to Login:");


// -------------------------
// STEP 3: Validation Checks
// (Correct Order & Best Practice 2025)
// -------------------------

// 1. EMPTY INPUT CHECK
if (!new_email || !new_password || !login_email || !login_password) {
    alert("❌ Empty Input — Please fill all the fields.");
    console.log("❌ Empty Input — Please fill all the fields.");
    document.write(`<h1> ❌ Empty Input — Please fill all the fields. </h1>`);
}
else if (new_email !== login_email && new_password !== login_password && !login_email.includes("gmail.com") && !(login_password.length >= 4)){
    document.write(`<h1>You Did 3 Mistakes While Creating Your Email & Password:<br>1. ❌ Both Email & Password are InValid!- please enter same password, email<br> 2. Password must be at least 4 characters long.<br> 3. Email must contain '@gmail.com'</h1>`);
}
else if (new_password !== login_password && !login_email.includes("@gmail.com") && !(login_password.length >= 4)){
    document.write(`<h1>You Did 3 Mistakes While Creating Your Email & Password:<br>1. ❌ Incorrect Password! - please enter correct Password<br> 2. Password must be at least 4 characters long.<br> 3. Email must contain '@gmail.com'</h1>`);
}
else if (new_email !== login_email && !login_email.includes("@gmail.com") && !(login_password.length >= 4)){
    document.write(`<h1>You Did 3 Mistakes While Creating Your Email & Password:<br>1. ❌ Incorrect Email!- please enter Correct Email<br> 2. Password must be at least 4 characters long.<br> 3. Email must contain '@gmail.com'</h1>`);
}
else if (!login_email.includes("@gmail.com") && !(login_password.length >= 4) && new_email === login_email && new_password === login_password){
    document.write(`<h1>1. ❌ Invalid Email Format! You don't include '@gmail.com' <br> 2. Should be at least 4 characters of Password! - Your Password is: ${login_password}.</h1>`);
}
// 2. EMAIL FORMAT CHECK (only check created email)
else if (!new_email.includes("@") || !new_email.includes("gmail.com")) {
    alert("❌ Invalid Email Format! Email must include '@gmail.com'");
    console.log("❌ Invalid Email Format! Email must include '@gmail.com'");
    document.write(`<h1> ❌ Invalid Email Format! Email must include '@gmail.com' </h1>`);
}

// 3. EMAIL MUST NOT START WITH @gmail.com
else if (new_email.startsWith("@gmail.com")) {
    alert("❌ Invalid Email — You must write a name before '@gmail.com'");
    console.log("❌ Invalid Email — You must write a name before '@gmail.com'");
    document.write(`<h1> ❌ Invalid Email — You must write a name before '@gmail.com' </h1>`);
}

// 4. WRONG EMAIL + WRONG PASSWORD
else if (new_email !== login_email && new_password !== login_password) {
    alert("❌ Both Email & Password are Incorrect!");
    console.log("❌ Both Email & Password are Incorrect!");
    document.write(`<h1>❌ Both Email & Password are Incorrect!</h1>`);
}

// 5. WRONG EMAIL ONLY
else if (new_email !== login_email) {
    alert("❌ Incorrect Email!");
    console.log("❌ Incorrect Email!");
    document.write(`<h1> ❌ Incorrect Email!</h1>`);
}

// 6. WRONG PASSWORD ONLY
else if (new_password !== login_password) {
    alert("❌ Incorrect Password!");
    console.log("❌ Incorrect Password!");
    document.write(`<h1> ❌ Incorrect Password!</h1>`);
}

else if(!(new_password.length >= 4) && !new_email.includes("@gmail.com")){
    alert(`Please correct the following errors: \n1. Email must contain '@gmail.com'. \n2. Password must be at least 4 characters long.`);
    console.log(`Please correct the following errors: \n1. Email must contain '@gmail.com'. \n2. Password must be at least 4 characters long.`);
    document.write(`<h1>Please correct the following errors:<br>
            1. Email must contain '@gmail.com'.<br>
            2. Password must be at least 4 characters long.</h1>`);
}

// 7. PASSWORD LENGTH CHECK (correct place is BEFORE success)
else if (!(new_password.length >= 4)) {
    alert("⚠ Password correct but too weak — must be at least 4 characters.")
    console.log("⚠ Password correct but too weak — must be at least 4 characters.");
    document.write(`<h1> ⚠ Password correct but too weak — must be at least 4 characters. </h1>`);
}

// 8. EVERYTHING CORRECT
else {
    console.log("✅ Login Successful! Welcome.");
    document.write(`<h1>✅ Login Successful! Welcome. - <i>Every thing is Correct.</i></h1>`);
}




