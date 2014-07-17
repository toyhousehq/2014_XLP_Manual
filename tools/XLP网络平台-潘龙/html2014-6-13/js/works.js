$(document).ready(function() {

var tot = $('.num li').size();  // 获取总共图的数量
var liWidth=$('.banner_list a').eq(0).outerWidth(true);
var now = 1;       // 下次滚动的图片索引号
var time = 3000;  // 图片滚动的时间
$('.banner_list').width(liWidth*tot);
change_banner = function()
	{
		if(now >= tot) now = 0;
		$('.num li').eq(now).click();	
		now++;
	};
$('.num li').click(function(){
				var i = $(this).index();
				var l = -i*liWidth;
				$(this).addClass('current').siblings().removeClass('current');
				$('.banner_list').animate(
					{
					left:l
					},'slow'
				)
				}).mouseover(function(){
				var i = $(this).index();
				$('.num li').eq(i).click();
				now = i + 1;
				clearInterval(t);	
			   }).mouseout(function(){
				t = setInterval("change_banner()",time);
			})


var t = setInterval("change_banner()",time);

$('.banner_list').hover(function()
{
  clearInterval(t);	
},function()
{
t = setInterval("change_banner()",time);

})    
});
