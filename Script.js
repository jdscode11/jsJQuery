$(document).ready(function() {
	"use strict";
    $("#btnGrid").click(function(){
		$('#container').empty();
        var $gridVal = prompt("Enter grid dimension value.");
		$('#container').width($gridVal * "12" + "px");
		$('#container').height($gridVal * "12" + "px");
		for(var x = 0; x < $gridVal; x++) {
			for(var y = 0; y < $gridVal; y++) {
				var box = $('<div class="box"></div>');
				box.appendTo('#container');
			}
		}
		$('.box').hover(function() {
        	$(this).css("background","lightblue");
    	});
    }); 
});