describe('the calculateBill function', function(){
    it('should calculate the amount of the of each strings value and display a total', function(){

        assert.equal(calculateBtnClicked('call,call'), 5.50);
    });
    it('should calculate the amount of the of each strings value and display a total', function(){

        assert.equal(calculateBtnClicked('call,sms,call'), 6.25);
    });
    it('should calculate the amount of the of each strings value and display a total', function(){

        assert.equal(calculateBtnClicked('sms,sms'), 1.50);
    });
});
