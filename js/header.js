	$(window).scroll(()=>{
	var windowTop = $(window).scrollTop();
	windowTop > 70 ? $('nav').removeClass('trans-back') : $('nav').addClass('trans-back');
});

/*
$(function(){
  $('.group').on('mouseover',function(){
    $('.main-image').css({'background':'url(img/web.jpg)','background-position':'top center','background-size':'cover'});
  });
  $('.group').on('mouseleave',function(){
    $('.main-image').css({'background':'','background-position':'','background-size':''});
  });
});*/
