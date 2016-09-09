$(document).ready(function(){
  function searchGif(url){
    console.log("searching");
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(res){
      console.log("ajax");
      for(count = 0; count < 10; count++){
        var source = res.data[count].images.fixed_height.url;
        var el = "<img src="+'"'+source+'"'+" alt='gif'>";
        $('body').append(el);
        console.log(el);
      }
    });
  };
  var offset = 10;
  $("button").on('click', function(event){
    event.preventDefault();
    var search = $('#keyword').val();
    var url = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=10&offset="+offset; 
    searchGif(url);
    console.log("search passed");
    $(window).scroll(function () { 
      if($(window).scrollTop() + $(window).height() == $(document).height()) {
        console.log("bottom");
        offset += 10;
        url = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=10&offset="+offset; 
        searchGif(url);
      }
    });
  })
})
