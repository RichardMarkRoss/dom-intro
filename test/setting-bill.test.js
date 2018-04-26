describe('the setting-bill function', function(){
    it('should calculate the amount of the of each strings value and display a total', function(){
      var textBill = textBillCalculate()
//         textBill.calculate('call')
         textBill.calculate('call')

        assert.equal(textBill.call(), 2.75);
    });
});
