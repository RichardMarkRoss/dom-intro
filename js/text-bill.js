var billTypeText = document.querySelector(".billTypeText");

var addToBillBtn = document.querySelector(".addToBillBtn");

var callsTotalOne = document.querySelector(".callTotalOne");

var smsTotalOne = document.querySelector(".smsTotalOne");

var totalOne = document.querySelector(".totalOne");



var textBill = RadioAndTextBillFactory()

function textBillLogic(){
  // var billTypeCross = billTypeText.value;


var billTypeCross = billTypeText.value;
textBill.calculate(billTypeCross)
//var textBill = textBillTotal(billTypeCross)
    callsTotalOne.innerHTML = textBill.call().toFixed(2);
    smsTotalOne.innerHTML = textBill.sms().toFixed(2);
    totalOne.innerHTML = textBill.total().toFixed(2);
    //
     if (textBill.total() >= 50){

         totalOne.classList.add("danger");
     }
     else if (textBill.total() >= 30){
         totalOne.classList.add("warning");
     }
}



addToBillBtn.addEventListener('click',function(){
   textBillLogic()
 });
