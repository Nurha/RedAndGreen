
	var rg = new RedOrGreen("myElement");
	 
	 rg.makeGreen("myElement");
	 if(document.getElementById('myElement').style.backgroundColor === 'green'){
		window.alert('background is green');
	} 
		else {
		window.alert('failure');
	}

	 rg.makeRed("myElement");
	if(document.getElementById('myElement').style.backgroundColor === 'red'){
		window.alert('background is red');
	} 
		else {
		window.alert('failure');
	}