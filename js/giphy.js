$(document).ready(function(){
  $("#search").on("click", function(evt){
    evt.preventDefault();

    var search = $("input").val()

    giphySearch(search)

    function giphySearch(search) {
    $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?q="+search+"&limit=100&api_key=dc6zaTOxFJmzC",
      type: "get",
      dataType: "json"
    }).done(function(response){
        for (var i=0; i < 10; i++){
          $(".showresults").append('<div><img src="'+response.data[i].images.fixed_height.url+'"/></div>');
        }

        var j = 11
        $(window).scroll(function() {
            if($(window).scrollTop() == $(document).height() - $(window).height()) {
              j += 11
                   // ajax call get data from server and append to the div
                   $(".showresults").append('<div><img src="'+response.data[j].images.fixed_height.url+'"/></div>');
            }
        });

    }).fail(function(){
      console.log("failed request");
    }).always(function(){
      console.log("i always work");
    })

    }
  })


})
