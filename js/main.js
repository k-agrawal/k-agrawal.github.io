/** 
 * ===================================================================
 * Main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

	/* --------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {
      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      }); 
  	})


  	/* --------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('input, textarea, select').placeholder()  


  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */  
  	setTimeout(function() {

   	$('.main-content h1').fitText(.8, { minFontSize: '42px', maxFontSize: '94px' });

  	}, 100);


  	/* --------------------------------------------------- */
	/* lettering js
	------------------------------------------------------ */
	$(".kern-this").lettering(); 


	/* --------------------------------------------------- */
  	/* Menu
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('#menu-nav-wrap'),
       mainContent = $('#main-404-content'),
	   mainHeader = $('.main-header'),
	   quotes = ['"The average fuel cost across all vehicles is 14.45 cents per mile, or about 23 miles per gallon."',
	   '"The best selling car of all-time is the Toyota Corolla"', '"Ferrari manufactures a maximum of 14 cars a day"',
	   '"The most commonly stolen vehicle is the Honda Accord"', '"The first cars did not have steering wheels. They were operated by a lever"',
	   '"It takes half an ounce of gas to start a car"', '"The U.S. consumes about half of the world’s gasoline"',
	   '"Adolf Hitler ordered Ferdinand Porsche to manufacture a Volkswagen, which literally means "People Car" in German. This car went on to become the Volkswagen Beetle."',
	   '"The first speeding ticket was issued in 1896. The speed? A whopping 8 MPH."',
	   '"Electric cars aren’t as new as you might think. In 1900, 38% of all cars were electric."','"Carl Benz developed the first automobile in 1885. The speed of the car was 16km per hour."',
'"About 75% of the cars that Rolls Royce has ever produced are still on the road."'
	];
	   function newquote()
	   {
		   var randomNumber = Math.floor(Math.random() * (quotes.length));
		   document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber]
	   }

	// open-close menu by clicking on the menu icon
	toggleButton.on('click', function(e){

		e.preventDefault();
		
		toggleButton.toggleClass('is-clicked');
		
		nav.toggleClass('menu-is-open');
		
		mainHeader.toggleClass('menu-is-open');
		mainContent.toggleClass('menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, 
			// so we need to wait for the end of the trasition to give the body an overflow hidden
			newquote()
			$('body').toggleClass('overflow-hidden');
		});
			
		// check if transitions are not supported 
		if($('html').hasClass('no-csstransitions')) {
			$('body').toggleClass('overflow-hidden');
		}

	});

	// close menu clicking outside the menu itself
	mainContent.on('click', function(e){

		if( !$(e.target).is('.menu-toggle, .menu-toggle span') ) {

			toggleButton.removeClass('is-clicked');
			nav.removeClass('menu-is-open');
			mainHeader.removeClass('menu-is-open');
			mainContent.removeClass('menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			
			// check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
			}

		}
	});


   /* --------------------------------------------------- */
	/*  Vegas Slideshow
	------------------------------------------------------ */
	$(".main-content-slides").vegas({
		transition: 'fade',
		transitionDuration: 2500,
		delay: 5000,
    	slides: [
       	{ src: "images/slides/woods.jpg" },
        	{ src: "images/slides/greens.jpg" },
        	{ src: "images/slides/dandelion.jpg" }
    	]
	});


   /* --------------------------------------------------- */
	/*  Particle JS
	------------------------------------------------------ */
	$('.main-content-particle-js').particleground({
	    dotColor: '#fff',
	    lineColor: '#555555',
	    particleRadius: 6,
	    curveLines: true,
	    density: 9000,
	    proximity: 100
	});  	
 
  /* ------------------------------------------------------ 
	 Image Slideshow 
   ------------------------------------------------------ */
var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 0;
showSlides(slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 0;
showSlides(slideshow2);

function showSlides(slideshow) {
	
var i;
  var slides = slideshow.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideshow.currentSlideIndex++;
  if (slideshow.currentSlideIndex > slides.length) {slideshow.currentSlideIndex = 1}
  slides[slideshow.currentSlideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000, slideshow); // Change image every 2 seconds

}

})(jQuery);
