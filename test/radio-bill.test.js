describe('the Radio-bill function', function(){
    it('if selected the radio bill values(call,sms,call) it should give the total R6.25', function(){
      var radioBill = radioBillFactory();
          radioBill.calculate('call')
          radioBill.calculate('call')
          radioBill.calculate('sms')


          assert.equal(radioBill.total(), 6.25);
          assert.equal(radioBill.call(), 5.50);
          assert.equal(radioBill.sms(), 0.75);

      });
      it('if you click radio button on CALL three time it should calculate the total to R8.25', function(){
      var radioBill = radioBillFactory();
          radioBill.calculate('call')
          radioBill.calculate('call')
          radioBill.calculate('call')


          assert.equal(radioBill.total(), 8.25);
          assert.equal(radioBill.call(), 8.25);
          assert.equal(radioBill.sms(), 0.00);

      });
      it('if you click radio button on SMS three time it should calculate the total to R2.25', function(){
        var radioBill = radioBillFactory();
          radioBill.calculate('sms')
          radioBill.calculate('sms')
          radioBill.calculate('sms')


          assert.equal(radioBill.total(), 2.25);
          assert.equal(radioBill.call(), 0.00);
          assert.equal(radioBill.sms(), 2.25);

    });
});
