$("document").ready(function(){

	$('#box, img').click('on', function(){
		var big = true;
		$(this).animate(
		{
			"position":"relative",
			"width":"80%",
			"height":"600px",
		}, 500);
		if (big = true) {
			$(this).click('on', function(){
				var big = false;
				$(this).animate(
					{
						"width":"300px",
						"height":"250px"
					}, 300);
			});
		}
	});
});