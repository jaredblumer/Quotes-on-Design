// Request Quote, Populate Page, & Update Twitter URL
function getQuote() {
  $.ajax({
    cache: true,
    url: "https://success-quotes.herokuapp.com/api",
    dataType: "json",
    success:
    function(response) {
      var quote = response.quote;
      var author = response.author;
      console.log(result);
      console.log(quote);

      // Format Twitter Web Intent URL
      var twitterQuote = '"' + quote + '"' + " —" + author;
      var twitterURL = "https://twitter.com/intent/tweet?text=" + encodeURI(twitterQuote);
      $("#twitter-link").attr("href", twitterURL);
      console.log(twitterURL);

      // Display Quote and Author
      $("#quote-text").text(quote);
      $("#author-text").text(author);
    },
    error:
    function() {
      $("#quote-text").text("Whoops. 404 Error. Please try again later.");
      $("#author-text").text("The Internet");
    }
  });
}

// Retrieve Quote When Document is Ready
$( document ).ready(getQuote());

// Retrieve New Quote
$("#new-quote").on("click", function(event) {
  event.preventDefault();
  getQuote();
});
