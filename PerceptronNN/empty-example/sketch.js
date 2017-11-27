// Single layer Perceptron neural network which classifying points above or below a line

var active = false;

var brain;
var points = [];
const NUMBER_OF_INPUTS = 3;
const LEARNIGN_RATE = 0.00001;
const NUMBER_OF_POINTS = 1000;
const MIN = -1;
const MAX = 1;

// p5 setup function
function setup() {
  createCanvas(WIDTH, HEIGHT);
  
  // Initialize the Neural network (Perceptron)
  brain = new Perceptron(NUMBER_OF_INPUTS, LEARNIGN_RATE);
  
  // Initialize the input with random coordinates
  for(var i = 0; i < NUMBER_OF_POINTS; i++) {
	var x = Math.random()* (MAX - MIN) + MIN;
	var y = Math.random()* (MAX - MIN) + MIN;
    points[i] = new Point(x, y);
  }
}
// p5 draw function
function draw() {
	background(255);
    
    // Display the function curve
    var p1 = new Point(-1, f(-1));
    var p2 = new Point(1, f(1));
    
    // Color line blue and make it 2 pixels wide
    stroke(0, 0, 255);
    strokeWeight(2);
    line(p1.pixelX(), p1.pixelY(), p2.pixelX(), p2.pixelY());
    
    // Return to default
    strokeWeight(1);
    
    // Display what the neural network "thinks" is the function curve
    var p3 = new Point(-1, brain.guessY(-1));
    var p4 = new Point(1, brain.guessY(1));
    
    stroke(255, 0, 255);
    line(p3.pixelX(), p3.pixelY(), p4.pixelX(), p4.pixelY());
    
    // Return to default
    stroke(0);
    
	// Display the points color coded by desired output
	for(let i = 0; i < NUMBER_OF_POINTS; i++) {
		points[i].show();
	}
  
	// Display the points color coded by guessed output
	for(let i = 0; i < NUMBER_OF_POINTS; i++) {
		var inputs = [points[i].x, points[i].y, points[i].bias];
		var target = points[i].label;
		
		var guess = brain.guess(inputs);
		
		if(guess == target)
			fill(0, 255, 0);
		else
			fill(255, 0, 0);
		
		ellipse(points[i].pixelX(), points[i].pixelY(), 8, 8);
	}
    if(active){
        // For each data point adjust the weights by training the neural network
        for(let i = 0; i < NUMBER_OF_POINTS; i++) {
            var inputs = [points[i].x, points[i].y, points[i].bias];
            var target = points[i].label;
            brain.train(inputs, target);
        }
    }
}
// p5 mousePressed function
function touchStarted(){
    active = !active;
} 