

// 页面底部导航
function nav(){
	$(window).scroll(function(){
		if($(window).scrollTop()>=200){
			$("#box").show();
		}else{
			$("#box").hide();
		}
    }); 
	document.onmousemove = function(ev){
		var oBox = document.getElementById('box');
		var aImg = document.getElementsByTagName('img');
		var oEvent=ev||event;
		
		for(var i=0;i<aImg.length;i++){
			var x=aImg[i].offsetLeft+aImg[i].offsetWidth/2;
			var y=aImg[i].offsetTop+oBox.offsetTop+aImg[i].offsetHeight/2;
			var a = x - oEvent.clientX;
			var b = y-oEvent.clientY;
			var dis = Math.sqrt(a*a+b*b);
			var radio = 1-dis/300;
			if(radio<0.5)radio=0.5;
			aImg[i].width = 128*radio;
		}	
	};
}



// 页面底部时间
function getTime(num){
	num<10 ? num = "0"+num : num = ""+num;
	return num;
}
function show(){
	var date = new Date();
	var span = document.getElementById('footer').getElementsByTagName('span')[0];
	span.innerHTML = date.getFullYear()+"-"+
					 getTime(date.getMonth()+1)+"-"+
					 getTime(date.getDate())+"&nbsp;"+
					 getTime(date.getHours())+":"+
					 getTime(date.getMinutes())+":"+
					 getTime(date.getSeconds());
}
