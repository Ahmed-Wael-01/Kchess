function validateForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rePassword = document.getElementById('re-password').value;

if (firstName.trim() === '') {
    alert('Please enter your first name.');
    return false;
    }

if (lastName.trim() === '') {
    alert('Please enter your last name.');
    return false;
}

if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return false;
    }

if (username.length < 5 || username.length > 20 || !/^[a-zA-Z0-9_]+$/.test(username)) {
    alert('Username must be between 5 and 20 characters and contain only alphanumeric characters or underscores.');
    return false;
    }

if (password.length < 8 || !/\d/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
    alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
    return false;
    }

if (password !== rePassword) {
    alert('Passwords do not match.');
    return false;
}
    return true;
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
