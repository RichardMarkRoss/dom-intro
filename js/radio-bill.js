
//var billItemTypeRadio = document.querySelector(".billItemTypeRadio");

var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

var callsTotalTwo = document.querySelector(".callTotalTwo");

var smsTotalTwo = document.querySelector(".smsTotalTwo");

var totalTwo = document.querySelector(".totalTwo");

var templateSource = document.querySelector('.mySecondTemplate').innerHTML;

var compileTemplate2 = Handlebars.compile(templateSource);
var insertMyDataIn = document.querySelector('.insertMyDataTwo');

var radioTotal = RadioAndTextBillFactory();

function radioValue(){

	// var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
	// if (checkedRadioBtn){
	// 		var billItemType = checkedRadioBtn.value;
	// }
}

//var radioBillFactoryFunction = radioBillFactory()


// function radioBillLogic(){


// 	radioTotal.calculate(radioValue())

//     callsTotalTwo.innerHTML = radioTotal.call().toFixed(2);
//     smsTotalTwo.innerHTML = radioTotal.sms().toFixed(2);
//     totalTwo.innerHTML = radioTotal.total().toFixed(2);

    //   if (radioTotal.total() >= 50){
    //      totalTwo.classList.add("danger");
    //  }
    //  else if (radioTotal.total() >= 30){
    //      totalTwo.classList.add("warning");
    //   }

//}


radioBillAddBtn.addEventListener('click', function(){
	var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
	if (checkedRadioBtn){
            var billItemType = checkedRadioBtn.value;
            radioTotal.calculate(billItemType);
console.log(billItemType);

	}
//var billTypeCrossed = radioValue();
//console.log(billTypeCross);


var dataValue = {
   callTotal2: radioTotal.call().toFixed(2),
   smsTotal2: radioTotal.sms().toFixed(2),
   theTotal2: radioTotal.totals().toFixed(2),
};

insertMyDataIn.innerHTML = compileTemplate2(dataValue);


});

window.addEventListener('load', function(){

    var dataValue = {
        callTotal2: radioTotal.call().toFixed(2),
        smsTotal2: radioTotal.sms().toFixed(2),
        theTotal2: radioTotal.totals().toFixed(2)
    };
 
    insertMyDataIn.innerHTML = compileTemplate2(dataValue);

 });
