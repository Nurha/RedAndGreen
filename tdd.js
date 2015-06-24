//declare assert function
var assert = {

			
			equals : function(nunu, results){

			var mySquare = new RedOrGreen("mySquare");//this will check if the square is red or green
				
				if(results === nunu){
					mySquare.makeGreen();
				}
				else{
				
				mySquare.makeRed();

			}
				
		}
	}
//test returns red else green.
 
var TestMyCode = {

	 run: function(name, test){
			this.name = name;
			test(assert);
			
		}

	};
	