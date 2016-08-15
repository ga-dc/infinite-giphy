
$(document).ready(function() {
  var offset = 0;
  var input = $("#keyword").val()
  $("button").on('click',function(event) {
    event.preventDefault();
    var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC&limit=10&offset=" + offset ;
    gifSearch(url)
  })
  function gifSearch(url){
      $.ajax({
      url: url,
      type: 'GET',
      dataType: 'JSON'
    }).done(function(res) {
    for (i = 0; i < 10; i++){
      var gif = $("<img src='" + res.data[i].images.fixed_height.url + "'>")
      $("body").append(gif);
      i++
      };
    })

      $(window).scroll(function () {
     if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
       offset += 10
       var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC&limit=10&offset=" + offset ;
       gifSearch(url)
     }
  });

    }

  })
