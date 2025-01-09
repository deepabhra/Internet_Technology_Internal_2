document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;

        if (!username || !password) {
            alert('Please fill in both fields.');
            return;
        }

        if (!validateUsername(username)) {
            alert('Username must contain "@" symbol.');
            return;
        }

        if (!validatePassword(password)) {
            alert('Password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }

        alert('Login successful!');
        form.reset();
    });

    function validateUsername(username) {
        return username.includes('@');
    }

    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        return re.test(password);
    }
});
