describe('the setting-bill function', function() {
    it('should calculate the amount of the of each strings value and display a total', function() {
        var factory = settingBill();
        factory.updateCall(5)
        factory.calculate('call');

       assert.equal(factory.callTotal(),5.00);
      // assert.equal(factory.total(),5);

    });
});
