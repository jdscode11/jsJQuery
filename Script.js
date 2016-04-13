$(document).ready(function() {
	"use strict";
    $("#btnGrid").click(function(){
		$('#container').empty();
        var $gridVal = prompt("Enter grid dimension value.");
		var $box = "<div class='box'></div>";
		var $container = $('#container');
		var $bgFormat = $('* 12 + "px"');
		$container.width($gridVal + $bgFormat);
		$container.height($gridVal + $bgFormat);
		for(var x = 0; x < $gridVal; x++) {
			for(var y = 0; y < $gridVal; y++) {
				var box = $($box);
					box.appendTo($container);
				}
			}
		$('.box').hover(function() {
        	$(this).css("background","lightblue");
    	});
    }); 
	
    
	
	
});

