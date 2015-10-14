        describe("A Matrix spy", function () {
            it("tracks that Neo is the one", function () {

                var matrix, neo;

                neo = {
                    theOne: function() {
                         return "I am the one!";
                    }
                }

                matrix = {
                    theOne: function () {
                        return neo.theOne();
                    }
                };

                spyOn(neo, 'theOne');
                matrix.theOne();
                expect(neo.theOne).toHaveBeenCalled();
            });
        });