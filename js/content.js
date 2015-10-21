var input = document.querySelector('input#lst-ib');

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function forwardResponseToPopup(response) {
    chrome.runtime.sendMessage({result: response.data.result});
}

require(['c4/APIconnector'], function(api) {
    function searchEexcess(keyword, callback) {
        var profile = {
            contextKeywords:[{
                text: keyword
            }],
            origin: {
                module: "Google Search Trigger"
            }
        };

        api.query(profile, function(response) {
            if(response.status === 'success') {
                callback(response);
            } else {
                console.log(':\'(');
            }
        });
    }

    api.init({
        origin:{
            clientType:"Google Search Trigger", // the name of the client application
            clientVersion:"0.1", // the version nr of the client application
            userID:"E993A29B-A063-426D-896E-131F85193EB7" // UUID of the current user
        }
    });

    input.addEventListener('input', function()
    {
        searchEexcess(input.value, forwardResponseToPopup);
    });

    searchEexcess(getParameterByName('q'), forwardResponseToPopup);
});