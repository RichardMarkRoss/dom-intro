var billTypeText = document.querySelector(".billTypeText");

var addToBillBtn = document.querySelector(".addToBillBtn");

var callsTotalOne = document.querySelector(".callTotalOne");

var smsTotalOne = document.querySelector(".smsTotalOne");

var totalOne = document.querySelector(".totalOne");




function textBillTotal(){

    var billTypeEntered = billTypeText.value.trim();

    if (billTypeEntered === "call"){
        callsTotalOne += 2.75;
    }
    else if (billTypeEntered === "sms"){
        smsTotalOne += 0.75;
    }


    callsTotalOne.innerHTML = callsTotalOne.toFixed(2);
    smsTotalOne.innerHTML = smsTotalOne.toFixed(2);
    var totalCost = callsTotalOne + smsTotalOne;
    totalOne.innerHTML = totalOne.toFixed(2);
}
    if (totalOne >= 50){

        totalOne.classList.add("danger");
    }
    else if (totalOne >= 30){
        totalOne.classList.add("warning");
    }


addToBillBtn.addEventListener('click', textBillTotal);
