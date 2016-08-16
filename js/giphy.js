$(document).ready(function(){
  $("button").on("click", function(evt){
    evt.preventDefault()
    var keyword = $("#keyword").val()
    var limit = 100
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "http://api.giphy.com/v1/gifs/search?q="+keyword+"&limit="+limit+"&api_key=dc6zaTOxFJmzC"
    }).done(function(response){
      for (i=0; i<10; i++){
        // console.log(response.data[i].url)
        $(".giphy").append('<div><img src="'+response.data[i].images.fixed_height.url+'" /></div>');
      }
      $(window).scroll(function()
    if $(window).scrollTop() + $(window).height() == $(document).height())
    {
      for (n=11; )
    }
    }).fail(function(response){

    }).always(function(){
    })
  })
})
