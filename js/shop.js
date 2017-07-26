
function cart(){
	// alert($('.con_body li[class!="parttitle"]').length)
	var $lis = $('.con_body li[class!="parttitle"]');
	var cart_num = 0;
	$lis.click(function(){
		$(this).children('img').clone().css({

			'width':'300px',
			'position':'absolute',
			'left':$(this).offset().left,
			'top':$(this).offset().top,
			'opacity':'0.8'

		}).appendTo('body').animate({
			'position':'absolute',
		    'width':'30px',
		    'height':'30px',
		    'left':$('.cart').offset().left/24*23,
		    'top':$('.cart').offset().top,
		    'opacity':'0.3',

		},1000,function(){
		 
			$(this).animate({
				'width':'0',
				'height':'0'
			},function(){
				$('.cart_num').html(++cart_num);
				$(this).detach();
			});

		});
	});

	$('.cart img').toggle(
	  function(){
	  $(".cart_content").css("transform","scale(1)")},
	  function(){
	  $(".cart_content").css("transform","scale(0)")}
	);

}