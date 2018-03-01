$(function(){
  //AOS plugin for menus fade-up
  AOS.init({
    duration: 1400,
  })

  //smooth scroll from header mouse to About Us menu
  $('a').on('click', function (event){
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 3000, function(){
        window.location.hash = hash;
      });
    }
  });

  //animated frame on scrolling
  $(window).scroll(function(){
    //detect if the element is scrolled into view
    function elementScrolled(elem){        
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }  

    if(elementScrolled('.about-us-title')){
      $('.about-us-menu').addClass('top-lines');
      $('.about-us-frame-vertical').addClass('vertical-lines');
      $('.about-us-frame-bottom').addClass('bottom-line');    
    }

    if(elementScrolled('.services-title')){
      $('.services-menu').addClass('top-lines-white');
      $('.services-frame-vertical').addClass('vertical-lines-white');
      $('.services-frame-bottom').addClass('bottom-line-white');    
    } 

    if(elementScrolled('.do-title')){
      $('.do-menu').addClass('top-lines');
      $('.do-frame-vertical').addClass('vertical-lines');
      $('.do-frame-bottom').addClass('bottom-line');    
    } 

    if(elementScrolled('.contact-us-title')){
      $('.contact-us-menu').addClass('top-lines');
      $('.contact-us-frame-vertical').addClass('vertical-lines');
      $('.contact-us-frame-bottom').addClass('bottom-line');  
    }  
  });  
});