describe('the text-bill function', function(){
    it('should calculate the text amount of call value and display the total to R2.75', function(){
      var textBill = RadioAndTextBillFactory();

         textBill.calculate('call');

        assert.equal(textBill.totals(), 2.75);
    });
    it('should calculate the amount text values call if clicked twice and display the total of R5.50', function(){
      var textBill = RadioAndTextBillFactory()

         textBill.calculate('call');
         textBill.calculate('call');

        assert.equal(textBill.call(), 5.50);
      });
      it('if the the values are sms and call it should add the total to R3.50', function(){
        var textBill = RadioAndTextBillFactory();

           textBill.calculate('call');
           textBill.calculate('sms');

          assert.equal(textBill.call(), 2.75);
          assert.equal(textBill.sms(), 0.75);
          assert.equal(textBill.totals(), 3.50);
        });
});
