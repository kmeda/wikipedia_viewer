$(document).ready(function(){

$('input').keypress(function(ev){
  if (ev.keyCode == '13' && !($("input[name=wikipedia]").val() == '')) {
    $('.main-wrapper').addClass('shrink');
    $.ajax({
        url: '//en.wikipedia.org/w/api.php',
        data: { action: 'query', list: 'search', srsearch: $("input[name=wikipedia]").val(), format: 'json' },
        dataType: 'jsonp',
        success: function (x) {
            console.log('title', x);
              $('.articles-container').empty();
            for (var i = 0; i < x.query.search.length; i++){
              var contentHTML = '<a href=https://en.wikipedia.org/wiki/'+x.query.search[i].title+' target="_blank"><div class="articles-00 articles"><p class="title">'+x.query.search[i].title +'</p><p class="summary">'+x.query.search[i].snippet +'</p></div>'
              $('.articles-container').append(contentHTML);
              $('.articles-00').addClass('article');
            }
        }
    });

  }


  $(this).addClass('search-focus');
  $(this).removeClass('search');

});

$('input').keyup(function() {
    if(!this.value){
      $('.main-wrapper').removeClass('shrink');
      $('input').addClass('search');
      $('input').removeClass('search-focus');
      $('.articles-container').empty();


    }
});


});

//References
