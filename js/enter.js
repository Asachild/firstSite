 
function enter(){

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
	$('#login-button').click(function (event) {
	    event.preventDefault();//��ֹԪ�ط���Ĭ�ϵ���Ϊ

		if(regexp.test($('input:eq(0)').val()) && regexp.test($('input:eq(1)').val())){
		    $('form').fadeOut(500);//����Ч�������ر�ѡԪ��
		    $('.login').addClass('form-success');
		}
	});
}
