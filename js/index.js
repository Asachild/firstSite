


//类数组转化成数组
function convertToArray(nodes){
	try{return Array.prototype.slice.call(nodes,0);
	}catch(ex){
		var arr = new Array(),length = nodes.length;
		for(var i = 0; i <length; i++){arr.push(nodes[i]);}
		return arr;
	}
}

// 签到部分
function startSign(){
	$('#speaking').focus(function(){
		if ($('#speaking').val() == '请输入') {$('#speaking').val('')};
	});
	$('#speaking').blur(function(){
		if ($('#speaking').val() == '') {$('#speaking').val('请输入')};
	});
	$('#imgs img').click(function(){
		$(this).attr('class','cur').parent().siblings().children().attr('class','');
	});
	$('#startSign').click(function(){
		if($('#imgs img').attr('class') == null){alert('请选择你的心情图标！');return;}
		if($('#speaking').val() == '' || $('#speaking').val() == '请输入'){$('#speaking').css({'color':'red'});return;}
		$('#speaking').css({'color':'#666'});
		var src = $('#imgs img.cur').parent().html();
		var speaking = $('#speaking').val();
		var tr1 = '<tr><td></td><td><a href="#">aaa</a></td><td>86</td><td>9</td><td>2016-09-06 00:00</td><td>[LV.3]常住居民II</td><td>2 </td><td class="green">今天已签到</td></tr><tr class="colplural"><td align="left" colspan="9">我今天最想说: <img src=""/></td></tr>';
		tr1 = tr1.replace(/(<img src=""\/>)/,src+speaking)
		$('.datatable').prepend(tr1);
	});
}



//将需要的数据push到一个数组
var arr = [];
var method;
function array(indexli){
	var tds = $('.datatable tbody tr:even').find('td:eq('+(indexli+2)+')');
	tds.each(function(){
		if(indexli == 2){arr.push($(this).text().replace(/-/g,''))}
		else if(indexli == 3){arr.push($(this).text().match(/\d+/))}
		else{arr.push($(this).text())}
		return arr;
	});
}
//排序部分
function jiangXu(){
	arr.sort(function(a,b){return b-a;});
}
function shengXu(){
	arr.sort(function(a,b){return a-b;});
}

//对按钮绑定点击事件
function sortSign(){
	var method = -1;//记录当前li是否是再次点击
	$('#sign li').click(function(){
		$(this).attr('class','cur').siblings().attr('class','');
		// 当前点击的li下标
		var indexli = $(this).index();
		array(indexli);
		if(method == indexli){
            shengXu();
            method = -1; 
        }else{
        	jiangXu();
        	method = indexli;
        }
        alert(arr);
        arr = [];
        return;
	});
} 




//选项卡
function changeTab(){
	var lis = null, commons = null;
	var tab = document.getElementById('tab');
	lis = tab.getElementsByTagName('li');
	lis = convertToArray(lis);
	var tab_common = document.getElementById('tab_common')
	var commons = tab_common.getElementsByTagName('div');
	//初始化tab_content的高度
	tab_common.style.height = commons[0].offsetHeight + "px";
	for(var i = 0; i < lis.length; i++){
		lis[i].index = i;
		lis[i].onclick = function(){
			if(this.className == "cur") return;
			for(var j = 0; j < lis.length; j++){
				if(lis[j].className == "cur")
					commons[lis[j].index].className = "common disappear";
				lis[j].className = "";
			}
			this.className = "cur";
			commons[this.index].className = "common show";
			tab_content.style.height = commons[this.index].offsetHeight + "px";
		}
	}
}