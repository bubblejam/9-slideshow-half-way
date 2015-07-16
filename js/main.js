/*
wait for the page to be ready

create an array of images from the 'images' folder
loop through the images and add to the empty container on the page
fade the images in

watch for clicks on the slideshow nav
determine which bullet was clicked
animate the slides to the correct position
show active state of the slideshow

auto advance the slidesho
*/


$(document).ready(function(){
	
	var images = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg'];
	var imagePath = 'images/';

	$('<div class="slideshow-nav"></div>').insertAfter('.slideshow-container');
	// same as $('.slideshow-container').after('<div class="slideshow-nav"></div>');

	$.each(images, function(index, value){
		$('<img src="'+ imagePath + value +'" alt="slide">').appendTo('.slideshow-images');
		$('<a href="#"></a>').appendTo('.slideshow-nav');
		// same as $('.slideshow-nav').append('<a href="#"></a>');
	});

	$('.slideshow-images img').animate({
		opacity: '1'
	}, 3000);

	$('.slideshow-nav a').on('click', function(event){
		event.preventDefault();
		var currentItem = $(this).index();
		var imageWidth = $('.slideshow-images img').width();

		$('.slideshow-images').animate({
			'margin-left': -(currentItem * imageWidth)
		}, 500);

		$(this).addClass('is-active').siblings().removeClass('is-active');



	});

});












