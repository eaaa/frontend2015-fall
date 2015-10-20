(function(){
	"use strict";

	function modal(){
      
      var cover = null,
          modalOpenButtons = null,
          modalCloseButtons = null,
          openModalWindow = null;
      
      var init = function(){
        cover = document.querySelector(".cover"),
        modalOpenButtons = document.querySelectorAll(".modal-btn-open"),
        modalCloseButtons = document.querySelectorAll(".modal-btn-close");
                
        for (var modalOpenButton of modalOpenButtons){
          modalOpenButton.addEventListener("click", openModal);
        }

        for (var modalCloseButton of modalCloseButtons){
          modalCloseButton.addEventListener("click", closeModal);
        }
        
       // cover.onclick = closeModal;
      
      }
      
      var openModal = function(e){
        e.preventDefault();
        var modalButton = e.target;
        var modalTarget = modalButton.getAttribute("href");
        openModalWindow = document.querySelector(modalTarget);
        cover.classList.add("open");
        openModalWindow.classList.add("show");
      }
      

      var closeModal = function(){
        openModalWindow.classList.remove("show");
        cover.classList.remove("open");
      }
      
      return {
        init: init
      }
    }
  
    var modal = modal();
    modal.init();

})();

