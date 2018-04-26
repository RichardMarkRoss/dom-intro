
//var billItemTypeRadio = document.querySelector(".billItemTypeRadio");

var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

var callsTotalTwo = document.querySelector(".callTotalTwo");

var smsTotalTwo = document.querySelector(".smsTotalTwo");

var totalTwo = document.querySelector(".totalTwo");





function radioValue(){

	var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
	if (checkedRadioBtn){
			var billItemType = checkedRadioBtn.value;
			console.log(billItemType)
	}
	return billItemType
}

function radioBillFactory(){

	var callsValueTwo = 0;
	var smsValueTwo = 0;

	function radioBillCalculate(billItemType){

	    if (billItemType === "call"){
	        callsValueTwo += 2.75;
	    }
	    if (billItemType === "sms"){
	        smsValueTwo += 0.75;
	    }
		}

		function callValue(){
			return callsValueTwo;
		}

		function smsValue(){
			return smsValueTwo;
		}

		function totalValue(){
			var totalValue = callsValueTwo + smsValueTwo;
			return totalValue
		}

		return {
			calculate: radioBillCalculate,
			call: callValue,
			sms: smsValue,
			total: totalValue
		}

}

//var radioBillFactoryFunction = radioBillFactory()
var radioTotal = radioBillFactory();

function radioBillLogic(){


	radioTotal.calculate(radioValue())

    callsTotalTwo.innerHTML = radioTotal.call().toFixed(2);
    smsTotalTwo.innerHTML = radioTotal.sms().toFixed(2);
    totalTwo.innerHTML = radioTotal.total().toFixed(2);

     // if (totalValue >= 50){
     //     totalTwo.classList.add("danger");
     // }
     // else if (totalValue >= 30){
     //     totalTwo.classList.add("warning");
     // }

}


radioBillAddBtn.addEventListener('click', function(){
radioBillLogic();
});
