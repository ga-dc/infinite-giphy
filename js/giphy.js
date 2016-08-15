$(document).ready(function(){
  scrollStart = 0;
  scrollEnd = 10;
  $("button").on("click", function(evt){
    evt.preventDefault();
    searchForGifs();

    function searchForGifs(){
      search_params = $("#keyword").val();
      var url = "http://api.giphy.com/v1/gifs/search?q=" + search_params.split(" ").join("+") + "&api_key=dc6zaTOxFJmzC&limit=1000";
      $.ajax({
        url: url,
        type: "get",
        dataType: "json"
      }).done(function(response){
        for(i=scrollStart; i<scrollEnd; i++){
          el = $("<img src=\"" + response.data[i].images.fixed_height_small.url + "\"></img>")
          $("body").append(el);
        }
      }).fail(function(){
        console.log("sorry bout that fail broh")
      }).always(function(){
        // console.log("still workin tho")
      })

      $(window).on("scroll", function(){
        if ($(window).scrollTop() + $(window).height() == $(document).height()){
          scrollStart += 10;
          scrollEnd += 10;
          searchForGifs();
        }
      })
    }
  })
})
