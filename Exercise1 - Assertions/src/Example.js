function terminator(){
	return "I'll be back!";
}
describe("Terminator test", function () {
	it("says I'll be back!", function () {
		expect(terminator()).toEqual("I'll be back!");
	});
});