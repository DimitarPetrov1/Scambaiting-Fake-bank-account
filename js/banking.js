const user = {
  name: "Ligma Bowles"
};
const accounts = [
  {
    name: "Main Account",
    value: 1000,
    suffix: "**** **** **** 1254"
  },
  {
    name: "Credit Card",
    value: 100,
    suffix: "**** **** **** 9683"
  }
];

// Buttons

// Display account details
function displayDetails() {
  let targetName = document.getElementById("accountName");
  targetName.textContent = user.name;
}

// Master account
function masterAccount() {
  let accountName = document.querySelector(".master_account .account-title");
  let accountSuffix = document.querySelector(".master_account small p");
  let accountValue = document.querySelector(".master_account .account-value");
  accountName.textContent = accounts[0].name;
  accountSuffix.textContent = accounts[0].suffix;
  accountValue.textContent = "$" + accounts[0].value;
}
// Second account
function secondAccount() {
  let accountName = document.querySelector(".second_account .account-title");
  let accountSuffix = document.querySelector(".second_account small p");
  let accountValue = document.querySelector(".second_account .account-value");
  accountName.textContent = accounts[1].name;
  accountSuffix.textContent = accounts[1].suffix;
  accountValue.textContent = "$" + accounts[1].value;
}
displayDetails();
masterAccount();
secondAccount();
