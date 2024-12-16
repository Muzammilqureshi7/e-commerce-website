

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('confirmForm').style.display = 'block';
});

document.getElementById('confirmLoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var confirmUsername = document.getElementById('confirmUsername').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var originalUsername = localStorage.getItem('username');
    var originalPassword = localStorage.getItem('password');

    if (confirmUsername === originalUsername && confirmPassword === originalPassword) {
        window.location.href = 'dashboard.html';
    } else {
        alert('The username or password does not match. Please try again.');
    }
});