
	var rg = new RedOrGreen("myElement");
	 
	 rg.makeGreen();
	 if(document.getElementById('myElement').style.backgroundColor === 'green'){
		window.alert('failure');
	} 
		else {
		window.alert('success');
	}

	 rg.makeRed();
	if(document.getElementById('myElement').style.backgroundColor === 'red'){
		window.alert('success');
	} 
		else {
		window.alert('failure');
	}