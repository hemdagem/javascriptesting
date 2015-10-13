var calculator = {
  sum: function(no1, no2) {
      return no1 + no2;
  }
};

function calculate(no1, no2){
    return calculator.sum(no1, no2);
}

// specs code
describe("calculator", function() {
   
	beforeEach(function() {
		//any setups before each test if you need this
	});
   
  it("sum method should sum values", function() {
    expect(calculator.sum(1,2)).toEqual(3);
  });
  
  it("should call calculator", function() {
     // write the test
  });
    
  it("should pass correct information to calculator", function() {
     // write the test
  });
});
