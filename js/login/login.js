function validateLogin() {
    const contact = document.getElementById("tp").value;
    const password = document.getElementById("pass").value;
    
    // Get error display elements
    const tpError = document.getElementById("tpError");
    const passError = document.getElementById("passError");
    
    // Get input elements for styling
    const tpInput = document.getElementById("tp");
    const passInput = document.getElementById("pass");

    // Reset previous errors
    tpError.textContent = "";
    passError.textContent = "";
    tpInput.classList.remove("input-error");
    passInput.classList.remove("input-error");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // 1. Check if the contact number exists at all
    const userExists = users.find(u => u.contact === contact);
    
    // 2. Check if the full credentials match
    const userMatch = users.find(u => u.contact === contact && u.password === password);

    if (userMatch) {
        window.location.href = "home.html";
        return false;
    } else {
        if (!userExists) {
            // Error specifically for the contact field
            tpError.textContent = "Account not found";
            tpInput.classList.add("input-error");
        } else {
            // Contact exists, but password was wrong
            passError.textContent = "Incorrect password";
            passInput.classList.add("input-error");
        }
        return false;
    }
}