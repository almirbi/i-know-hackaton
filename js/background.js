chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        localStorage.setItem("search-results", JSON.stringify(request.greeting));
    });

