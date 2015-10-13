function helloWorld(){return “Hello World!”;
}

describe("A spy", function() {
it("tracks that the spy was called", function() {

spyOn(window, 'helloWorld');
var message =helloWorld();
expect(message).toHaveBeenCalled();

});
});
