$( document ).ready(function() {
    var $form = $("#search");
    var $keyword = $("#keyword").val();

    $form.on("submit", function(e) {
      e.preventDefault();
    $.ajax({
      type: "get",
      dataType: "json",
      url: "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC"
    }).done(function(res){
      console.log(res);
    }).fail(function(res) {
      console.log("you have failed me for the last time");
    })
  })

});
