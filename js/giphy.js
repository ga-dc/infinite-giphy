$('form').submit(function(event) {
    event.preventDefault();
    var search = $('input').val()
    var url = "http://api.giphy.com/v1/gifs/search?q="+search+"&api_key=dc6zaTOxFJmzC&limit=5"
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json'
    })
    .done(function(response) {
        console.log("success");
        $('.giphbox').empty()
        $(window).scrollTop()
        var giph = new Giph(response)
        var giphView = new GiphView(giph)
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });

});

$(window).scroll(function(event) {
    if($(window).scrollTop() + $(window).height() === $(document).height()){
        var search = $('input').val()
        var url = "http://api.giphy.com/v1/gifs/search?q="+search+"&api_key=dc6zaTOxFJmzC&offset=100"
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json'
        })
        .done(function(response) {
            console.log("success");
            var giph = new Giph(response)
            var giphView = new GiphView(giph)
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });

    }
});
