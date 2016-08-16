function GiphView(giph){
    this.giph = giph
    this.el = $('.giphbox')
    this.render(giph)
}
GiphView.prototype = {
    render: function(giph){
        var container = $('.giphbox')
        var giphArray = giph.response
        for(i=0;i<giphArray.length;i++){
            container.append("<img src="+giphArray[i].images.downsized.url+" alt="+giphArray[i].type+"/>")
        }
    }
}
