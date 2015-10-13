var View = {
    getName: function () {
        return $("#name").text();
    },
    display: function (value) {
        $("#name").hide();
        $("#greeting").text(value);
    }
};

describe("View tests", function () {

    beforeEach(function () {
        
    });

    afterEach(function () {
        
    });

    it("View should be defined", function() {
        // write the test    
	});

    it("getName should return content of name input", function() {
       // write the test   
    });

    it("display should render greeting content", function () {
       // write the test   
    });
});
