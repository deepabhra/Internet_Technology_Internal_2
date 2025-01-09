document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var terms = document.getElementById('terms').checked;

    if (!username || !email || !password || !terms) {
        alert('Please fill all fields and agree to the terms and conditions.');
        event.preventDefault();
    }
});
