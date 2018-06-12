var billTypeText = document.querySelector(".billTypeText");

var addToBillBtn = document.querySelector(".addToBillBtn");

var callsTotalOne = document.querySelector(".callTotalOne");

var smsTotalOne = document.querySelector(".smsTotalOne");

var totalOne = document.querySelector(".totalOne");

var templateSource = document.querySelector('.myFirstTemplate').innerHTML;

var compileTemplate = Handlebars.compile(templateSource);
var insertMyDataAt = document.querySelector('.insertMyData');



var textBill = RadioAndTextBillFactory();


// function textBillLogic(){

// var billTypeCross = billTypeText.value;
// textBill.calculate(billTypeCross)

//      if (textBill.total() >= 50){

//          totalOne.classList.add("danger");
//      }
//      else if (textBill.total() >= 30){
//          totalOne.classList.add("warning");
//      }
// }



addToBillBtn.addEventListener('click', function () {
    var billTypeCross = billTypeText.value;
    textBill.calculate(billTypeCross);
 
    

    var data = {
        callTotal: textBill.call().toFixed(2),
        smsTotal: textBill.sms().toFixed(2),
        theTotal: textBill.totals().toFixed(2),

    };

    insertMyDataAt.innerHTML = compileTemplate(data);

});

window.addEventListener('load', function () {

    var data = {
        callTotal: textBill.call().toFixed(2),
        smsTotal: textBill.sms().toFixed(2),
        theTotal: textBill.totals().toFixed(2)

    };


    insertMyDataAt.innerHTML = compileTemplate(data);

});