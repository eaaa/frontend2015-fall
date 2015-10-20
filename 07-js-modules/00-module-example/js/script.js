(function(){
	"use strict";

	function exampleModule(){
       
      var privateVariable = 42;
      
      var privateMethod = function(){
        return privateVariable; 
      }
      
      return {
        publicMethod: privateMethod
      };
      
    }
    
    var example = exampleModule();

    console.log(example);
  
})();

