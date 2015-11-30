$(document).ready(function(){

  $("button").on("click", function(evt){
    evt.preventDefault();



    var input = $('#keyword').val();
    var url = 'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC';
    var ul = $('<ul></ul>');
    $('body').append(ul);


    $.ajax({
      url: url,
      type: "get",
      dataType: 'json'
    }).done(function(response){

      console.log("Ajax request success!")

      for (var i = 0; i <= 10; i++) {
        var li = $('<li><img src="' + response.data[i].images.fixed_height.url + '"/></li>');
        ul.append(li);
      }

        $(window).scroll(function () {
             if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
               for (i = 11; i < response.data.length; i++) {
                 var li = $('<li><img src="' + response.data[i].images.fixed_height.url + '"/></li>');
                 ul.append(li);
               }
               $('img').on('click', function(){
                 $(this).toggleClass('big');
               });

             }
         });

         $('img').on('click', function(){
           $(this).toggleClass('big');
         });

    }).fail(function(){
      console.log("Ajax request fails!")
    }).always(function(){
      console.log("This always happens regardless of successful ajax request or not.")
    })
  })
})
