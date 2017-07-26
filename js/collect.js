function collect(){
	var collect = document.getElementById('collect');
	var hide = document.getElementById('hide');
	hide.onclick = function(){
		if(collect.offsetLeft == 0){
			collect.style.left = '-'+collect.offsetWidth+'px';
			hide.style.left = '50px';
			hide.style.width = '30px';
			hide.style.backgroundPosition = '-40px -4px';
			hide.style.transition = 'all .3s linear .3s';
		}else{
			collect.style.left = '0';
			hide.style.left = '0';
			hide.style.width = '50px';
			hide.style.backgroundPosition = '2px -4px';
			hide.style.transition = 'all .3s';
		}
	};
}
