// JavaScript Document
$(document).ready(function() {
    var now =0;
	var oul = $('.workscoll_top ul');
	var ali = $('.workscoll_top ul li');
	var aliWidth = ali.eq(0).outerWidth(true);
	var aliSize = ali.size();
	oul.width(aliWidth*aliSize+2);	
	var L = aliWidth;
	$('.arrow2').hide(); //默认向右点击按钮不隐藏

	//向左边点击
		 $('.arrow1').click(function(){
			 $('.arrow2').show();
			 if(now >= (aliSize - 4))
				{
				  alert('已经是第一张');
				  $('.arrow1').hide();
				}
				else
				{
				 $('.arrow1').show();
                 oul.animate(
				 {
					left:-L* (++now)
				 },'slow')
				};
			
		});
		
	//向右边点击
		$('.arrow2').click(function(){
		   $('.arrow1').show();
			if(now <= 0)
			{
			  alert('已经是最后一张');
			  $('.arrow2').hide();

			}
			else
			{
			 $('.arrow2').show();
              oul.animate(
				 {
				  left:-L*(--now)
				 },'slow')
			};
			
		});
		
		
		
	$('#bamain1').show();
    $('.Background h3').click(function() {
		if($(this).siblings('.bamain').is(':visible')==true)
		{			
		   $(this).removeClass('current');
		   $(this).siblings('.bamain').hide();
		}
		else
		{	
		    $(this).addClass('current');
			$(this).parent('.Background').siblings().children('h3').removeClass('current');
            $(this).siblings('.bamain').show().parent('.Background').siblings().children('.bamain').hide();
		}
   });
 
		
})

