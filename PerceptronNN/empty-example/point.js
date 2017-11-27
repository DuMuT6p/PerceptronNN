const WIDTH = 1024;
const HEIGHT = 768;
const LINE_A = 0.3;
const LINE_B = 0.2;

function f(x){
    return LINE_A * x + LINE_B;
}

// Point class
function Point(){
	let x;
	let y;
    let bias = 1;
	let label;
}

function Point(_x, _y){
	this.x = _x;
	this.y = _y;
    this.bias = 1;
	
	let lineY = f(this.x);	
  
	if
		(this.y > lineY)
		this.label = 1;
	else
		this.label = -1;		
}

Point.prototype = {
	pixelX:function(){
		return map(this.x, -1, 1, 0, WIDTH);
	},
	
	pixelY:function(){
		return map(this.y, -1, 1, HEIGHT, 0);
	},
	
	show:function(){
		if (this.label == 1) 
			fill(255, 255, 255);
		else
			fill(0, 0, 0);
		ellipse(this.pixelX(), this.pixelY(), 16, 16);
	}
}