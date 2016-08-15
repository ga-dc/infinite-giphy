$(document).ready(function(){
  $("button").on('click', function(evt){
    evt.preventDefault();

    var limit = 100;
    var offset = 10;

    var url = "http://api.giphy.com/v1/gifs/search?q=" + $('.search-input').val() + "&limit=" + limit + "&offset=" + offset + "&api_key=dc6zaTOxFJmzC"
    // var url = "http://api.giphy.com/v1/gifs/search?q=" + $('.search-input').val() + "&api_key=dc6zaTOxFJmzC"
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      console.log(response.data[0].url);
      var el = ("<div><img src='" + response.data[0].url + "'></div>");
      $('body').append(el);
    }).fail(function(){
      console.log("Well this sux. It failed :(");
    }).always(function(){
      console.log("This always happens");
    })
  })
})
