
 function RedOrGreen(myElement){
	
	 this.makeRed = function(){
		document.getElementById(myElement).style.backgroundColor = 'red';
	};

	this.makeGreen = function(){
		document.getElementById(myElement).style.backgroundColor = 'green';
	};


}
