$( document ).ready(function() {

	AOS.init();

	$(".animsition").animsition({
	  inClass               :   'fade-in-left',
	  outClass              :   'fade-out-left-lg',
	  inDuration            :    1500,
	  outDuration           :    800,
	  linkElement           :   '.animsition-link',
	  // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
	  loading               :    false,
	  loadingParentElement  :   'body', //animsition wrapper element
	  loadingClass          :   'animsition-loading',
	  unSupportCss          : [     ],
	  //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	  //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	  overlay               :   false,
	  overlayClass          :   'animsition-overlay-slide',
	  overlayParentElement  :   'body'
	});

	//menu

    $(".menu__button").click(function(){
		$(this).addClass("menu__button_open");
		$(".menu-block").addClass("menu-block_open");
		$(".menu-overlay").addClass("menu-overlay_open");
	});

	$(document).click(function(e) {
		if($(".menu-overlay").hasClass("menu-overlay_open") && !$(".menu__button").is(e.target)){
			if(!$(".menu-overlay_open").is(e.target)) {
				$(".menu__button").toggleClass("menu__button_open");
				$(".menu-block").toggleClass("menu-block_open");
				$(".menu-overlay").toggleClass("menu-overlay_open");	
			}
		}
		
	});

	//modal

	$(".orders-block__button").click(function() {
		$(".modal-order").addClass("modal-order__open");
		$('html, body').animate({
			scrollTop: $(".modal-order").offset().top
		});
	});

	$(".modal-order__clouse").click(function() {
		$(".modal-order").toggleClass("modal-order__open");
	});

	$(document).click(function(e) {
		if($(".modal-order").hasClass("modal-order__open") && !$(".orders-block__button").is(e.target)) {
			if(!$(".modal-order").find('*').is(e.target) && !$(".modal-order").is(e.target)) {
				$(".modal-order").toggleClass("modal-order__open");
			}
			
		}
		
	});


});