testapp.Callista = function() {};

testapp.Callista.prototype.calculator = new testapp.Calculator();

testapp.Callista.prototype.say = function(what) {
	return "Callista says " + what;
};

testapp.Callista.prototype.calculatePrice = function(hours, hourlyRate) {
	return this.calculator.multiply(hours, hourlyRate);
};