describe('the setting-bill function', function() {
    it('should calculate the amount of the of each strings value and display a total', function() {
        var factory = settingBill();
        factory.updateCall(5)
        factory.calculate('call');

       assert.equal(factory.callTotal(),5.00);
      // assert.equal(factory.total(),5);

    });
    it('should calculate the amount of the of each strings value and display a total', function() {
        var factory = settingBill();
        factory.updateCall(7)
        factory.calculate('call');

       assert.equal(factory.callTotal(),7.00);
      // assert.equal(factory.total(),5);

    });
    it('should calculate the amount of the of each strings value and display a total', function() {
        var factory = settingBill();
        factory.updateSms(5)
        factory.calculate('sms');

       assert.equal(factory.smsTotal(),5.00);
      // assert.equal(factory.total(),5);

    });
});
