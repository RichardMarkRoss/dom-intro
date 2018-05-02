describe('the calculateBill function', function(){
    it('should calculate the amount of CALL values and display the total to R5.50', function(){

        assert.equal(calculateBtnClicked('call,call'), 5.50);
    });
    it('should calculate the string(call.sms,call) value and display the total R6.25', function(){

        assert.equal(calculateBtnClicked('call,sms,call'), 6.25);
    });
    it('should calculate the amount of SMS values and display the total to R1.50', function(){

        assert.equal(calculateBtnClicked('sms,sms'), 1.50);
    });
});
