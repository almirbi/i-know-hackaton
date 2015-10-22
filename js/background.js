if (!localStorage.isInitialized) {
    localStorage.isActivated = true;   // The display activation.
    localStorage.apiKey = " ";
    localStorage.maxResults = 90;
    localStorage.searchHistory = 3;

    var providers = [
                       "Europeana",
                       "Mendeley",
                       "ZBW",
                       "KIMPortal",
                       "Wissenmedia"
                   ];
    
    localStorage.sources = JSON.stringify(providers);
    localStorage.isInitialized = true; // The option initialization.
}



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (!request.response) return;
        chrome.browserAction.setBadgeBackgroundColor({color: '#E10000'});
        chrome.browserAction.setBadgeText({text: request.response.data.result.length + ""});

        var keyword = request.response.data.profile.contextKeywords[0].text;

        var searchResultsString = localStorage.getItem("search-results");
        var searchHistory = {};

        if (searchResultsString) {
            searchHistory = JSON.parse(searchResultsString);
        }

        searchHistory[keyword.trim()] = request;
        localStorage.setItem("search-results", JSON.stringify(searchHistory));
        localStorage.setItem("search-results-last", keyword);
    });

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (!request.cached) return;

        var keyword = request.cached;


        var searchResultsString = localStorage.getItem("search-results");
        var searchHistory = {};

        if (searchResultsString) {
            searchHistory = JSON.parse(searchResultsString);
        }

        chrome.browserAction.setBadgeBackgroundColor({color: '#E10000'});
        chrome.browserAction.setBadgeText({text: searchHistory[keyword].response.data.result.length + ""});

        localStorage.setItem("search-results-last", keyword);
    });

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (!request.greeting) return;

        var searchResultsString = localStorage.getItem("search-results");
        var searchHistory = {};

        if (searchResultsString) {
            searchHistory = JSON.parse(searchResultsString);
            sendResponse({farewell: searchHistory[request.greeting]});
        } else {
            sendResponse({farewell: false});
        }


    });