$(function() {
    $( "#notifications-minimum-slider" ).slider({
        value: localStorage.notificationsMinimum,
        min: 1,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#notifications-minimum-value" ).val( ui.value).trigger('change');
        }
    });
    //$( "#notifications-minimum-value" ).val( $( "#notifications-minimum-slider" ).slider( "value" ) );

    $( "#toolbar-minimum-slider" ).slider({
        value: localStorage.toolbarMinimum,
        min: 1,
        max: 100,
        step: 1,
        slide: function( event, ui ) {
            $( "#toolbar-minimum-value" ).val( ui.value ).trigger('change');
        }
    });
});

function ghost(isDeactivated) {
    options.style.color = isDeactivated ? 'graytext' : 'black';
    // The label color.

}

window.addEventListener('load', function() {

    options.isActivated.checked = JSON.parse(localStorage.isActivated);
    options.apiKey.value = localStorage.apiKey;
    options.toolbarMinimum.value = localStorage.toolbarMinimum;
    options.notificationsMinimum.value = localStorage.notificationsMinimum;

    if (!options.isActivated.checked) { ghost(true); }

    options.isActivated.onchange = function() {
        localStorage.isActivated = options.isActivated.checked;
        ghost(!options.isActivated.checked);
    };

    options.apiKey.onchange = function() {
        localStorage.apiKey = options.apiKey.value;
    };

    options.toolbarMinimum.onchange = function() {
        localStorage.toolbarMinimum = options.toolbarMinimum.value;
    };

    options.notificationsMinimum.onchange = function() {
        localStorage.notificationsMinimum = options.notificationsMinimum.value;
    };

    options.toolbarOn.onchange = function() {
        localStorage.toolbarOn = options.toolbarOn.checked;
    };
});
