class User {
    constructor(title, name) {
        this.userTitle = title;
        this.userName = name;
    }
}

class Account {
    constructor(name, amount) {
        this.accountName = name;
        this.accountAmount = amount;
    }
}

const Primary = new User("Mrs.", "Ligma Bowles");
const Master = new Account("Master Account", 13129);
const Credit = new Account("Credit Card", 213452);

let getAmountArea = document.getElementById("accountOneValue");
let getAmountAreaTwo = document.getElementById("accountTwoValue");

function showDetails() {
    document.querySelector("#accountName p").textContent = `${Primary.userTitle} ${Primary.userName}`;

    document.getElementsByClassName("account-title")[0].textContent = Master.accountName;
    document.getElementsByClassName("account-title")[1].textContent = Credit.accountName;

    getAmountArea.textContent = `Balance: $ ${Master.accountAmount}`;
    getAmountAreaTwo.textContent = `Balance: $ ${Credit.accountAmount}`;
}

showDetails();

// Account and User values
// Transfer amounts

let transferAmountBtn = document.getElementById("transferAmountBtn").addEventListener("click", TransferCP);

function TransferCP(e) {
    e.preventDefault();

    // get amount from input to add to CC
    let transferAmount = document.getElementById("transferAmount").value;
    let addTransferAmount = Master.accountAmount + parseInt(transferAmount);
    let getTransferAmount = Credit.accountAmount - parseInt(transferAmount);

    if (transferAmount < 1) {
        alert("Please enter a valid amount");
        document.getElementById("transferAmount").value = "";
    }

    else if (transferAmount > Credit.accountAmount) {
        alert("Not enough available funds to complete the transaction");
        document.getElementById("transferAmount").value = "";
    }

    else if (transferAmount >= 1) {
        var conf = confirm("Are you sure you like to proceed?");
        if (conf === true) {
            getAmountArea.textContent = `Balance: $ ${addTransferAmount}`;
            getAmountAreaTwo.textContent = `Balance: $ ${getTransferAmount}`;
            document.getElementById("transferAmount").value = "";

            alert("Transaction successful!");
        }
        else {
            alert("Tranasction stopped");
            document.getElementById("transferAmount").value = "";
        }
    }
}

// Second transfer

let transferAmountBtnTwo = document.getElementById("transferAmountBtnTwo").addEventListener("click", TransferMC);

function TransferMC(e) {
    e.preventDefault();

    // get amount from input to add to Master
    let transferAmount = document.getElementById("transferAmountTwo").value;
    let addTransferAmount = Master.accountAmount - parseInt(transferAmount);
    let getTransferAmount = Credit.accountAmount + parseInt(transferAmount);

    if (transferAmount < 1) {
        alert("Please enter a valid amount");
        document.getElementById("transferAmountTwo").value = "";
    }

    else if (transferAmount > Master.accountAmount) {
        alert("Not enough available funds to complete the transaction");
        document.getElementById("transferAmountTwo").value = "";
    }

    else if (transferAmount >= 1) {
        var conf = confirm("Are you sure you like to proceed?");
        if (conf === true) {
            getAmountArea.textContent = `Balance: $ ${addTransferAmount}`;
            getAmountAreaTwo.textContent = `Balance: $ ${getTransferAmount}`;
            document.getElementById("transferAmount").value = "";

            alert("Transaction successful!");
        }
        else {
            alert("Tranasction stopped");
            document.getElementById("transferAmount").value = "";
        }
    }
}

// Transfer modal

let transferToCC = document.getElementById("transferCC").addEventListener("click", (e) => {
    e.preventDefault();

    let item = document.querySelector(".modal-cc");
    let closeBtn = document.querySelector(".modal-cc img");
    item.classList.add("modal-open");

    closeBtn.addEventListener("click", () => {
        item.classList.remove("modal-open");
    });

})

let transferToMaster = document.getElementById("transferMaster").addEventListener("click", (e) => {
    e.preventDefault();

    let item = document.querySelector(".modal-master");
    let closeBtn = document.querySelector(".modal-master img");
    item.classList.add("modal-open");

    closeBtn.addEventListener("click", () => {
        item.classList.remove("modal-open");
    });

})
