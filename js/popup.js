var data = JSON.parse(localStorage.getItem("search-results"));
var latestKeyword = localStorage.getItem("search-results-last");

console.log(data[latestKeyword]);

var dummy = {
	"result": data[latestKeyword].response.data.result,
	"totalResults" : data.length
}

var iframe = document.getElementById('search-results');
iframe.onload = function (e) {
	iframe.contentWindow.postMessage({event: 'eexcess.newResults', data: dummy}, '*');
	chrome.browserAction.setBadgeText({text: ""});

	var searchQuery = document.getElementById('search-query');
	searchQuery.innerHTML = data[latestKeyword].response.data.profile.contextKeywords[0].text;
}

var searchHistory = document.getElementById('history');

for (var item in data) {
	if(data.hasOwnProperty(item)){
		var button = document.createElement('BUTTON');
		button.class = 'history-keyword';
		button.innerHTML = data[item].response.data.profile.contextKeywords[0].text;
		searchHistory.appendChild(button);
		button.addEventListener("click", function(event) {
			var targetElement = event.target || event.srcElement;
			var dummy = {
				"result": data[targetElement.innerHTML].response.data.result,
				"totalResults" : data.length
			}
			iframe.contentWindow.postMessage({event: 'eexcess.newResults', data: dummy}, '*');
		});
	}
}

var clearHistory = document.getElementById('clear-history');
clearHistory.addEventListener("click", function() {
	var tmp = {};
	tmp[latestKeyword] = data[latestKeyword];
	localStorage.removeItem("search-results");
	localStorage.setItem("search-results", JSON.stringify(tmp));
	searchHistory.innerHTML = '';
});