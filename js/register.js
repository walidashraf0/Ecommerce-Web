function validateForm(event) {
  event.preventDefault(); // Prevent form submission by default

  // Get input values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (firstName === "" || lastName === "") {
    alert("Please enter your first and last name.");
    return;
  }

  // Validate email
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  } else if (
    emailRegex.test(email) === true &&
    password.length > 6 &&
    password === confirmPassword
  ) {
    window.location.href = "login.html";
  }

  // Validate password and confirm password
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  } else if (
    emailRegex.test(email) === true &&
    password.length > 6 &&
    password === confirmPassword
  ) {
    window.location.href = "login.html";
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  } else if (
    emailRegex.test(email) === true &&
    password.length > 6 &&
    password === confirmPassword
  ) {
    window.location.href = "login.html";
  }
}
