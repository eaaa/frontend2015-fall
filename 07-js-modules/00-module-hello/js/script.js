(function(){
	"use strict";

	function modal(){
      
      var init = function(){
        var buttons = document.querySelectorAll(".btn");
        
        for (var button of buttons) {
          button.onclick = open;  
        }
      }
      
      var open = function(e){
        var button = e.target;
        var modal = button.getAttribute("data-modal");
        document.getElementById(modal).classList.add("open");
      }
      
      return {
        init: init
      };
      
    }
    
    var modal = modal();
    modal.init();
  
})();

