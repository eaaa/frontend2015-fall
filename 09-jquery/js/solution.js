(function($){
  "use strict";
  
  $(".move").on("click", function(){
    var div = $("div");
    if(div.offset().top !== 100){
      var topPos = "100px";
    }
    else{
      var topPos = "+200px";
    }
    div.animate({
      top: topPos
    }, 1000);
  });
  
  $(".color").on("click", function(){
    $("div").addClass("colored");
  });
  
    
  
})(jQuery);

