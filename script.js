$(document).ready(function() {
  $("button").on("click", function(evt) {
    evt.preventDefault();

    var searchTerm = $("input").val()

    giphySearch(searchTerm);

    function giphySearch(searchTerm) {
      $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q="+searchTerm+"&limit=100&api_key=dc6zaTOxFJmzC", //add length 100 then loop through each on scroll down
        type: "get",
        dataType: "json"
      }).done(function(response) {
        for (var i = 0; i < 10; i += 1) {
          $(".display").append('<div><img class="pic" src="'+response.data[i].images.fixed_height.url+'"/ ></div>');
        }
        var n = 11;
        $(window).scroll(function() {
         if($(window).scrollTop() + $(window).height() == $(document).height()) {
             n += 1
             $(".display").append('<div><img class="pic" src="'+response.data[n].images.fixed_height.url+'"/ ></div>');
         }
        });
      }).fail(function() {

      }).always(function() {

      })
    }
  })
})
