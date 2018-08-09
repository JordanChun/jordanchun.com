function enlargeImage(imgSrc){
  $('#view-img').fadeIn('fast');
  $('#view-img img').attr('src', imgSrc);
}

$('.project-details img').bind('click', function(){
  enlargeImage($(this).attr('src'));
})

$('#view-img').click(function(){
  $(this).fadeOut('fast');
});
