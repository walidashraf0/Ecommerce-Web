// function redirectToIndex() {
//     window.location.href = "index.html";
// }

function validateForm(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    } else if (emailRegex.test(email)=== true && password.length > 6) {
        window.location.href = "index.html";
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters.');
        return false;
    } else if (emailRegex.test(email) && password.length > 6) {
        window.location.href = "index.html";
    }
}