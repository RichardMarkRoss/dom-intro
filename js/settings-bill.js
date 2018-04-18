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
var totalValue = 0;


function addTotal(){

  		var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
		if (checkedRadioBtn){
    		var billItemSet = checkedRadioBtn.value;
		}


    if (billItemSet === "call"){
        callTheTotal += callAmount;
        if(callTheTotal > critLevel ){
          var diff = callTheTotal - critLevel;
          callTheTotal -= diff

        }
     }else if (billItemSet === "sms"){
         smsTheTotal += smsAmount;
         if (smsTheTotal > critLevel){
           var diff = smsTheTotal - critLevel;
          smsTheTotal -= diff;
         }
    }

    smsTotalsetting.innerHTML = smsTheTotal.toFixed(2);
    callTotalSetting.innerHTML = callTheTotal.toFixed(2);
     totalValue = callTheTotal + smsTheTotal;
    totalSetting.innerHTML = totalValue.toFixed(2);

    if (totalValue >= critLevel){
        totalSetting.classList.add("danger");

    }



    if (totalValue >= warnLevel){
        totalSetting.classList.add("warning");
    }

	}

  function addSetting(){

  var updateAmountCall = callCostSetting.value;
  var updateAmountSms = smsCostSetting.value;
  var updateAmountcritLvl = criticalLevelSetting.value;
  var updateAmountwarnLvl = warningLevelSetting.value;

  if(callCostSetting != ""){
      callAmount = parseFloat(updateAmountCall);
    }

    if(smsCostSetting != ""){
        smsAmount = parseFloat(updateAmountSms);
      }
    // console.log(callAmount)
    // console.log(smsAmount)
      if(warningLevelSetting != ""){
      warnLevel = parseFloat(updateAmountwarnLvl);
      }
      if(criticalLevelSetting != ""){
      critLevel = parseFloat(updateAmountcritLvl);
      }

      if (critLevel > totalValue){
          totalSetting.classList.remove("danger");

      }


      // if (warnLevel > totalValue){
      //     totalSetting.classList.remove("warning");
      //
      //       }
  }
  buttonAdd.addEventListener("click", addTotal);
  updateSettingBtn.addEventListener("click", addSetting);
