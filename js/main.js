/*go top 設定*/

$(function(){
	$('#BackTop').click(function(){ 
		$('html,body').animate({scrollTop:0}, 500);
	});
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 300 ){
			$('#BackTop').fadeIn(500);
		} else {
			$('#BackTop').stop().fadeOut(200);
		}
	}).scroll();
});
