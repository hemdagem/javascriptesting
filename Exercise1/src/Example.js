function helloWorld() {
    return "Hello world!";
};

describe("Hello world", function () {
    it("says Hello word", function () {
        expect(helloWorld()).toEqual("Hello world!");
    });
});