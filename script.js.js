// OPEN AND CLOSE SIDEBAR
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");

    if (sidebar) {
        sidebar.classList.toggle("show");
    }
}

// CONFIRM BEFORE DELETING
function confirmDelete() {
    return confirm("Are you sure you want to delete this record?");
}

// WELCOME MESSAGE
console.log("Welcome to School Management System");

// FORM VALIDATION
function validateForm() {
    alert("Please check your information before submitting.");
    return true;
}