$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var searchTerm = $("input[name='search']").val();
    var searchKey = "&api_key=dc6zaTOxFJmzC";
    console.log(searchTerm);
    var searchUrl = "http://api.giphy.com/v1/gifs/search?q="+searchTerm+searchKey;
    $.ajax({
      url: searchUrl,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      var itemCount = response.data.length;
      var output = "";
      for(var i = 0; i < itemCount; i++){
        output += "<div class=\"col-md-3\">";
        output += "<h4>Date Added: "+response.data[0].import_datetime+"</h4>";
        output += "<p><img src=\""+response.data[i].images.fixed_width_downsampled.url+"\"></p>";
        output += "</div>";
      }
      $("#output-area").append(output);
    }).fail(function(response){
      console.log("FAIL", response);
    })
  });
});
