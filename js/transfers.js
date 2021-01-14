// Transfer buttons + event listener + function to retrieve the ID of the HTML button element so the relevant account can be selected
let transferButtons = document.querySelectorAll(".transferBtn");
transferButtons.forEach((button) => {
  button.addEventListener("click", getBtnIds);
});
function getBtnIds(e) {
  let getButtonId = e.target.getAttribute("id");
  console.log(getButtonId);
}
//
