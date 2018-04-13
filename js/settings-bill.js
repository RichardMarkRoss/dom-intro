var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var updateSetting = document.querySelector(".updateSetting");

var billItemWithSetting = document.querySelector(".billItemTypeWithSettings");
var buttonPrimary = document.querySelector(".thisDamnBtn");
var callTotalSetting = document.querySelector("callTotalSetting");
var smsTotalsetting = document.querySelector(".smsTotalSetting");
var totalSetting = document.querySelector("totalSetting");
var updateSettingBtn = document.querySelector(".updateSettings");

var callTheTotal = 0;
var callAmount = 0;
var smsAmount = 0;

function addSetting(){

var  updateAmountCall = callCostSetting.value;

if(callCostSetting !== ""){
    callAmount = parseFloat(updateAmountCall);
    //callTheTotal += callAmount;
    //console.log(callAmount)
}

}

function addTotal(){

  		var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
		if (checkedRadioBtn){
    		var billItemSet = checkedRadioBtn.value;
		}


    if (billItemSet === "call"){
        callTheTotal += callAmount;
        //console.log(callTheTotal)
    }
    // if (billItemWithSetting = smsAmount){
    //     smsTotalsetting += smsAmount;
    // }


  //  smsTotalsetting.innerHTML = smsTotalsetting.toFixed(2);
    var totalValue = callTheTotal;// + smsTotalsetting;
    totalSetting.innerHTML = totalValue.toFixed(2);
	}

  updateSettingBtn.addEventListener("click", addSetting);
    buttonPrimary.addEventListener("click", addTotal);
