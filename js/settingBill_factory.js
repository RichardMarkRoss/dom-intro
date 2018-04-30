function settingBill(){

  var callTheTotal = 0;
  var smsTheTotal = 0;
  var callAmount = 0;
  var smsAmount = 0;
  var warnLevel = 0;
  var critLevel = 0;
  var totalValue = 0;

  function calculateBill(billItemSet){

    if (billItemSet === "call"){
        callTheTotal += callAmount;
        if(callTheTotal > critLevel ){
          var diff = callTheTotal - critLevel;
          callTheTotal -= diff;

        }

     }else if (billItemSet === "sms"){
         smsTheTotal += smsAmount;
         if (smsTheTotal > critLevel){
           var diff = smsTheTotal - critLevel;
          smsTheTotal -= diff;
         }
  }

}

function updateCallValue(value){
  callAmount = parseFloat(value);
  console.log(callAmount)

  return callAmount;
    }

function returnCallTotal(){
    return callTheTotal.toFixed(2);
    }


function updateSmsValue(value){
        smsAmount = parseFloat(value);
        return smsAmount;
    }
function returnSmsTotal(){
  return smsTheTotal;
}


return{
  calculate: calculateBill,
  callTotal: returnCallTotal,
  smsTotal: returnSmsTotal,
  updateCall:updateCallValue,
  updateSms: updateSmsValue,
};
}
