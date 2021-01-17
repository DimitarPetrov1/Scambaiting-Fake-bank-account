// Getting account buttons + the amount of each account + adding event listener for the account buttons
let transferButtons = document.querySelectorAll("._account .transferBtn");
// Getting the Modal for transfers + open and close function
let rootModal = document.getElementById("rootModal");
let modalTemplate = `
<form class="modal modal-open">
  <p>namee</p>
    <div class="modal-separator">
      <input id="transferAmount" type="number" />
      <button id="submitBtn" type="submit">Submit</button>
    </div>
  <img class="closeBtn" src="img/svg/x.svg" alt="X" />
</form>
`;
rootModal.innerHTML = modalTemplate;
let closeModalBtn = document.querySelector(".closeBtn");
closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  let target = document.querySelector(".modal");
  if (target.classList.contains("modal-open")) {
    target.classList.remove("modal-open");
  } else {
    target.classList.add("modal-open");
  }
}
//

transferButtons.forEach((button) => {
  button.addEventListener("click", getTransferDetails);
});
function getTransferDetails(e) {
  e.preventDefault();
  let att = this.parentElement.parentElement;
  toggleModal();
  if (att.hasAttribute("value")) {
    console.log(att.getAttribute("value"));
  } else {
    return null;
  }
}
