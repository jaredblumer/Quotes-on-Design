$('#new-quote').on('click', function(e) {
  e.preventDefault();
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",

  function(response) {
    console.log(response);
  });
});
