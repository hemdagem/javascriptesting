var message= null;
var helloWorld =  {
      setMessage: function(value) {
        message = value;
      }
}

describe("A spy", function() {

  beforeEach(function() {
    
    spyOn(helloWorld, 'setMessage');
    helloWorld.setMessage('Hello World!');
      
  });

  it("tracks that the spy was called", function() {
    expect(helloWorld.setMessage).toHaveBeenCalled();
  });
    
});