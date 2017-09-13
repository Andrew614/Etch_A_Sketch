function createGrid(x){
	for(var i = 0; i < x; i++) {
		for(var j = 0; j < x; j++) {
			$('#container').append("<div class='square'></div>");
		}
	}
  	$('.square').height(450/x);
	$('.square').width(450/x);
}

function hover() {
	$('.square').on('mouseenter', function() {
  		$(this).addClass('hover');
  	});
}


$(document).ready(function() {
	createGrid(16);
  	hover();
  
  	$('#reset').click(function() {
  		$('#container').empty();
    	var grid = prompt('What size grid do you want? (Enter a number between 1 and 100)');
    	while(grid < 1 || grid > 100) {
      		grid = prompt('Please enter a number between 1 and 100');
      	}
    	createGrid(grid);
    	hover();
  	});
});