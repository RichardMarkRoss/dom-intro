
//var billItemTypeRadio = document.querySelector(".billItemTypeRadio");

var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

var callsTotalTwo = document.querySelector(".callTotalTwo");

var smsTotalTwo = document.querySelector(".smsTotalTwo");

var totalTwo = document.querySelector(".totalTwo");

var templateSource = document.querySelector('.myFirstTemplate').innerHTML;

var compileTemplate = Handlebars.compile(templateSource);
var insertMyDataAt = document.querySelector('.insertMyData');

var radioTotal = RadioAndTextBillFactory();

function radioValue(){

	var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
	if (checkedRadioBtn){
			var billItemType = checkedRadioBtn.value;
			//console.log(billItemType)
	}
	return billItemType
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
radioValue();
var billTypeCross = radioBillAddBtn.value;
radioTotal.calculate(billTypeCross)

var data = {
   callTotal: radioTotal.call().toFixed(2),
   smsTotal: radioTotal.sms().toFixed(2),
   theTotal: radioTotal.totals().toFixed(2),
//    levels: radioTotal.checkLevels()
};

insertMyDataAt.innerHTML = compileTemplate(data);

});

window.addEventListener('load', function(){

    var data = {
        callTotal: radioTotal.call().toFixed(2),
        smsTotal: radioTotal.sms().toFixed(2),
        theTotal: radioTotal.totals().toFixed(2)
    }
 
    insertMyDataAt.innerHTML = compileTemplate(data);

 });
