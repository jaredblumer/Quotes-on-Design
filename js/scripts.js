
// Retrieve Quote When Document is Ready
$( document ).ready(function() {
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",

  function(response) {
    var result = response.shift();
    console.log(result);
    $('#quote-text').html(result.content);
    $('#author-text').html(result.title);
  });
});

// Retrieve New Quote
$('#new-quote').on('click', function(event) {
  event.preventDefault();
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",

  function(response) {
    var result = response.shift();
    console.log(result);
    $('#quote-text').html(result.content);
    $('#author-text').html(result.title);
  });
});
