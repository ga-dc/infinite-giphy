var num = 10
var query;
var off = 0;
$(document).ready(function(){
  $("form#search").on("submit", function(e){
    e.preventDefault();
    query = $("#keyword").val()
    query = query.split(' ').join('+')
    console.log(query);
    var url = "http://api.giphy.com/v1/gifs/search?q="+ query +"&api_key=dc6zaTOxFJmzC&limit=100"
    $.ajax({
      url: url,
      type: "get",
      dataType: "json",
    }).done(function(response){
      var responses =  response.data.splice(num - 10, num);
      for (i=0; i<responses.length; i++){
        var responseEl = $("<img src='" + responses[i].images.fixed_height.url + "' />")
        $("body").append(responseEl)
      //console.log(responseEl);
      }
    })
  })
})

$(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
	    // when scroll to bottom of the page
      console.log("MORE!");
      num += 10;


      if (num > 100){
        num = 10;
        off += 100;
      }

      var url = "http://api.giphy.com/v1/gifs/search?q="+ query +"&api_key=dc6zaTOxFJmzC&limit=100&offset="+ off +""
      console.log(url);
      $.ajax({
        url: url,
        type: "get",
        dataType: "json",
      }).done(function(response){
        console.log(num);
        var responses =  response.data.splice(num - 10, num);
        for (i=0; i<responses.length; i++){
        var responseEl = $("<img src='" + responses[i].images.fixed_height.url + "' />")
        //console.log( responses[i].images.fixed_height.url + "@" + num + ":" + off );
        console.log( responses[i].images.fixed_height.url + "@" + (num - 10) + ":" + i + "Compared to response at "+ ((num - 10) + i) + ": " + response.data[(num - 10) + i].images.fixed_height.url );

        //console.log(responses[i].images.fixed_height.url == response.data[(num - 10) + i].images.fixed_height.url);
        console.log(responses[i] == response.data[(num - 10) + i]);

        $("body").append(responseEl)
        //console.log(responseEl);
        }
      })

	}
});
