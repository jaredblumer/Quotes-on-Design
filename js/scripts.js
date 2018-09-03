
// Request Quote, Populate Page, & Update Twitter URL
function getQuote() {
  $.ajax({
    cache: false,
    url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    dataType: "json",
    success:
    function(response) {
      var result = response.shift();
      var content = result.content;
      var quote = $(content).text().trim();
      var author = result.title.trim();
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
