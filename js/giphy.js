$(document).ready(function(){
  $("button").on("click", function(evt){
    // console.log("clicked");
    evt.preventDefault()
    var keyword = $("#keyword").val()
    var limit = 100

    $.ajax({
      type: "GET",
      dataType: "json",
      url: "http://api.giphy.com/v1/gifs/search?q="+keyword+"&limit="+limit+"&api_key=dc6zaTOxFJmzC"
    }).done(function(res){
      console.log(res);
      for (n=0; n<res.data.length; n++)
      {
        for (i=0; i<10; i++)
        {
          $(".giphy").append('<div><img src="' + res.data[i].images.fixed_height.url +'" /></div>');
        }(window).scroll(function(){
          if($(window).scrollTop() + $(window).height() == $(document).height()){

          }
      }
    }).fail(function(res){
      console.log("you have failed me");
    })
  })
})
//
//   $("button").on("click", function(){
//     var name = $(".artist_name").val()
//     var photo_url =$(".artist_photo_url").val()
//     var nationality =$(".artist_nationality").val()
//     $.ajax({
//       type: "POST",
//       data: {artist: {photo_url: photo_url, name: name, nationality: nationality}},
//       dataType: 'json',
//       url: "/artists"
//     }).done(function(res) {
//       console.log(res);
//       var artist_name=res.name
//       var artist_id = res.id
//       var newArtist=$("<li><a href='/artists/" + artist_id + "'>" + artist_name + "</a></li>")
//       console.log(artist_name, artist_id);
//       $('ul.artists').append(newArtist)
//
//     }).fail(function(res){
//       console.log("res");
//     })
//   })
//
// })
