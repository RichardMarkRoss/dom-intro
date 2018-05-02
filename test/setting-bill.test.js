describe('the setting-bill function', function() {
    it('it should take your own add value(e.g. 5) and add it to the radio button call, should add to the total R5.00', function() {
        var factory = settingBill();
        factory.updateCall(5)
        factory.calculate('call');

       assert.equal(factory.callTotal(),5.00);
      // assert.equal(factory.total(),5);

    });
    it('if the value added is 7 to the call button it should add R7.00 to the total', function() {
        var factory = settingBill();
        factory.updateCall(7)
        factory.calculate('call');

       assert.equal(factory.callTotal(),7.00);
      // assert.equal(factory.total(),5);

    });
    it('if you give the sms value the value of 5 it sould add the amount to the total R5.00', function() {
        var factory = settingBill();
        factory.updateSms(5)
        factory.calculate('sms');

       assert.equal(factory.smsTotal(),5.00);
      // assert.equal(factory.total(),5);

    });
});
