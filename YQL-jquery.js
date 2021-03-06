//Vanilla JS implementation that injects script with proper attributes

//Appends script to head
function injectScript(url) {
    var scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = url;
    $('head').append(scriptElement, false);
}

//Method called by appended script that determines what to do with response
function handleResponse(response) {
    return response;
}

//Change url to encoded feed url
function loadFeed(url) {
    var encoded = encodeURIComponent(url);
    var concatFeedUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feednormalizer%20where%20url%3D'" + encoded + "'%20and%20output%3D'atom_1.0'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=handleResponse";
    injectScript(concatFeedUrl);
}
