var billTypeText = document.querySelector(".billTypeText");

var addToBillBtn = document.querySelector(".addToBillBtn");

var callsTotalOne = document.querySelector(".callTotalOne");

var smsTotalOne = document.querySelector(".smsTotalOne");

var totalOne = document.querySelector(".totalOne");


function textBillCalculate(){
  var callValue = 0;
  var smsValue = 0;
  //var totalValue = 0

function textBillTotal(billTypeEntered){
    if (billTypeEntered === "call"){
        callValue += 2.75;
    }
    if (billTypeEntered === "sms"){
        smsValue += 0.75;
    }
  //  return billTypeEntered;
  }
  function callValues(){
      return callValue;
    }

  function smsValues(){
      return smsValue;
  }
  function totalValues(){
      var totalValue = callValue + smsValue;
      return totalValue;
  }
  return{
    calculate: textBillTotal,
    call: callValues,
    sms: smsValues,
    total: totalValues,
  }

}


var textBill = textBillCalculate()

function textBillLogic(){
  // var billTypeCross = billTypeText.value;


var billTypeCross = billTypeText.value;
textBill.calculate(billTypeCross)
//var textBill = textBillTotal(billTypeCross)
    callsTotalOne.innerHTML = textBill.call().toFixed(2);
    smsTotalOne.innerHTML = textBill.sms().toFixed(2);
    totalOne.innerHTML = textBill.total().toFixed(2);
    //
    // if (totalValue >= 50){
    //
    //     totalOne.classList.add("danger");
    // }
    // else if (totalValue >= 30){
    //     totalOne.classList.add("warning");
    // }
}



addToBillBtn.addEventListener('click',function(){
   textBillLogic()
 });
