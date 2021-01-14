document.querySelector(".login-btn").addEventListener("click", Login);
document
  .querySelector("input[type=password]")
  .addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      Login();
    }
  });

function Login() {
  let getUsername = document.querySelector("input[type=text]").value;
  let getPassword = document.querySelector("input[type=password]").value;

  if (getUsername === "") {
    alert("Enter your username");
  } else if (getPassword === "") {
    alert("Enter your password");
  } else if (getPassword === "banana2") {
    let loader = document.querySelector(".loader");
    loader.classList.add("loading");

    setInterval(() => {
      window.location.href = "banking-page.html";
    }, 1000);
  } else {
    alert("Wrong password");
    getUsername = "";
    getPassword = "";
  }
}
