$(document).ready(function(){

$('input').keypress(function(ev){
  if (ev.keyCode == '13') {
    $('.main-wrapper').addClass('shrink');
  }
  $(this).addClass('search-focus');
  $(this).removeClass('search');

});

$('input').keyup(function() {
    if(!this.value){
      $('.main-wrapper').removeClass('shrink');
      $('input').addClass('search');
      $('input').removeClass('search-focus');

    }
});

});

//References
