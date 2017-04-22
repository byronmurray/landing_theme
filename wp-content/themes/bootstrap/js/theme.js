jQuery.noConflict();
(function( $ ) {
  $(function() {



      	$('img').removeAttr('width').removeAttr('height');

		$('#pagepiling').pagepiling({
			menu: null,
		});
			
		});

	    var windowHeight = $( window ).height();
		
		$("#map").css("height", windowHeight + 'px');




		/*$('#pagepiling').pagepiling({
		    menu: null,
	        direction: 'vertical',

	        sectionsColor: [],
	        anchors: [],
	        scrollingSpeed: 700,
	        easing: 'swing',
	        loopBottom: false,
	        loopTop: false,
	        css3: true,
	        navigation: {
	            'textColor': '#000',
	            'bulletsColor': '#000',
	            'position': 'right',
	            'tooltips': ['section1', 'section2', 'section3', 'section4']
	        },
	       	normalScrollElements: null,
	        normalScrollElementTouchThreshold: 5,
	        touchSensitivity: 5,
	        keyboardScrolling: true,
	        sectionSelector: '.section',
	        animateAnchor: false,

			//events
			onLeave: function(index, nextIndex, direction){},
			afterLoad: function(anchorLink, index){},
			afterRender: function(){},
		});

*/




  	

	/*styles to min height for home page*/
	/*var windowHeight = $( window ).height();
	
	$("#main-hero").css("height", windowHeight + 'px');
	$("#welcome").css("min-height", windowHeight + 'px');

	$(window).scroll(function(){ 

		var a = 112;
		var pos = $(window).scrollTop();
		if(pos > a) {
		    $(".navbar-fixed-top").addClass('scroll-nav')
		}
		else {
		    $(".navbar-fixed-top").removeClass('scroll-nav')
		}
	});

	$(window).scroll(function(){ 

		var b = $( window ).height();;
		var posA = $(window).scrollTop();
		if(posA > b) {
		    $(".brand-name").slideUp('slow');
		}
		else {
		    $(".brand-name").slideDown('slow');
		}
	});


	$('.hide-menu').hide();

	$('#show-menu').on('click', function(){
		/*$('.hide-menu').toggleClass('show-menu');*/
		/*$('.hide-menu').slideToggle();*/




	


	
	

})(jQuery);

