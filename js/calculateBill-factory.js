  function CalculateBtnClick(billstring){

    var billItems = billstring.split(",");
    var billTotal = 0;


  for (var i=0;i<billItems.length;i++){
      var billItem = billItems[i];//.trim();
      if (billItem === "call"){
          billTotal += 2.75;
      }
    if (billItem === "sms"){
          billTotal += 0.75;
      }

  }
var roundedBillTotal = billTotal.toFixed(2);
return roundedBillTotal;
  }
