var billTypeText = document.querySelector(".billTypeText");

var addToBillBtn = document.querySelector(".addToBillBtn");

var callsTotalOne = document.querySelector(".callTotalOne");

var smsTotalOne = document.querySelector(".smsTotalOne");

var totalOne = document.querySelector(".totalOne");

var callValue = 0;
var smsValue = 0;
//var totalValue = 0

function textBillTotal(){

    var billTypeCross = billTypeText.value;

    var billTypeEntered = billTypeCross.trim();

    if (billTypeEntered === "call"){
        callValue += 2.75;
    }
    if (billTypeEntered === "sms"){
        smsValue += 0.75;
    }


    callsTotalOne.innerHTML = callValue.toFixed(2);
    smsTotalOne.innerHTML = smsValue.toFixed(2);
    var totalValue = callValue + smsValue;
    totalOne.innerHTML = totalValue.toFixed(2);

    if (totalValue >= 50){

        totalOne.classList.add("danger");
    }
    else if (totalValue >= 30){
        totalOne.classList.add("warning");
    }

}


addToBillBtn.addEventListener('click', textBillTotal);
