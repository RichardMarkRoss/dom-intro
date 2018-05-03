function RadioAndTextBillFactory(){

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
