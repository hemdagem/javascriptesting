/// <reference path="https://code.jquery.com/jquery-1.11.3.min.js" />
function hide() {
    $("p").css("display", "none");
}

describe("Dom example tests", function () {
    beforeEach(function() {
        $("body").append("<div><p>Test</p></div>");
    });

    it("Hide should make paragraph not visible", function () {
        hide();
        expect($("p").is(":hidden")).toBe(true);
    });
});
