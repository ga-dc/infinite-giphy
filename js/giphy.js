$(document).ready(function(){

  $("button").click(function(evt){
    evt.preventDefault();
    var api = "http://api.giphy.com/v1/gifs/search?";
    var apiKey = "&api_key=dc6zaTOxFJmzC";
    var search = $("#keyword").val();
    var q = "&q=" + search;
    var url = api + apiKey + q;
    var i = 0;
    var count = 0;
    var totalgifs;

    $.ajax({
      url: url,
      dataType: "json",
      type: "get",
    }).done(function(response){
      console.log("this worked!");
      totalgifs = response.data.length;
    }).fail(function(){
      console.log("this failed");
    }).always(function(){
      console.log("This will always work!");
    });

    makeGifs();

    function makeGifs(){
      $.get(url, function(response) {
        for(i; i < totalgifs; i++){
          console.log(i);
          if(count < 10){
            count++;
            $("body").append("<div class = 'gifs'><img src='"+ response.data[i].images.original.url + "'></div>");
          }
          else{
            count = 0;
            break;
          }
        }
      }, "json" );
    }

    $(window).scroll(function(){
      if($(window).scrollTop() + $(window).height() > $(document).height() - 100){
        if(i === totalgifs){
          i = 0;
          makeGifs();
        }
        makeGifs();
      }
    });
  });

});
