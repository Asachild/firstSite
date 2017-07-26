//类数组转化成数组
function convertToArray(nodes){
	try{return Array.prototype.slice.call(nodes,0);
	}catch(ex){
		var arr = new Array(),length = nodes.length;
		for(var i = 0; i <length; i++){arr.push(nodes[i]);}
		return arr;
	}
}
//拉伸列表
function stretchList(){
	var liObjs = null;
	var ulObjs = null;
	liObjs = document.getElementById('list').getElementsByClassName('list');
	ulObjs = document.getElementById('list').getElementsByTagName('ul');
	liObjs = convertToArray(liObjs);
	ulObjs = convertToArray(ulObjs);
	for(var i = 0; i < liObjs.length; i++){
		liObjs[i].index = i;
		liObjs[i].onclick = function(){
			for(var j = 0; j < ulObjs.length; j++){
				if(ulObjs[j].className) 
					ulObjs[j].className = "disappear";
					liObjs[j].className = "";
			}
			ulObjs[this.index].className = "show";
			this.className = "active";
		};
	}
}

//拉伸列表中的选项卡
function changeList(){
	var oh2 = document.getElementsByClassName('con_right')[0].getElementsByTagName('h2')[0];
	var videos = document.getElementById('video').getElementsByTagName('a');
	var pictures = document.getElementById('picture').getElementsByTagName('a');
	var musics = document.getElementById('music').getElementsByTagName('a');
	videos = convertToArray(videos);
	pictures = convertToArray(pictures);
	musics = convertToArray(musics);
// 找到所有动画元素
	var embedObjs = null;
	embedObjs = document.getElementsByTagName('embed');
	embedObjs = convertToArray(embedObjs);
//找到所有漫画元素
	var iframeObjs = null;
	iframeObjs = document.getElementById('part').getElementsByTagName('ul')[0].getElementsByTagName('iframe');
	iframeObjs = convertToArray(iframeObjs);
//找到所有iframe
	var iframe = document.getElementById('part').getElementsByTagName('iframe');

	for(var i = 0; i < videos.length; i++){

		videos[i].index = i;
		pictures[i].index = i;

		videos[i].onclick = function(){
			oh2.innerHTML =this.innerHTML;
			for(var k = 0; k < iframe.length; k++){
				iframe[k].style.display = 'none';
			}
			for(var j = 0; j < embedObjs.length; j++){
				embedObjs[j].style.display = 'none';
			}
			embedObjs[this.index].style.display = 'block';
		};
		pictures[i].onclick = function(){
			oh2.innerHTML = this.innerHTML;
			for(var k = 0; k < embedObjs.length; k++){
				embedObjs[k].style.display = 'none';
			}
			for(var j = 0; j < iframeObjs.length; j++){
				iframeObjs[j].style.display = 'none';
			}
			iframe[4].style.display = 'none';
			iframeObjs[this.index].style.display = 'block';
		};
		musics[i].onclick = function(){
			oh2.innerHTML = this.innerHTML;
			for(var j = 0; j < embedObjs.length; j++){
				embedObjs[j].style.display = 'none';
			}
			for(var k = 0; k < iframeObjs.length; k++){
				iframeObjs[k].style.display = 'none';
			}
			iframe[4].style.display = 'block';
		};
	}
}