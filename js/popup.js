var data = JSON.parse(localStorage.getItem("search-results"));
var latestKeyword = localStorage.getItem("search-results-last");

if (data && data[latestKeyword]) {

	var dummy = {
		"result": data[latestKeyword].response.data.result,
		"totalResults" : data.length
	}

	var iframe = document.getElementById('search-results');


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

	iframe.onload = function (e) {
		setTimeout(function() {
			iframe.contentWindow.postMessage({event: 'eexcess.newResults', data: dummy}, '*');
			chrome.browserAction.setBadgeText({text: ""});

			var searchQuery = document.getElementById('search-query');
			searchQuery.innerHTML = data[latestKeyword].response.data.profile.contextKeywords[0].text;

		}, 1000);
	}

} else {
	var html = document.getElementsByTagName("html")[0];
	var body = document.getElementsByTagName("body")[0];
	html.style.width = "200px";
	html.style.height = "100px";
	body.style.width = "200px";
	body.style.height = "100px";

	while (body.firstChild) {
		body.removeChild(body.firstChild);
	}
	body.innerHTML = 'Nothing to see here.';
}


var clearHistory = document.getElementById('clear-history');
clearHistory.addEventListener("click", function() {
	//var tmp = {};
	//tmp[latestKeyword] = data[latestKeyword];
	localStorage.removeItem("search-results");
	//localStorage.setItem("search-results", JSON.stringify(tmp));
	if (searchHistory) searchHistory.innerHTML = '';
	var html = document.getElementsByTagName("html")[0];
	var body = document.getElementsByTagName("body")[0];
	html.style.width = "200px";
	html.style.height = "100px";
	body.style.width = "200px";
	body.style.height = "100px";


	while (body.firstChild) {
		body.removeChild(body.firstChild);
	}
	body.innerHTML = 'Nothing to see here.';
});