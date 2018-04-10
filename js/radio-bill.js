
//var billItemTypeRadio = document.querySelector(".billItemTypeRadio");

var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

var callsTotalTwo = document.querySelector(".callTotalTwo");

var smsTotalTwo = document.querySelector(".smsTotalTwo");

var totalTwo = document.querySelector(".totalTwo");



var callsValueTwo = 0;
var smsValueTwo = 0;

function radioBillTotal(){


		var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
		if (checkedRadioBtn){
    		var billItemType = checkedRadioBtn.value;
        console.log(billItemType)
		}


    if (billItemType === "call"){
        callsValueTwo += 2.75;
    }
    if (billItemType === "sms"){
        smsValueTwo += 0.75;
    }


    callsTotalTwo.innerHTML = callsValueTwo.toFixed(2);
    smsTotalTwo.innerHTML = smsValueTwo.toFixed(2);
    var totalValue = callsValueTwo + smsValueTwo;
    totalTwo.innerHTML = totalValue.toFixed(2);

    // if (totalValue >= 50){
    //
    //     totalTwo.classList.add("danger");
    // }
    // else if (totalValue >= 30){
    //     totalTwo.classList.add("warning");
    // }

}


radioBillAddBtn.addEventListener('click', radioBillTotal);
