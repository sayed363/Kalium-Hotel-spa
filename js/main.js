
$(document).ready(function(){
	$('#navbarNav a').smoothScroll({
		offset: -106, 		//set offset as per your need. Its custom.
		speed:1000,		//1000 milisecond means 1 second
	});
	
	// sticky navbar
	$("#sticker").sticky({
		topSpacing:0,
		zIndex:9
	
	});
	
	
	// masonry
	var $grid = $('.filter-img').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
    // use outer width of grid-sizer for columnWidth
		columnWidth: '1'
		}
	})
	
	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	
});





$(window).on("scroll", function() {
	if($(window).scrollTop()){
		$('nav').addClass('.black');
	}
	else
	{
		$('nav').removeClass('.black');		
	}
})