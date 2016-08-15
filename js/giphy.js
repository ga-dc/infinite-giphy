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
    }).fail(function(res) {
      console.log("oh nos, an error!");
    })
  })

});
