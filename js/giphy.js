$(document).ready(function(){
  $("form#search").on("submit", function(e){
    e.preventDefault();
    query = $("#keyword").val()
    query = query.split(' ').join('+')
    console.log(query);
    var url = "http://api.giphy.com/v1/gifs/search?q="+ query +"&api_key=dc6zaTOxFJmzC"
    $.ajax({
      url: url,
      type: "get",
      dataType: "json",
    }).done(function(response){
      responses =  response.data.splice(0,10);
      for (i=0; i<responses.length; i++){
      responseEl = $("<img src='" + responses[i].images.fixed_height.url + "' />")
      $("body").append(responseEl)
      console.log(responseEl);
      }
    })
  })
})
