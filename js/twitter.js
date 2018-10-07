// Format Twitter Web Intent URL
var twitterQuote = $("#quote-text").text() + " —" +$("#author-text").text();
var twitterURL = "https://twitter.com/intent/tweet?text=" + encodeURI(twitterQuote);
$("#twitter-link").attr("href", twitterURL);
