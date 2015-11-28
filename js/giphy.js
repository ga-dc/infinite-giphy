$(document).ready(init);

function init() {
  $('#search button').on('click', function(evt) {
    evt.preventDefault();
    var searchTerm = $('#keyword').val();
    searchTerm = searchTerm.replace(" ", "+");
    var page = 0;
    var pageLength = 10;
    giphyCall(searchTerm, page, pageLength);
    scrollListener(searchTerm, page, pageLength);
  });
}

function giphyCall(keyword, page, pageLength){
  var url = 'http://api.giphy.com/v1/gifs/search?q=' + keyword + '&offset=' + page * pageLength + '&limit=' + pageLength + '&api_key=dc6zaTOxFJmzC';
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json'
  }).done(function(res){
    var gif = res.data[0].images.downsized.url || res.data[0].images.original.url;
    appendGifs(res);
    console.log(res);
  })
    .fail(function(){
      console.log('failure to launch');
    })
    .always();
}

function appendGifs(gifs){
  gifs.data.forEach(function(gif){
    var image = gif.images.downsized.url || gif.images.original.url;
    $('body').append('<img src="' + image + '" class="gif">');
  });
}

function scrollListener(keyword, page, pageLength){
  var pageNum = page;
  $(window).on("scroll", function(){
    if($(window).scrollTop() + $(window).height() == $(document).height()){
      pageNum++;
      giphyCall(keyword, pageNum, pageLength);
    }
  });
}
