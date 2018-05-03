  function CalculateBtnClick(billstring){
  //  var billstring = billStringEle;
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



// function billTotal(){
//   return billTotal
// }
// function billItem(){
//   var billItem = billItems[i];
//   return billItems
// }
//   return{
//     total: billTotal,
//     calculate: billItem
//   }
