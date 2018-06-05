var calculateBtn = document.querySelector(".calculateBtn");

var billTotalElement = document.querySelector(".billTotal");

var billStringValue = document.querySelector(".billString");

function displayElement() {

  var billvalues = billStringValue.value;

  billTotalElement.innerHTML = CalculateBtnClick(billvalues);


  if (CalculateBtnClick(billvalues) >= 30) {

    billTotalElement.classList.add("danger");
  } else if (CalculateBtnClick(billvalues) >= 20) {
    billTotalElement.classList.add("warning");
  }
}


calculateBtn.addEventListener('click', function () {
  displayElement();

});