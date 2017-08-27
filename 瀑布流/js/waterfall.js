$(document).ready(function(){
	loadMore();
});	
$(window).scroll(function(){
	// 当滚动到最底部以上100像素时， 加载新内容
	//$(document).height()整个文档的高度-滚动的高度-
	//$(document).scrollTop() 获取垂直滚动的距离  即当前滚动的地方的窗口顶端到整个页面顶端的距离
	//$(document).scrollLeft() 这是获取水平滚动条的距离

	// console.log($(this).scrollTop());

	 // 当滚动到最底部以上100像素时， 加载新内容 
	 if ($(document).height() - $(this).scrollTop() - $(this).height()<100) loadMore(); 
		// console.log("document:",$(document).height());
		// console.log("this.scrollTop:",$(this).scrollTop());
		// console.log("this.height:",$(this).height());
	// //$(window).scrollTop()这个方法是当前滚动条滚动的距离
		// console.log('window',$(window).scrollTop());
	// 	console.log('document',$(document).scrollTop());
	// //$(window).height()获取当前窗体的高度
	// 	console.log('this',$(this).scrollTop());
	// //$(document).height()获取当前文档的高度
});
function loadMore()
{
	$.ajax({
		url : 'data.php',
		dataType : 'json',
		success : function(json)
		{
			// console.log(json);
			if(typeof json == 'object')
			{
				var oProduct, $row, iHeight, iTempHeight;
				for(var i=0, l=json.length; i<l; i++)
				{
					oProduct = json[i];
					
					// 找出当前高度最小的列, 新内容添加到该列
					iHeight = -1;
					$('#stage li').each(function(){
						// console.log($(this).height());
						iTempHeight = Number( $(this).height() );
						// console.log("h:",iHeight);
						// console.log("t:",iTempHeight);
						if(iHeight==-1 || iHeight>iTempHeight)
						{
							iHeight = iTempHeight;
							$row = $(this);
						}
						// console.log("hh:",iHeight);
						// console.log("tt:",iTempHeight);
					});

					// console.log($row);
					$item = $('<div><img src="'+oProduct.image+'" border="0" ><br />'+oProduct.title+'</div>').hide();
					
					$row.append($item);
					$item.fadeIn(1100);
				}
			}
		}
	});
}