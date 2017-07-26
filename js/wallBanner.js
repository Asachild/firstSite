//类数组转化成数组
function convertToArray(nodes){
	try{return Array.prototype.slice.call(nodes,0);
	}catch(ex){
		var arr = new Array(),length = nodes.length;
		for(var i = 0; i <length; i++){arr.push(nodes[i]);}
		return arr;
	}
}
//----------lunbo-------------//
var num=1;//如终记录显示第几张图片
function initBegin(flag){
	var content=document.getElementById("content");
	content.style.transitionDuration="0.001s";
	content.style.left="-n00%".replace("n",flag);
	setTimeout("document.getElementById('content').style.transitionDuration='1s'",20);
}
function initEnd(){
	var content=document.getElementById("content");
	content.style.transitionDuration="0.001s";
	content.style.left="-500%";
	setTimeout("document.getElementById('content').style.transitionDuration='1s'",20);
}
function buttonLunbo(num){
	var lis = document.getElementById('banner').getElementsByTagName('li');
	lis = convertToArray(lis);
	for(var i = 0;i < lis.length;i++){
		if(lis[i].className) lis[i].className = "";
	}
	if(num == 5){setTimeout("initBegin(1)",1100); num = 0;}
	lis[num].className = "active";
}
function lunbo(){
	var content=document.getElementById("content");
	buttonLunbo(num);
	content.style.left="-n00%".replace("n",++num);
	if(num==6){setTimeout("initBegin(1)",1100);num=1;}
}
function clickLunbo(){
	var content = document.getElementById("content");
	var left = document.getElementById('banner_left');
	var right = document.getElementById('banner_right');
	var lis = document.getElementById('banner').getElementsByTagName('li');
	lis = convertToArray(lis);
	left.onclick = function(){
		clearInterval(l);
		content.style.left = "-"+(--num)+"00%";
		if(num == 0){setTimeout(initEnd,1100); num = 5;}
		buttonLunbo(num-1);
		l = setInterval(lunbo,3000);
	};
	right.onclick = function(){
		clearInterval(l);
		content.style.left = "-"+(++num)+"00%";
		if(num == 6){setTimeout("initBegin(1)",1100); num = 1;}
		buttonLunbo(num-1);
		l = setInterval(lunbo,3000);
	};
	for(var i = 0;i < lis.length; i++){
		lis[i].index = i;
		lis[i].onclick = function(){
			clearInterval(l);
			for(j = 0; j < lis.length; j++){lis[j].className="";}
			this.className="active";
			initBegin(this.index+1);
			num = this.index+1;
			l = setInterval(lunbo,3000);
		};
	}
	
	content.onmouseover = function(){
		clearInterval(l);
	};
	content.onmouseout = function(){
		l = setInterval(lunbo,3000);
	};
}

// 壁纸选项卡
function page(){
	$(".main-page .nav div").mouseenter(function () {
        var $this = $(this);
        var index = $this.index();
    }).mouseleave(function () {
        var $this = $(this);
        var index = $this.index();
    }).click(function () {
        var $this = $(this);
        var index = $this.index();
        var l = -(index * 600);
        $(".main-page .nav div").removeClass("on");
        $(".main-page .nav div").eq(index).addClass("on");
        $(".main-page .content div:eq(0)").stop().animate({ "margin-top": l }, 500);
    });
}


// scroll
function scrollNum(num){
	var navs = document.getElementsByClassName('nav')[0].getElementsByTagName('div');
	navs = convertToArray(navs);
	for(var i = 0; i < navs.length; i++){
		if(navs[i].className){num = i;return num;}
	}
}
function scroll(){
	var scroll_ins = null;
	var temp = 0;//记录图片滚动到哪里
	var num = 0;//记录是第几个选项卡的模块
	var num1 = 0;//记录是原来是几个选项卡的模块
	var scroll_left = document.getElementById('scroll_left');
	var scroll_right = document.getElementById('scroll_right');
	var scroll_ins = document.getElementsByClassName('scroll_in');
	scroll_ins = convertToArray(scroll_ins);
	
	scroll_left.onclick = function(){
		num = scrollNum(num);
		if(num!=num1) {temp = -3;scroll_ins[num1].style.left = 0;num1 = num;}
		if(temp == 0) temp = -3;
		scroll_ins[num].style.left = (++temp)+"00%";
	};
	scroll_right.onclick = function(){
		num = scrollNum(num);
		if(num!=num1) {temp = 0;scroll_ins[num1].style.left = 0;num1 = num;}
		if(temp == -2) temp = 1;
		scroll_ins[num].style.left = (--temp)+"00%";
	};
}


