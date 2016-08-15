$( document ).ready(function() {
    var $form = $("#search");
    var scrollImage = 10;

    $form.on("submit", function(e) {
      e.preventDefault();
      // remove previously added images for new giphy searches
      $("#gify-list").empty();

      // grab keyword value
      var $keyword = $("#keyword").val();

    $.ajax({
      type: "get",
      dataType: "json",
      url: "http://api.giphy.com/v1/gifs/search?q=" + $keyword + "&limit=100&api_key=dc6zaTOxFJmzC"
      }).done(function(res){
      for (i = 0; i < 10; i++) {
          var newImg = "<img src=" + res.data[i].images.fixed_height.url + ">";
          $("#gify-list").append(newImg);
        };

        // scroll function
        $(window).on('scroll', function() {
          if($(window).scrollTop() + $(window).height() >= $(document).height()){
                scrollImage ++;
                if (scrollImage < 100) {
                var scrollNewImg = "<img src=" + res.data[scrollImage].images.fixed_height.url + ">";
                $("#gify-list").append(scrollNewImg);
              };
            };
        });

        // toggle image class
        $("img").on("click", function(){
          $(this).toggleClass('big');
        })

        // clear input
            $("#keyword").val('');
        }).fail(function(res) {
          console.log("oh nos, an error!");
        })
  })

});
