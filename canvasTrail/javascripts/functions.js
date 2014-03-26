var x = 100;
var y = 100;
var radius = 50;
var anticlockwise = false;
var startV = 45;
var endV = 50;
var startAngle = (Math.PI / 180) * startV;
var endAngle   = (Math.PI / 180) * endV;
var timer;

$(document).ready(function(){
	var canvas = $("#canvas");
	context = canvas.get(0).getContext("2d");
	context.lineWidth = 2;
	context.fillStyle = "rgba(0,0,0,0.1)";
	context.strokeStyle = "rgb(255,255,255)";

	//draw
	function draw(){
		context.fillRect(0,0, canvas.width(), canvas.height());
		context.beginPath();
		context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
		context.stroke();
		context.closePath();
	}

	//update
	function update(){
		startV = (startV + 2) % 360;
		endV = (endV + 2) % 360;
		startAngle = (Math.PI / 180) * startV;
		endAngle   = (Math.PI / 180) * endV;
	}

	/*---------------------------------
	-----------Update Event------------
	---------------------------------*/
	timer = $.timer(function(){
		update();
		draw();
	}, 1000/60, true);

	//click anywhere to shoot
	canvas.bind("mousemove", function(e){
		if(event.offsetX!==undefined){
			x = event.offsetX;
			y = event.offsetY;
        }
	});
});