(function($){
  "use strict";
  
  $("#sendForm").on("submit", function(e){
    e.preventDefault();
    
    var data = $(this).serializeArray();
    
    $.post("/register", data, function(response){
      console.log(response);
    });
    
  });
  
})(jQuery);