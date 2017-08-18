$("#getQuote").click(getQuote);

function getQuote() {
  $.ajaxSetup({ cache: false });
  var url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
  $.getJSON(url, function(data) {
    $("#quote").html(data[0].content);
    $("#author").html("&ndash;" + data[0].title);
    $("#tweet").attr("href","https://twitter.com/intent/tweet?text="+$("#quote").text()+$("#author").text());
  });
}

window.onload = function() {
  getQuote();
};