// JavaScript Document
$(document).ready(function() {
    $('#agreement').click(function()
	{
			if($('.protocol').is(':visible')==true)
			{	
			$('.protocol').hide(500);
			}
		else
			{
				$('.protocol').show(500);
			}
	})
});