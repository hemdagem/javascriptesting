$(document).ready(function () {

    //assume this url or similar www.totaljobs.loki.tjgdev.ds/
    $(".teamname-toggle").on("click", function () { 

        var selectedTeam = this.id;

        var randomBrand = '';

        var urlFromCurrentTab = window.location.href;

        jQuery.ajax({
                url: 'doesteamexist',
                dataType: "json",
                async: false,
                success: function (data) {
                    randomBrand = 'totaljobs';
                },
                error: function () {
                    randomBrand = 'totaljobs'
                },
                timeout: 3000
        });

        var patternForTeamName = /local|loki|magnum|topgun|polaris|fire|enzo|phoenix|wizard|nightawk|cobra/i;
          
        var urlWithReplacedTeam =  urlFromCurrentTab.replace(patternForTeamName, selectedTeam);

        var patternForBrand = /totaljobs|caterer|careerstructure|cwjobs|retailchoice/i;

        var urlWithReplacedBrand =  urlWithReplacedTeam.replace(patternForBrand, randomBrand);

        var urlWithRemovedQueryStringCharacters = urlWithReplacedBrand.split("?")[0];

        var finalUrl = urlWithRemovedQueryStringCharacters.replace(/^http:\/\//i, 'https://');

        //enable this bit at a later date - stops it being annoying!
        console.log(finalUrl);
        //window.location = urlWithReplacedBrand;
    });
});