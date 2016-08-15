$('form').submit(function(event) {
    event.preventDefault();
    console.log('Iwork')
    var search = $('input').val()
    console.log(search)
    var url = "http://api.giphy.com/v1/gifs/search?q="+search+"&api_key=dc6zaTOxFJmzC"
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json'
    })
    .done(function(response) {
        console.log("success");
        console.log(response)
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });

});
