$(function() {
    $( "#results-maximum-slider" ).slider({
        value: localStorage.maxResults,
        min: 1,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#results-maximum-value" ).val( ui.value).trigger('change');
        }
    });
    $( "#search-history-slider" ).slider({
    	value: localStorage.searchHistory,
    	min: 1,
    	max: 5,
    	step: 1,
    	slide: function( event, ui ) {
    		$( "#search-history-value" ).val( ui.value ).trigger('change');
    	}
    });
});

function ghost(isDeactivated) {
    //options.style.color = isDeactivated ? 'graytext' : 'black';
    // The label color.

}

function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] == obj) {
           return true;
       }
    }
    return false;
}

function checkSources() {
	
	var providers = [];
    
    if (options.sources_europeana.checked) providers.push("Europeana");
    
    if (options.sources_mendeley.checked) providers.push("Mendeley");
    
    if (options.sources_zbw.checked) providers.push("ZBW");
    
    if (options.sources_kimcollect.checked) providers.push("KIMPortal");
    
    if (options.sources_wissenmedia.checked) providers.push("Wissenmedia");
    
    console.log(providers);
    
    localStorage.sources = JSON.stringify(providers);
    
}


window.addEventListener('load', function() {

    options.isActivated.checked = JSON.parse(localStorage.isActivated);
    options.apiKey.value = localStorage.apiKey;
    options.maxResults.value = localStorage.maxResults;
    options.searchHistory.value = localStorage.searchHistory;

    
    if (!options.isActivated.checked) { ghost(true); }

    options.isActivated.onchange = function() {
        localStorage.isActivated = options.isActivated.checked;
        ghost(!options.isActivated.checked);
    };

    options.apiKey.onchange = function() {
        localStorage.apiKey = options.apiKey.value;
    };

    options.maxResults.onchange = function() {
    	localStorage.maxResults = options.maxResults.value;
    };

    options.searchHistory.onchange = function() {
        localStorage.searchHistory = options.searchHistory.value;
    };

    
    // TODO: The sources list really shouldn't be static
    options.sources_europeana.checked = false;
    options.sources_mendeley.checked = false;
    options.sources_zbw.checked = false;
    options.sources_kimcollect.checked = false;
    options.sources_wissenmedia.checked = false;
    
    var providers = JSON.parse(localStorage.sources);
    
    if (contains(providers, "Europeana")) {
    	options.sources_europeana.checked = true;
    }
    if (contains(providers, "Mendeley")) {
    	options.sources_mendeley.checked = true;
    }
    if (contains(providers, "ZBW")) {
    	options.sources_zbw.checked = true;
    }
    if (contains(providers, "KIMPortal")) {
    	options.sources_kimcollect.checked = true;
    }
    if (contains(providers, "Wissenmedia")) {
    	options.sources_wissenmedia.checked = true;
    }
    
    options.sources_europeana.onchange = checkSources;
    options.sources_mendeley.onchange = checkSources;
    options.sources_zbw.onchange = checkSources;
    options.sources_kimcollect.onchange = checkSources;
    options.sources_wissenmedia.onchange = checkSources;
});
