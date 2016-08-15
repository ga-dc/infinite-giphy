$(document).ready(function(){
  $("#searchButton").on("click", function(){
    var giphyIndex = 0
    console.log(giphyIndex)
    event.preventDefault();
    $("#gifs").empty()
    var img_content = ''
    var query = $("#keyword").val().replace(" ", "+");
    var url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC"
    $.ajax({
      type: "get",
      dataType: "json",
      url: url
    }).done(function(giphy){
      console.log(giphy);
      for (i = giphyIndex; i < giphyIndex + 10; i++) {
        if (i < giphy.data.length) {
          img_content += "<img src='" +
           giphy.data[i].images.original.url + "'>"
        }
     }
     giphyIndex += 10;
     $("#gifs").append(img_content)
     $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
         img_content = ''
         for (i = giphyIndex; i < giphyIndex + 10; i++) {
           if (i < giphy.data.length) {
             img_content += "<img src='" +
             giphy.data[i].images.original.url + "'>"
           }
        }
        giphyIndex += 10;
        if (giphyIndex < 25) {
          $("#gifs").append(img_content)
        }
      }
    })
    }).fail(function(res){
      console.log("nope");
    })


  })


})
