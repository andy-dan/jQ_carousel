$(function(){
	var carouselList = $("#carousel ul");
    
    setInterval(changeSlide, 3000); //every 3 seconds, it performs a function to change the slide, z tego biorę pierwszy parametr jego nazwa posłuży do stworzenia f-cji uruchamianej co 3sek.
    
   function changeSlide(){
       carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
       
       function moveFirstSlide() {
        
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
   } 
    
        
    }
   
});