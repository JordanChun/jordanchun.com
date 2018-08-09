$(document).ready(function(){
  headerDrop();
});

function headerDrop(){
  $('.header').animate({top: '0px'});
  $('.header').css('position', 'fixed');
}
