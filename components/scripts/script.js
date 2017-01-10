// init ScrollMagic Controller
var controller = new ScrollMagic.Controller({
	globalSceneOptions: {
		triggerHook: "onLeave"
	}
});

// Scene Handler
var scene = new ScrollMagic.Scene({
	triggerElement: '#nav',
})
.setPin("#nav"); // the element we want to pin

controller.addScene([
  scene
]);

// owl carousel
$('.main-carousel').owlCarousel({
	animateOut: 'fadeOut',
    items:1,
    lazyLoad:true,
    loop:true,
  	autoplay: true,
  	nav:false,
});

// owl carousel images to the background
$('.main-carousel .item img').each(function() {
	var imgSrc = $(this).attr('data-src');
	$(this).parent().css({'background-image': 'url('+imgSrc+')'});
	$(this).remove();
});



var topoffset = 90;

var isTouch = 'ontouchstart' in document.documentElement;

//window height
var wheight = $(window).height(); //get height of the window

$('.fullheight').css('height', wheight);

$(window).resize(function() {
  var wheight = $(window).height(); //get height of the window
  $('.fullheight').css('height', wheight);
}) //on resize
