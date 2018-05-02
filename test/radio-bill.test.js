describe('the Radio-bill function', function(){
    it('should calculate the amount of the of each strings value and display a total', function(){
      var radioBill = radioBillFactory();
          radioBill.calculate('call')
          radioBill.calculate('call')
          radioBill.calculate('sms')


          assert.equal(radioBill.total(), 6.25);
          assert.equal(radioBill.call(), 5.50);
          assert.equal(radioBill.sms(), 0.75);

      });
      it('should calculate the amount of the of each strings value and display a total', function(){
      var radioBill = radioBillFactory();
          radioBill.calculate('call')
          radioBill.calculate('call')
          radioBill.calculate('call')


          assert.equal(radioBill.total(), 8.25);
          assert.equal(radioBill.call(), 8.25);
          assert.equal(radioBill.sms(), 0.00);

      });
      it('should calculate the amount of the of each strings value and display a total', function(){
        var radioBill = radioBillFactory();
          radioBill.calculate('call')
          radioBill.calculate('sms')
          radioBill.calculate('call')


          assert.equal(radioBill.total(), 6.25);
          assert.equal(radioBill.call(), 5.50);
          assert.equal(radioBill.sms(), 0.75);

    });
});
