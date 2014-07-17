// JavaScript Document
$(document).ready(function() {
    $('#sign').click(function()
	{
			if($('.login').is(':visible')==true)
			{	
			$('.login').hide(500);   
			}
		  else
			{
				$('.login').show(500);
			}
	})
	
	
	//弹出登录 参数 是 样式名
	function ShowDiv(show_div,bg_div){
		
		$("."+show_div).css("display", "block");
		$("."+bg_div).css("display", "block");		
		$("."+bg_div).height($(document).height());
	};

	//关闭登录 参数 是 样式名
	function CloseDiv(show_div,bg_div)
	{
		$("."+show_div).css("display", "none");
		$("."+bg_div).css("display", "none");	
	};

	/*找回密码*/
	  $('#forget').click(function()
   		{
	    /*忘记密码页面*/
	   var oforget=$('<div class=\"pop\"><span id=\"close\">关闭</span><p><label>请输入你的邮箱：</label><input type=\"email\"  /><input type=\"submit\"  class=\"submit1\" value=\"提交\"/></p></div>');
      oforget.appendTo('body');
	  
	  /*创建遮罩*/
	  var omask=$('<div class=\"mask\"></div>');
	  omask.appendTo('body'); 
	  $('.mask').css({'position': 'absolute','top': '0%','left': '0%','width': '100%','height': '100%','background-color': 'gray','z-index':'103','-moz-opacity': '0.8','opacity':'80','filter': 'alpha(opacity=80)'});
	  ShowDiv('password_forget', 'mask');
	  
	  //改变滚动条，窗口大小
	   window.onresize=window.onscroll=function()
		{
			$(".pop").css("top",(document.documentElement.clientHeight-$(".pop").height())/2+document.documentElement.scrollTop+'px');
		}
		
		/*关闭忘记密码页面*/
		$('#close').click(function()
		{
			$('.pop').remove();
			$('.mask').remove();
		})
    });

  /*修改头像*/
	  $('#modif_photo').click(function()
      {
	   var modif_photo=$('<div class=\"pop\"><span id=\"close\">关闭</span><p><label>修改头像：</label><input type=\"file\"  /><input type=\"submit\"  class=\"submit1\" value=\"提交\"/></p></div>');
      modif_photo.appendTo('body');
	  
	  /*创建遮罩*/
	  var omask=$('<div class=\"mask\"></div>');
	  omask.appendTo('body'); 
	  $('.mask').css({'position': 'absolute','top': '0%','left': '0%','width': '100%','height': '100%','background-color': 'gray','z-index':'103','-moz-opacity': '0.8','opacity':'80','filter': 'alpha(opacity=80)'});
	  ShowDiv('password_forget', 'mask');
	  
	  //改变滚动条，窗口大小
	   window.onresize=window.onscroll=function()
		{
			$(".pop").css("top",(document.documentElement.clientHeight-$(".pop").height())/2+document.documentElement.scrollTop+'px');
		}
		
			/*关闭忘记密码页面*/
			$('#close').click(function()
			{
				$('.pop').remove();
				$('.mask').remove();
			})

       });    
	   
	  //语言选择
	  $('#lan').click(function()
		{
				if($('.lan').is(':visible')==true)
				{	
				$('.lan').hide(500);  
				 
				}
			else
				{
					$('.lan').show(500);
				}
		});
		
		
		//点击登录
		/*
		$('#denglu').click(function()
		{
				if($('.login').is(':visible')==true)
				{	
				$('.login').hide(500);   
				}
			else
				{
					$('.login').show(500);
				}
		})
	 
	   */
 
		
}) ;

	

	
	

   
  