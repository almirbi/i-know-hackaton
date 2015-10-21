var data = JSON.parse(localStorage.getItem("search-results"));
console.log(data);
var dummy = {
	"result": data,
	"totalResults" : data.length
}

var iframe = document.getElementById('search-results');
iframe.onload = function (e) {
	iframe.contentWindow.postMessage({event: 'eexcess.newResults', data: dummy}, '*');
	chrome.browserAction.setBadgeText({text: ""});

	var searchQuery = document.getElementById('search-query');
	searchQuery.innerHTML = data[0].generatingQuery;
}