$(document).ready(function() {

  var num=10
  var input;
  var offset = 0;

  $("button").on("click", function(e){
    e.preventDefault();
    var input = $("#keyword").val()
    var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC&limit=100"
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json'
    })
    .done(function(response) {
      console.log("success")
      gif10 = response.data.splice((num-10),num);
      var i;
      for (i=0; i<gif10.length; i++) {
        var gif = $("<img src='" + gif10[i].images.fixed_height.url + "'/>")
        $("body").append(gif)
      }
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  })

  //load MORE
  $(window).on("scroll", function() {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      // when scroll to bottom of the page
      console.log("more!")
      num+=10

      //increase offset
      if (num > 100){
        num = 0;
        offset += 100;
      }

      //picked up from before..
      var input = $("#keyword").val()
      var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC&limit=100&offset=" + offset + ""
      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json'
      })
      .done(function(response) {
        console.log("success")
        gif10 = response.data.splice((num-10),num);
        for (i=0; i<gif10.length; i++) {
          var gif = $("<img src='" + gif10[i].images.fixed_height.url + "'/>")
          $("body").append(gif)
        }
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
    }
  })




});
