var billTypeText = document.querySelector(".billTypeText");

var addToBillBtn = document.querySelector(".addToBillBtn");

var callsTotalOne = document.querySelector(".callTotalOne");

var smsTotalOne = document.querySelector(".smsTotalOne");

var totalOne = document.querySelector(".totalOne");

var templateSource = document.querySelector('.myFirstTemplate').innerHTML;

var compileTemplate = Handlebars.compile(templateSource);
var insertMyDataAt = document.querySelector('.insertMyData');

var textBill = RadioAndTextBillFactory();

addToBillBtn.addEventListener('click', function () {
    var billTypeCross = billTypeText.value;
    textBill.calculate(billTypeCross);

    // var className = "";
    // if (textBill.total() >= 50) {
    //     className = "danger";
    // } else if (textBill.total() >= 30) {
    //     //document.getElementById("totalOne").classList.add("warning");
    // }


    var data = {
        callTotal: textBill.call().toFixed(2),
        smsTotal: textBill.sms().toFixed(2),
        theTotal: textBill.totals().toFixed(2),
        levelTotal: textBill.colorTotal(),
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