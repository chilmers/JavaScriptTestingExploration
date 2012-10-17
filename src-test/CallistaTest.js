CallistaTest = TestCase("CallistaTest");

/**
 * Simple test case without mocikng or anything to test the say function
 * of the Callista prototype.
 */
CallistaTest.prototype.testCallistaSays = function() {
	var callista = new testapp.Callista();
	assertEquals('Callista says JsTestDriver FTW!', callista.say('JsTestDriver FTW!'));
};

/**
 * Test using jsMockito to mock away the calculator specified by the Callista prototype
 * and verify that the Callista calculatePrice function is sending correct parameters
 * to the calculator.
 */
CallistaTest.prototype.testCalculatePrice = function() {
	var MyPlusCalculator = function() {};
	MyPlusCalculator.prototype.multiply = function(a,b){
		result = 0;
		for (var i = 0; i<a; i++) {
			result += b;
		}
		return result;
	}
	var mockedCalculator = JsMockito.mock(new MyPlusCalculator());
    
	var callista = new testapp.Callista();
	callista.calculator = mockedCalculator;

	assertEquals(5000, callista.calculatePrice(5, 1000));
	JsMockito.verify(mockedCalculator).multiply(5, 1000);
}