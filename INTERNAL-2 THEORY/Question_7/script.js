document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const predefinedUsername = 'user';
    const predefinedPassword = 'password';
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === predefinedUsername && password === predefinedPassword) {
        alert('Login successful!');
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
