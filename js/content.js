var input = document.querySelector('input#lst-ib');
var timer = null;

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
console.log('HI');
function forwardResponseToPopup(response) {
    chrome.runtime.sendMessage({response: response});
}

require(['c4/APIconnector'], function(api) {
    function searchEexcess(keyword, callback) {
        chrome.runtime.sendMessage({greeting: keyword}, function(response) {
            if (response.farewell) {
                chrome.runtime.sendMessage({cached: keyword});
            } else {
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


        });

    }
    chrome.runtime.sendMessage({options: "hello"}, function(response) {
        api.init({
            origin:{
                clientType:"Google Search Trigger", // the name of the client application
                clientVersion:"0.9", // the version nr of the client application
                userID:response.apiKey // UUID of the current user
            }
        });
    });


    input.addEventListener('input', function()
    {
        clearTimeout(timer);
        timer = setTimeout(function() {
                searchEexcess(input.value, forwardResponseToPopup);
            }, 2500);
    });

    searchEexcess(getParameterByName('q'), forwardResponseToPopup);
});