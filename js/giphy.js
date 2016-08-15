$(document).ready(function(){
  $(".submit").on("click", function(e) {
    e.preventDefault()
    var search_term = $("#keyword").val()
    var url = "http://api.giphy.com/v1/gifs/search?q="+ search_term +"&api_key=dc6zaTOxFJmzC"
    $.ajax({
      type: "GET",
      dataType: "json",
      url: url
    }).done(function(res){
      console.log("working")
      for(i=0; i < res.data.length; i++) {
        var image = res.data[i].images.original.url
        $(".list").append("<img src="+ image +">")
      }
    }).fail(function(res){
      console.log("fail")
    }).always(function(res){
      console.log("always happened")
    })

    $("#keyword").html("")
  })
  // infinite scrolling here
  $(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
      var search_term = $("#keyword").val()
      var url = "http://api.giphy.com/v1/gifs/search?q="+ search_term +"&api_key=dc6zaTOxFJmzC"
      $.ajax({
        type: "GET",
        dataType: "json",
        url: url
      }).done(function(res){
        console.log("working")
        for(i=0; i < res.data.length; i++) {
          var image = res.data[i].images.original.url
          $(".list").append("<img src="+ image +">")
        }
      }).fail(function(res){
        console.log("fail")
      }).always(function(res){
        console.log("always happened")
      })
    }
  })

})
