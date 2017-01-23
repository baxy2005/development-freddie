
$(document).ready(function(){


$("#loader").fadeOut("slow");
	var speedOpacity = 2000;
	$('body').animate({
		opacity: 1
	}, speedOpacity, function() {});


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

//cards hover effect

	$('#thumnail-one').hover(function () {
	  $('#thumnail-two .overlay, #thumnail-three .overlay').toggleClass('overlay-show')
		$('#thumnail-two, #thumnail-three').toggleClass('thumbnail--border-fade')
	});

	$('#thumnail-two').hover(function () {
		$('#thumnail-one .overlay, #thumnail-three .overlay').toggleClass('overlay-show')
		$('#thumnail-one, #thumnail-three').toggleClass('thumbnail--border-fade')
	});

	$('#thumnail-three').hover(function () {
		$('#thumnail-one .overlay, #thumnail-two .overlay').toggleClass('overlay-show')
		$('#thumnail-one, #thumnail-two').toggleClass('thumbnail--border-fade')
	});

// hamburger icon
$('.navbar-toggle').click(function () {
	$(this).toggleClass('active')
});

// function tabsInter () {
//
// if ($(document).width() > 768) {
// 	$('.facebook-tab .responsive-tabs-container').remove();
// 	$('.responsive-tabs li:nth-of-type(2)').after('<li><a href="#profile5">hello</a></li>')
// 	$('.tab-content .tab-pane:nth-of-type(2)').after('<div class="tab-pane" id="profile5"> adsfd</div>')
// 	$('.tab-content .tab-pane:nth-of-type(3)').before('<a href="#profile5" class="accordion-link">hello</a>')
// }
//
//
// $('.responsive-tabs li:nth-of-type(3)').click(function() {
// 	$(this).addClass('active')
// 	$('.responsive-tabs li:nth-of-type(2), .responsive-tabs li:nth-of-type(1)').removeClass('active')
// 	$('.tab-content .tab-pane:nth-of-type(3)').addClass('active')
// 	$('.tab-content .tab-pane:nth-of-type(2), .tab-content .tab-pane:nth-of-type(1)').removeClass('active')
// });
// 	$('.responsive-tabs li:nth-of-type(2), .responsive-tabs li:nth-of-type(1)').click(function(){
// 	$('.tab-content .tab-pane:nth-of-type(3)').removeClass('active')
//
// });
//
// }
// tabsInter ();
// 	// tabs integration on mobile screen
//
//
// 	$(window).resize(function() {
// });
//
//
// $(window).trigger('resize');


	});
