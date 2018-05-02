describe('the text-bill function', function(){
    it('should calculate the amount of the of each strings value and display a total', function(){
      var textBill = textBillCalculate()

         textBill.calculate('call')

        assert.equal(textBill.call(), 2.75);
    });
    it('should calculate the amount of the of each strings value and display a total', function(){
      var textBill = textBillCalculate()

         textBill.calculate('call')
         textBill.calculate('call')

        assert.equal(textBill.call(), 5.50);
      });
      it('should calculate the amount of the of each strings value and display a total', function(){
        var textBill = textBillCalculate()

           textBill.calculate('call')
           textBill.calculate('sms')

          assert.equal(textBill.call(), 2.75);
          assert.equal(textBill.sms(), 0.75);
          assert.equal(textBill.total(), 3.50);
        });
});
