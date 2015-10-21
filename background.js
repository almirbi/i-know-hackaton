

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var input = document.querySelector('input#lst-ib');

input.addEventListener('input', function()
{
    console.log(input.value);
});

console.log(getParameterByName('q'));

