document.addEventListener("DOMContentLoaded", function () {
    
    // Change Text Event
    document.getElementById("changeTextBtn").addEventListener("click", function () {
        let inputText = document.getElementById("textInput").value;
        document.getElementById("outputText").textContent = inputText ? inputText : "Default Text";
    });

    // Toggle Password Visibility
    document.getElementById("togglePasswordBtn").addEventListener("click", function () {
        let passwordField = document.getElementById("passwordField");
        if (passwordField.type === "password") {
            passwordField.type = "text";
            this.textContent = "Hide Password";
        } else {
            passwordField.type = "password";
            this.textContent = "Show Password";
        }
    });

    // Modal Functionality
    let modal = document.getElementById("myModal");
    let openModalBtn = document.getElementById("openModalBtn");
    let closeModal = document.querySelector(".close");

    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

});

