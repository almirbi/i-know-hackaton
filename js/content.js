
require(['c4/APIconnector'], function(api) {
    api.init({
        origin:{
            clientType:"some client", // the name of the client application
            clientVersion:"42.23", // the version nr of the client application
            userID:"E993A29B-A063-426D-896E-131F85193EB7" // UUID of the current user
        }
    });

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var input = document.querySelector('input#lst-ib');

    input.addEventListener('input', function()
    {
        console.log(input.value);
    });

    console.log(getParameterByName('q'));


});