var limit = 100;
var offset = 100;
var counter = 0;

$(document).ready(function(){
  $("button").on('click', function(evt){
    evt.preventDefault();



    var url = "http://api.giphy.com/v1/gifs/search?q=" + $('.search-input').val() + "&limit=" + limit + "&offset=" + offset + "&api_key=dc6zaTOxFJmzC"
    // var url = "http://api.giphy.com/v1/gifs/search?q=" + $('.search-input').val() + "&api_key=dc6zaTOxFJmzC"
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      console.log(response.data[0].url);

      tenPics(response);
    }).fail(function(){
      console.log("Well this sux. It failed :(");
    }).always(function(){
      console.log("This always happens");
    })
  })

  function tenPics(response){
    for(i=0; i<=9; i++){
      $('body').append('<img src="'+response.data[10 * counter + i].images.fixed_height.url+'">');
      $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
          counter++;
          console.log(counter);
          for(j=11; j<=20; j++){
            console.log("more coming!");
            $('body').append('<img src="'+response.data[10 * counter + j].images.fixed_height.url+'">');
          }
        };
      });
    };
    console.log(counter++);
  }
})
