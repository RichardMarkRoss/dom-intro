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

var callTheTotal = 0;
var smsTheTotal = 0;
var callAmount = 0;
var smsAmount = 0;
var warnLevel = 0;
var critLevel = 0;

function addSetting(){

var updateAmountCall = callCostSetting.value;
var updateAmountSms = smsCostSetting.value;
var updateAmountcritLvl = criticalLevelSetting.value;
var updateAmountwarnLvl = warningLevelSetting.value;

if(callCostSetting != ""){
    callAmount = parseFloat(updateAmountCall);
    //callTheTotal += callAmount;
  }

  if(smsCostSetting != ""){
      smsAmount = parseFloat(updateAmountSms);
    //  smsTheTotal += smsAmount;
    }
  // console.log(callAmount)
  // console.log(smsAmount)
    if(warningLevelSetting != ""){
    warnLevel = parseFloat(updateAmountwarnLvl);
    }
    if(criticalLevelSetting != ""){
    critLevel = parseFloat(updateAmountcritLvl);
    }
}

function addTotal(){

  		var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
		if (checkedRadioBtn){
    		var billItemSet = checkedRadioBtn.value;
		}


    if (billItemSet === "call"){
        callTheTotal += callAmount;
    }

    if (billItemSet === "sms"){
        smsTheTotal += smsAmount;
    }



    // if (billItemWithSetting = smsAmount){
    //     smsTotalsetting += smsAmount;
    // }
    console.log(callTheTotal);


    smsTotalsetting.innerHTML = smsTheTotal.toFixed(2);
    callTotalSetting.innerHTML = callTheTotal.toFixed(2);
    var totalValue = callTheTotal  + smsTheTotal;
    totalSetting.innerHTML = totalValue.toFixed(2);

    if (totalValue >= critLevel){

        totalSetting.classList.add("danger");
    }

    else if (totalValue >= warnLevel){
        totalSetting.classList.add("warning");
    }

	}

  updateSettingBtn.addEventListener("click", addSetting);
    buttonAdd.addEventListener("click", addTotal);
