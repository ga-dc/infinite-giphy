$(document).ready(function() {
	var key, offset;
	$("#search").on("submit", function(e) {
		e.preventDefault();
		key = $("input").val().split(" ").join("+");
		offset = 0;
		$(".content").html("");
		loadImg();
	})

	$(window).scroll(function() {
   	if($(window).scrollTop() == $(document).height() - $(window).height()) {
   		loadImg()
   	}
	});

	function loadImg() {
		offset += 10
		var request = $.ajax("http://api.giphy.com/v1/gifs/search?q=" + key + "&api_key=dc6zaTOxFJmzC&limit=10&offset=" + offset);
		request.done(function(data) { 
			console.log("success got data", data);
			for (var i = 0; i < data.data.length; i++) {
				$(".content").append("<img class='lazy' src='" + data.data[i].images.original.url + "'>");
			}
		});
	}
});