var textGenerator = {
    helloWorld: function() {
	return  "Hello world!";
}
};

describe("Hello world test", function () {
    it("says Hello word", function () {
        expect(textGenerator.helloWorld()).toEqual("Hello world!");
    });
});
