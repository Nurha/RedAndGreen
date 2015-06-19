//declare assert function
var assert = {

			
			equals : function(message, results){

			var mySquare = new RedOrGreen("mySquare");
				
				if(results === message){
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
	