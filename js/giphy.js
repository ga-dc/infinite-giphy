$( document ).ready(function() {
    var $form = $("#search");

    // Gify constructor
    // function Gify(options) {
    //   var options = options.data
    //   this.image = options.data.images.fixed_height.url
    // }
    //
    // Gify.protoype = {
    //   render: function() {
    //     var container = $("<div></div>")
    //     container.append($("<img src=" +  + "/>"))
    //   }
    // }


    $form.on("submit", function(e) {
      e.preventDefault();
      // remove previously added images for new giphy searches
      var images = document.getElementsByTagName('img');
      var l = images.length;
      for (var i = 0; i < l; i++) {
          images[0].parentNode.removeChild(images[0]);
      }
      // grab keyword value
      var $keyword = $("#keyword").val();
      
    $.ajax({
      type: "get",
      dataType: "json",
      url: "http://api.giphy.com/v1/gifs/search?q=" + $keyword + "&api_key=dc6zaTOxFJmzC"
    }).done(function(res){
      for (i = 0; i < res.data.length; i++) {
          var newImg = "<img src=" + res.data[i].images.fixed_height.url + ">";
          $("body").append(newImg);
        };
        // clear input
        $("#keyword").val('');
    }).fail(function(res) {
      console.log("oh nos, an error!");
    })
  })

});
