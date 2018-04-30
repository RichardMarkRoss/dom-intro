describe('the setting-bill function', function() {
    it('should calculate the amount of the of each strings value and display a total', function() {
        var factory = settingBill();
        factory.calculate();

        assert.equal(factory.callTotal(),);
    });
});
