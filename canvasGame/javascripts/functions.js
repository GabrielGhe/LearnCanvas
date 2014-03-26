var map;
var canvas;
var context;

function MapRender(canvas, context, map){
	this.cvs = canvas;
	this.ctx = context;
	this.map = map;
	this.tileSize = 5;

	this.drawTile = function(x, y, color){
		var setColor = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
		console.log(setColor);		
		this.ctx.fillStyle = setColor;
		this.ctx.fillRect(
			x * this.tileSize,
			y * this.tileSize,
			this.tileSize,
			this.tileSize
		);
	};

	this.draw = function(){
		for(var i = 0; i != this.map.length; i++){
			for(var j = 0; j != this.map[0].length; j++){
				this.drawTile(i,j, this.map[i][j]);
			}
		}
	};
}

$(document).ready(function(){
	canvas = $("#canvas");
	context = canvas.get(0).getContext("2d");
	map = [];

	
	var len = 100;
	for(var i = 0; i != len; i++){
		subMap = [];
		for(var j = 0; j != len; j++){
			var r = Math.round( Math.random() * 254 );
			var g = Math.round( Math.random() * 254 );
			var b = Math.round( Math.random() * 254 );
			subMap.push({r:r, g:g, b:b});
		}
		map.push(subMap);
	}

	/*
	var map = [
	  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	  [1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	  [1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	  [1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
	  [1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1],
	  [1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
	  [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	  [1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
	  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
	  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	];
	*/

	var myMap = new MapRender(canvas, context, map);
	myMap.draw();
});