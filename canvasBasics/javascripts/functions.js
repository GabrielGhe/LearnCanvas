var canvas
  , context;

$(document).ready(function(){
	//caching variables
	canvas = $("#canvas");
	context = canvas.get(0).getContext("2d");

	function drawAll(){
		//reset
		context.fillStyle = "rgb(0,0,0)";
		context.strokeStyle = "rgb(0, 0, 0)";
		context.lineWidth = 1;


		//rectangles
		//(startx, starty, lengthx, lengthy)
		context.fillRect(0,0,50,50);		//draw rectangle and fill it
		context.strokeRect(52,0, 50, 50);	//draw rectangle, don't fill

		//Line
		//(x,y)
		context.beginPath();	//begin
		context.moveTo(0, 60);	//start position
		context.lineTo(50, 60);	//destination
		context.closePath();
		context.stroke();		//draw

		//arc
		//(startx, starty, radius, startAngle, endAngle, anticlockwise);
		context.beginPath();
		context.arc(77, 70, 10, 0, Math.PI*2, false);
		context.closePath();
		context.fill();

		//rect color
		context.fillStyle = "rgb(255, 0, 0)";
		context.fillRect(0,80, 50, 2);		//draw rectangle and fill it


		//line width + color
		context.lineWidth = 5;
		context.strokeStyle = "rgb(0, 0, 255)"	//blue
		context.beginPath();					//begin
		context.moveTo(0, 100);					//start position
		context.lineTo(50, 100);				//destination
		context.closePath();
		context.stroke();						//draw

		//text fill
		context.font = "italic 30px serif";
		context.fillText("stuff1", 0, 140);

		//text stroke
		context.strokeStyle = "rgb(0,0,0)";
		context.lineWidth = 1;
		context.strokeText("stuff2", 0, 170);
	}

	//draw
	$("#drawBtn").click(drawAll);

	//clear
	$("#clearBtn").click(function(){
		context.clearRect(0,0, canvas.width(), canvas.height());
	});
});