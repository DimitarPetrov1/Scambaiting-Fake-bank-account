document.querySelector(".login-btn").addEventListener('click', Login);
document.querySelector("input[type=password]").addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        Login();
    }
});

function Login() {
    let getUsername = document.querySelector("input[type=text]");
    let getPassword = document.querySelector("input[type=password]");

    if (getUsername.value == "") {
        alert("Enter your username");
    }

    else if (getPassword.value == "") {
        alert("Enter your password");
    }

    else if (getPassword.value == "banana2") {
        let loader = document.querySelector(".loader");
        loader.classList.add("loading");

        setInterval(() => {
            window.location.href = "banking-page.html";
        }, 2000);
    }
    else {
        alert("Wrong password");
        getUsername.value = "";
        getPassword.value = "";
    }
}


