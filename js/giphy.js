console.log("JS Connected")

$(document).ready(function () {


    $("#search button").on('click', function (event) {
        event.preventDefault();

        // Get the search term
        search_term = $("#search input").val();

        // Clear the div incase it is not the first search
        $(".gifs").empty();


        // Get the first ten gifs
        offset = 0;
        requestGiphy(search_term, offset);
        offset += 10;


    });

    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height() && search_term){
            requestGiphy(search_term, offset);
            offset += 10;
        }
    });

    function requestGiphy(searchTerm, offset) {
        // Set up the request
        var url = "http://api.giphy.com/v1/gifs/search?q=" + search_term + "&offset=" + offset + "&limit=10&api_key=dc6zaTOxFJmzC"
        var request = $.ajax({
            url: url,
            type: "get",
            dataType: "json"
        }).done(function(response){
            console.log(request);
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                renderImage(response.data[i], 0);
            }

            // var forecast = new Forecast(response);
            // var forecastView = new ForecastView(forecast)
        }).fail(function(){
            console.log("ajax request failed");
        }).always(function(){
            console.log("this always happen regardless of success of failure");
        })

    }

    function renderImage (giphyReturnObj) {
        var url = giphyReturnObj.images.original.url;
        var height = giphyReturnObj.images.original.height;
        var width = giphyReturnObj.images.original.width;

        var element = "<img src='" + url + "' style='width: " + width + " height: "+ height +"'>"

        $(".gifs").append(element);
    };



})