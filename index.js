var getRandomQuote = (function() {
  'use strict';
  var getQuote = function() {
    var quote = $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(data) {
      $(".quote").html(data[0].content).children().addClass("animated fadeIn");
      $(".author").html("<p class='animated fadeIn'> -" + data[0].title + "</p>");
    });
  };

  return {
    getQuote: getQuote
  };
}());

var randomColor = (function() {
  var changeColor = function() {
    var red = Math.floor(Math.random() * (255 - 0) - 0);
    var blue = Math.floor(Math.random() * (255 - 0) - 0);
    var green = Math.floor(Math.random() * (255 - 0) - 0);
    console.log("rgb(" + red + "," + blue + "," + green + ")");
    return "rgb(" + red + "," + blue + "," + green + ")";
  };

  var changeBodyColor = function(color) {
    return $("body").animate({
      backgroundColor: color,
      color: color
    });
  };

  var changeButtonsColor = function(color) {
    $(".quote-box button").animate({
      color: color
    }, "slow");
  };

  return {
    changeColor: changeColor,
    changeBodyColor: changeBodyColor,
    changeButtonsColor: changeButtonsColor
  };
}());

$(document).ready(function() {
  var color = randomColor.changeColor();
  getRandomQuote.getQuote();
  randomColor.changeBodyColor(color);
  randomColor.changeButtonsColor(color);
  $("#newQuote").on("click", function() {
    color = randomColor.changeColor();
    getRandomQuote.getQuote();
    randomColor.changeBodyColor(color);
    randomColor.changeButtonsColor(color);
  });
  $("#tweetBtn").on("click", function() {
    var text = $(".quote p").text();
    var author = $(".author p").text();
    window.open("https://twitter.com/intent/tweet?text=" + "\"" + text + "\"" + author + "&hashtags=soWise");
  })
});
