$(document).ready(function(){

$('input').keypress(function(ev){
  var keycode = (ev.keyCode ? ev.keyCode : ev.which);
  if (keycode == '13') {
    $('.main-wrapper').addClass('shrink');
  }
  $(this).addClass('search-focus');
  $(this).removeClass('search');

});

$('.button').on('click', function(){
  $('.main-wrapper').removeClass('shrink');
  $('input').addClass('search');
  $('input').removeClass('search-focus');
});

});

//References
