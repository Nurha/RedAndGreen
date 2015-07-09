//tests your functions
TestMyCode.run("testing hello world function", function(assert){     
    var result = hello_world(); 
    // is the result as we expected?
    assert.equals("Hello world!", result, "testing hello world function");
});
TestMyCode.run("testing hello Earth function", function(assert){ 
    var result = helloEarth(); 
    // is the result as we expected?
    assert.equals("Hello Earth!", result, "testing hello Earth function");
});
TestMyCode.run("testing subtract function",function(assert){
	var result = subtract(146,35);
	assert.equals(111, result, "testing subtract function")
});
