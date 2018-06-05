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
function settingBillLogicAdd() {

    callTotalSetting.innerHTML = factory.callTotal();
    smsTotalsetting.innerHTML = factory.smsTotal();
    totalSetting.innerHTML = factory.total();

//========================================================================
function addSetting() {

    var updateAmountCall = callCostSetting.value;
    var updateAmountSms = smsCostSetting.value;
    var updateAmountcritLvl = criticalLevelSetting.value;
    var updateAmountwarnLvl = warningLevelSetting.value;

       factory.updateCall(updateAmountCall);
       factory.updateSms(updateAmountSms);
       factory.warning(updateAmountwarnLvl);
       factory.critical(updateAmountcritLvl);


}
updateSettingBtn.addEventListener("click", function() {
    addSetting();
});
buttonAdd.addEventListener("click", function() {
    factory.calculate(settingBillcheckBtn());
    settingBillLogicAdd();
});
