var View = {
    getName: function () {
        return $("#name").text();
    },
    display: function (value) {
        $("#name").hide();
        $("#greeting").text(value);
    }
};

var Service = {
    greet: function (name) {
        return "Hello " + name + "!";
    }
};

function Presenter(view, service) {
    function process() {
        var name = view.getName();
        var result = service.greet(name);
        view.display(result);
    }

    return {
        process: process
    }
};

$(document).ready(function () {
    var presenter = Presenter(View, Service);
    presenter.process();
});

// specs code

describe("Presenter tests", function() {
    var subject = null;

    beforeEach(function () {
        subject = Presenter(View, Service);
    });

    it("presenter should call Service.greet", function () {
        // write the test
    });

    it("presenter should call View.getName", function () {
        // write the test
    });

    it("presenter should call View.display", function () {
        // write the test
    });
});
