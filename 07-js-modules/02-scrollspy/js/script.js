(function(){
	"use strict";

	function scrollSpy(){
      
      var targets = [],
          links = [],
          currentLink = {},
          currentTarget = {},
          currentLinkIndex = 0;
      
      var init = function(config){
        var _config = config;
        targets = document.querySelectorAll(_config.targets);
        links = document.querySelectorAll(_config.links);
        
        for(var target of targets){
          var targetTop = target.offsetTop;
          var targetBottom = targetTop + target.offsetHeight
          target.setAttribute("data-top", targetTop);
          target.setAttribute("data-bottom", targetBottom);
        }
        
        setActiveLink();
        window.addEventListener("scroll", windowScroll);
      }
      
      var setActiveLink = function(){
        currentTarget = targets[currentLinkIndex];
        currentLink = links[currentLinkIndex];
        currentLink.classList.add("active"); 
      }
      
      var resetActiveLink = function(){
        currentLink.classList.remove("active"); 
      }
      
      var windowScroll = function(e){
         if(e.pageY >= (currentTarget.getAttribute("data-bottom"))){
           resetActiveLink();
           currentLinkIndex++;
           setActiveLink();
         }
        else if(e.pageY < (currentTarget.getAttribute("data-top"))){
           resetActiveLink();
           currentLinkIndex--;
           setActiveLink();
        }
      }
      
      return {
        init: init
      }
    }
  
    scrollSpy().init({
      targets: ".panel",
      links: ".panel-link"
    });

})();

