chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.browserAction.setBadgeBackgroundColor({color:'#E10000'});
        chrome.browserAction.setBadgeText({text: request.result.length + ""});
        localStorage.setItem("search-results", JSON.stringify(request.result));
    });

