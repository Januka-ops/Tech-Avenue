function checkPassword() {
    const password = document.getElementById("pass").value;
    const confirmPassword = document.getElementById("c-pass").value;
    const error = document.getElementById("ConfirmError");
    const input = document.getElementById("c-pass"); // Defining 'input' to fix the error
    
    const l_error = document.getElementById("passError");
    const l_input = document.getElementById("pass");

    if (password.length < 8) {
        l_error.textContent = "Password must be at least 8 characters long";
        l_input.classList.add("input-error");
        l_input.classList.remove("input-valid");
        return false; // stop form submit
    } 
    l_error.textContent = "";
    l_input.classList.remove("input-error");
    l_input.classList.add("input-valid");
    
    if (password !== confirmPassword) {
        error.textContent = "Password mismatch";
        input.classList.add("input-error");
        input.classList.remove("input-valid");
        return false; // stop form submit
    }
    error.textContent = "";
    input.classList.remove("input-error");
    input.classList.add("input-valid");
    return true; // allow submit
}


function tplength() {
    const contact = document.getElementById("tp").value.trim();
    const error = document.getElementById("tpError");
    const input = document.getElementById("tp");

    if (!/^\d{10}$/.test(contact)) {
        error.textContent = "Required 10 digit number";
        input.classList.add("input-error");
        input.classList.remove("input-valid");
        return false;
    }

    error.textContent = "";
    input.classList.remove("input-error");
    input.classList.add("input-valid");
    return true;
}

document.getElementById("myForm").addEventListener("submit", function(e) {
    if (!tplength()) {
        e.preventDefault(); // stop form submit if invalid
    }
});



function showSuccessPopup(name) {
    // Create backdrop
    const backdrop = document.createElement("div");
    backdrop.className = "popup-backdrop";
    document.body.appendChild(backdrop);

    // Create popup container
    const popup = document.createElement("div");
    popup.className = "success-popup";

    popup.innerHTML = `
        <div class="popup-icon">✅</div>
        <h2 class="popup-title">Welcome, ${name}!</h2>
        <p class="popup-message">Your account has been created successfully!</p>
        <p class="popup-redirect">Redirecting to login page...</p>
    `;

    document.body.appendChild(popup);

    // Redirect to login page after 3 seconds
    setTimeout(() => {
        window.location.href = "login.html";
    }, 3000);
}


function saveSignupDetails(event) {
    if (!tplength()) {
        return false;
    }
    if (!checkPassword()) {
        return false;
    }

    const name = document.getElementById("name").value;
    const contact = document.getElementById("tp").value;
    const address = document.getElementById("address").value;
    const password = document.getElementById("pass").value;

    // Get existing users array or create new one
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Create user object
    const newUser = {
        name: name,
        contact: contact,
        address: address,
        password: password
    };

    // Add new user to array
    users.push(newUser);

    // Save updated array to local storage
    localStorage.setItem("users", JSON.stringify(users));

    // Log the users array to console
    console.log("Users array:", users);
    console.table(users);

    // Show stunning popup message with blurred background
    showSuccessPopup(name);

    tplength();
    checkPassword();
    
    // Reset form
    document.getElementById("form").reset();
    
    return false; // Prevent form submission
}