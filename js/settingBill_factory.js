
function settingBill(){

  var callTheTotal = 0;
  var smsTheTotal = 0;
  var callAmount = 0;
  var smsAmount = 0;
  var warnLevel = 0;
  var critLevel = 0;
  //var totalValue = 0;

  // if(callCostSetting != ""){
  //     callAmount = parseFloat(updateAmountCall);
  //   }
  // if(smsCostSetting != ""){
  //     smsAmount = parseFloat(updateAmountSms);
  //   }
  // if(warningLevelSetting != ""){
  //     warnLevel = parseFloat(updateAmountwarnLvl);
  //   }
  // if(criticalLevelSetting != ""){
  //     critLevel = parseFloat(updateAmountcritLvl);
  //   }


  function calculateBill(billItemSet){

    if (billItemSet === "call"){
        callTheTotal += callAmount;
        // if(callTheTotal > critLevel ){
        //   var diff = callTheTotal - critLevel;
        //   callTheTotal -= diff;

      //  }

     }else if (billItemSet === "sms"){
         smsTheTotal += smsAmount;
         // if (smsTheTotal > critLevel){
         //   var diff = smsTheTotal - critLevel;
         //  smsTheTotal -= diff;
         // }
  }

}

function updateCallValue(value){
  callAmount = parseFloat(value);
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
  return smsTheTotal.toFixed(2);
}

function totalReturn(){
var theTotal = callTheTotal + smsTheTotal;
  return theTotal.toFixed(2)
}


return{
  calculate: calculateBill,
  callTotal: returnCallTotal,
  smsTotal: returnSmsTotal,
  total: totalReturn,
  updateCall:updateCallValue,
  updateSms: updateSmsValue,
};
}
