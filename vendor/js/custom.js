$(document).ready(function(){
	
	var preloader = document.getElementById("loading");
	 function myFunction(){
		 preloader.style.display = 'none';
	 }
	
	
	// Mobile Menus JS
	// Mobile Menus JS
	
	$('#togglebar').click(function(){
		$('.menu ul').slideToggle()
	});
	$('#togglebar').on('click', function () {
		$(this).toggleClass('active');
	});
	
	  // ScrollIt js
     // ScrollIt js
	 
	  $.scrollIt({
	  upKey: 38,             // key code to navigate to the next section
	  downKey: 40,           // key code to navigate to the previous section
	  easing: 'linear',      // the easing function for animation
	  scrollTime: 600,       // how long (in ms) the animation takes
	  activeClass: 'active', // class given to the active nav element
	  onPageChange: null,    // function(pageIndex) that is called when page is changed
	}); 
  
	
	 // One page nav
	// One page nav
	
	  $('#kajkorvai').onePageNav({
		currentClass: 'active2',
		changeHash: false,
		scrollSpeed: 1500,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing'
		
	});	

	
	
	
	
	 // wow js
	 // wow js
	 
	 new WOW().init();
	 
	 
	 
	// mixitup js
	// mixitup js
	
	  var option= {
		     animation: {
             enable: true,
			 effects: 'rotateY(-25deg)'   
          } 
		  }
		 
		var mixer = mixitup('.all-filter-portfolio',option);


     // owl carousel portfolio
	 // owl carousel portfolio
	 
	  $('.all-client').owlCarousel({		  
			 loop:true,
			 autoplay:true,
			 autoplayTimeout:2000,
			 responsive:{
			0:{
				items:1
			},
			767:{
				items:1
			}
		    }
				 
	 });
	 
	 
    // counter js
   // counter js
  
    $('.counter').counterUp({
		    delay:10,
			time:1000
		 });
	
	
		
		
	// Disabled right click 	
	// Disabled right click

     document.addEventListener("contextmenu",function(alamin){
		alamin.preventDefault();
	})
    

 
  
     
	
});