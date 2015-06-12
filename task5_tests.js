(function () {
	setBackgroundColor('mySquare','green');

	if(document.getElementById('mySquare').style.backgroundColor === 'green'){
		window.alert('failure');
	} 
		else {
		window.alert('success');
	}

	setBackgroundColor('mySquare','red');

	if(document.getElementById('mySquare').style.backgroundColor === 'red'){
		window.alert('success');
	} 
		else {
		window.alert('failure');
	}
})();
	
