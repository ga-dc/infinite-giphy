$(document).ready(function(){
  $("button").on("click", function(){
    var searchOriginal = $("#keyword").val()
    var searchConverted = ""
    for (var i = 0; i < searchOriginal.length; i++) {
      if (searchOriginal[i] == " ") {
        searchConverted += "+"
      } else {
        searchConverted += searchOriginal[i]
      }
    }

    var url = "http://api.giphy.com/v1/gifs/search?q=" + searchConverted + "&api_key=dc6zaTOxFJmzC"
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      for (var i = 0; i <= 10; i++) {
      var giphyID = response.data[i].id
      var imgPath = "https://media.giphy.com/media/" + giphyID + "/giphy.gif"
     $(".imgResults").append("<img src=" + imgPath + ">")
   }
  }).fail(function(){
    }).always(function(){
    })
  })
})
