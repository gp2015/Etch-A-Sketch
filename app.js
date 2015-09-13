var squares = 16;

function drawCanvas(numOfSquares){
	
	console.log("Drawing canvas...")
	
	$('#grid').text('');
	
	for (var i = 0; i < numOfSquares * numOfSquares; i++){
		$('#grid').append("<div></div>");
	}
	
	$('#grid>div').addClass('canvas');
	
	canvasSize = 720 / numOfSquares + "px";
	
	$('#grid>div').css('height', canvasSize);
	
	$('#grid>div').css('width', canvasSize);
	
	console.log("Drawing complete.");
	
	$('#grid>div').hover(function(){
		$(this).removeClass('canvas');
		$(this).addClass('draw');
	})
}

function reset(){
	squares = prompt("Enter number of squares wide: ", "Number of squares wide");
	
	drawCanvas(squares);
}

function clearCanvas(){
	drawCanvas(squares);
}