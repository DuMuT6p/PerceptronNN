// Neuron class

// Constructor
function Perceptron(n, _learning_rate){
	this.weights = [];
	this.learning_rate = _learning_rate;
	
	// Initialize the weights with small random numbers
	for (i = 0; i < n; i++) {
		this.weights[i] = Math.random();
	}
}

Perceptron.prototype = {
	guess:function(inputs){
		let sum = 0;
		
		for (let i = 0; i < inputs.length; i++) {
			sum += this.weights[i]*inputs[i];
		}
        
		// Activation function
		return Math.sign(sum);
	},
	
    guessY:function(x){
        // "Guess" a single parameter value based on current weights
        let y = - (this.weights[2] / this.weights[1]) - (this.weights[0] / this.weights[1]) * x;        
		return y;
	},
    
	train:function(inputs, target){
        
        // Cost function
		let guess = this.guess(inputs);        
		let error = target - guess;
		
        // Adjust weights based on delta rule / backpropagation (derived by using Gradient descent to minimize the cost function)
		for (let i = 0; i < inputs.length; i++) {
			this.weights[i] += inputs[i]*error*this.learning_rate; 
		}
	}
}