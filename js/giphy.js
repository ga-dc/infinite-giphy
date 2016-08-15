$(document).ready(function(){
  console.log("jquery working")
  $(".submit").on("click", function(e){
    e.preventDefault()
    var search_word = $("#keyword").val()
    var url = "http://api.giphy.com/v1/gifs/search?q="+ search_word +"&api_key=dc6zaTOxFJmzC"
    $.ajax({
      type: "GET",
      dataType: "json",
      url: url
    }).done(function(response){
      console.log("successful");
      for(i=0; i < response.data.length; i++) {
        var image = response.data[i].images.original.url
        $(".gifs").append("<img src="+ image + ">")
      }
    }).fail(function(response){
      console.log("fail");
    }).always(function(response){
      console.log("Always display on console");
    })
  })



  $(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
      var search_term = $("#keyword").val()
      var url = "http://api.giphy.com/v1/gifs/search?q="+ search_term +"&api_key=dc6zaTOxFJmzC"
      $.ajax({
        type: "GET",
        dataType: "json",
        url: url
      }).done(function(response){
        console.log("successful")
        for(i=0; i < response.data.length; i++) {
          var image = response.data[i].images.original.url
          $(".gifs").append("<img src="+ image +">")
        }
      }).fail(function(response){
        console.log("fail")
      }).always(function(response){
        console.log("Always display on console")
      })
    }
  })
});
