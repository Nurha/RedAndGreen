
var assert = { 
	
	passed : false,

	equals : function(message, result, newMessage){
				if(message === result){ 
					this.passed = true;
				}
				else {
					this.passed = false;

				}
				
			}
		}
//progressResults : function(){

 
var TestMyCode = {
	runCount : 0,
	testPassedCount : 0,
	
	  run: function(name, assertTest){ 
			this.runCount = this.runCount + 1;

var newDiv = document.createElement("div");
			newDiv.id = "newDiv"+this.runCount;
			newDiv.style.height = "300px";
			newDiv.style.width = "300px";
			newDiv.style.border = "3px solid black";
			newDiv.style.display = "inline-block";

			document.body.appendChild(newDiv)


var rg = new RedOrGreen(newDiv.id);
	this.name = name;
	assertTest(assert);

	if(assert.passed){
		newDiv.innerHTML = name;
		rg.makeGreen();
		this.testPassedCount = this.testPassedCount + 1;
	}
	else {
		rg.makeRed();
		newDiv.innerHTML = name;
	}
	document.getElementById("testResults").innerHTML= " Number of test passed : " + this.testPassedCount + " out of " + this.runCount;
	document.body.appendChild(testResults);
	}
}
	