document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'abc@clt.com' && password === '12345') {
        window.location.href = 'index2.html'
    }
    else {
        alert('invalid user')
    }
})