 
function login(){

	var regexp = /^[a-zA-Z]{1}[0-9a-zA-Z]{5,11}$/;

	$('input:lt(2)').each(function(){

		$(this).focus(function(){
			if(regexp.test($(this).val())){
				$(this).next().css({'color':'white'});
			}
		}).blur(function(){
			if($(this).val() == null || $(this).val() == '' || !regexp.test($(this).val())){
				$(this).next().css({'color':'red'});
			}else{
				$(this).next().css({'color':'white'});
			}
		});
	});
	$('input:eq(2)').focus(function(){
			}).blur(function(){
				if($(this).val()==$('input:eq(1)').val()){
					$(this).next().css({'color':'white'});
				}else{
					$(this).next().css({'color':'red'});
				}
			});

	$('#login-button').click(function (event) {
	    event.preventDefault();//阻止元素发生默认的行为
			if(regexp.test($('input:eq(0)').val()) && regexp.test($('input:eq(1)').val())){

				if($('input:eq(2)').val()==$('input:eq(1)').val() && $('input:eq(3)').attr('checked')){
				    $('form').fadeOut(500);//淡出效果来隐藏被选元素
				    $('.login').addClass('form-success');
				}
			}
	});
}
