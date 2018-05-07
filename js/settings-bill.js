var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var updateSetting = document.querySelector(".updateSetting");

var billItemWithSetting = document.querySelector(".billItemTypeWithSettings");
var buttonAdd = document.querySelector(".thisDamnBtn");
var callTotalSetting = document.querySelector(".callTotalSettings");
var smsTotalsetting = document.querySelector(".smsTotalSettings");
var totalSetting = document.querySelector(".totalSettings");
var updateSettingBtn = document.querySelector(".updateSettings");

var factory = settingBill();


function settingBillcheckBtn() {

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billItemSet = checkedRadioBtn.value;
    }
    return billItemSet;
}

//function settingBillAmount(){

// var callTheTotal = 0;
// var smsTheTotal = 0;
// var callAmount = 0;
// var smsAmount = 0;
// var warnLevel = 0;
// var critLevel = 0;
// var totalValue = 0;



//function addTotal(){

// if (billItemSet === "call"){
//     callTheTotal += callAmount;
//     if(callTheTotal > critLevel ){
//       var diff = callTheTotal - critLevel;
//       callTheTotal -= diff
//
//     }
//  }else if (billItemSet === "sms"){
//      smsTheTotal += smsAmount;
//      if (smsTheTotal > critLevel){
//        var diff = smsTheTotal - critLevel;
//       smsTheTotal -= diff;
//      }

//  }


// function settingBillLogicAdd(){
//     smsTotalsetting.innerHTML = settingTotal.toFixed(2);
//     callTotalSetting.innerHTML = settingTotal.toFixed(2);
//      totalValue = callTheTotal + smsTheTotal;
//     totalSetting.innerHTML = settingTotal.toFixed(2);
// }

function settingBillLogicAdd() {

  //  factory.calculate(settingBillLogicAdd());

    callTotalSetting.innerHTML = factory.callTotal();
    smsTotalsetting.innerHTML = factory.smsTotal();
    totalSetting.innerHTML = factory.total();
    //smsTotalSetting.innerHTML = settingTotal.toFixed(2);
    //totalValue = callTheTotal + smsTheTotal;
    //totalSetting.innerHTML = settingTotal.toFixed(2);
}

// function settingBillLevelStop(){
    // if (factory.total() >= critical(value)){
    //     totalSetting.classList.add("danger");
    //
    //       }
    // if (factory.total() >= warning(value)){
    //     totalSetting.classList.add("warning");
    //       }
//
//     return totalValue;
//
//   }

//  }

//  }

//========================================================================
function addSetting() {

    var updateAmountCall = callCostSetting.value;
    var updateAmountSms = smsCostSetting.value;
    var updateAmountcritLvl = criticalLevelSetting.value;
    var updateAmountwarnLvl = warningLevelSetting.value;

     //console.log(updateAmountCall);
       factory.updateCall(updateAmountCall);
       factory.updateSms(updateAmountSms);
       factory.warning(updateAmountwarnLvl);
       factory.critical(updateAmountcritLvl);
       //factory.updateCall(updateAmountCall)
    // console.log(updateAmountSms);

    //factory.updateCall(updateAmountCall)
    //console.log(updateAmountCall)
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

        // if (critLevel > totalValue){
        //     totalSetting.classList.remove("danger");
        //
        // }
        // if (total() >= critical()){
        //     totalSetting.classList.add("danger");
        //
        //       }
        // if (total() >= warning()){
        //     totalSetting.classList.add("warning");
        //       }

}
updateSettingBtn.addEventListener("click", function() {
    addSetting();
});
buttonAdd.addEventListener("click", function() {
    factory.calculate(settingBillcheckBtn());
    settingBillLogicAdd();
});
