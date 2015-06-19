function RedOrGreen(mySquare){
	
	 this.makeRed = function(){
		document.getElementById("mySquare").style.backgroundColor = 'red';
	};

	this.makeGreen = function(){
		document.getElementById("mySquare").style.backgroundColor = 'green';
	};

} 