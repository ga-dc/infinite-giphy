$(document).ready(function(){

  $("button").click(function(evt){
    evt.preventDefault();
    var api = "http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC";
    var search = $("#keyword").val();
    var q = "&q=" + search;
    var url = api + q;
    var count = 0;
    var i = 0;
    var totalgifs;

    makeGifs();

    function makeGifs(){
      $.getJSON(url, function(response){
        totalgifs = response.data.length;
        for(i; i < totalgifs; i++){
          if (count < 10){
            count++;
            $("body").append("<div class = 'gifs'><img src='"+ response.data[i].images.original.url + "'></div>");
          }
          else{
            count = 0;
            break;
          }
        }
      });
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
