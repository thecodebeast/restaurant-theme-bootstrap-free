$(document).ready(function () {
	
    // Slider Slideshow Home Page
    window_height = $(window).height();
	$("#slider").css('height', window_height)
    var mySlider = $('.pogoSlider').pogoSlider({
    	displayProgess: false,
    	pauseOnHover: false,
    }).data('plugin_pogoSlider');


    // Animation Library
    AOS.init();

    //Carousels
    $(".basic-carousel").owlCarousel();

    // Isotope
    // init Isotope
	var $grid = $('.grid').isotope({
	  // options
	});
	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	   AOS.init();
	});

   

   



});