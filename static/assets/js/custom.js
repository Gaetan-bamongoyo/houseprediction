(function ($) {
	"use strict";

	// Payment Mathord
	$(function() {
		$('.choose-payment-mathord ul li').on('click', function() {
		  $('.choose-payment-mathord ul li').removeClass('active'); // Remove active class from all list items
		  if ($(this).hasClass('stripe')) {
			$('#StripePayment').show();
			$('#OfflinePayment').hide();
			$(this).addClass('active'); // Add active class to the clicked list item
		  }
		  else if ($(this).hasClass('paypal')) {
			$('#OfflinePayment').hide();
			$('#StripePayment').hide();
			$(this).addClass('active'); // Add active class to the clicked list item
		  }
		  else if ($(this).hasClass('offline')) {
			$('#OfflinePayment').show();
			$('#StripePayment').hide();
			$(this).addClass('active'); // Add active class to the clicked list item
		  }
		  else {
			$('#StripePayment').hide();
			$('#OfflinePayment').hide();
		  }
		});
	  });

	$(".header-cart-btn").on("click", function(e) {
		e.stopPropagation();
		$(".cart-menu").toggleClass("active");
	  });
	  $(document).on("click", function(e) {
		if (!$(e.target).closest(".cart-menu, .header-cart-btn").length) {
		  $(".cart-menu").removeClass("active");
		}
	  });

	//Cart Menu Quantity button toggle
	$(document).ready(function () {
		$(".qty-btn").on("click", function (e) {
		e.stopPropagation();
		// Toggle "active" class for the current quantity button and its related elements
		$(this).next(".quantity-area").toggleClass("active");

		// Remove "active" class from other quantity buttons and related elements
		$(".quantity-area")
			.not($(this).next(".quantity-area"))
			.removeClass("active");
		});
		$(document).on("click", function (e) {
		if (
			!$(e.target).closest(".quantity-area")
			.length
		) {
			// Remove "active" class from all quantity buttons and related elements
			$(".quantity-area").removeClass("active");
		}
		});
  	});
	
	// FancyBox Js
	$('[data-fancybox]').fancybox({
		buttons : [
		  'close'
		],
		wheel : false,
		transitionEffect: "slide",
		loop            : true,
		toolbar         : false,
		clickContent    : false
	  });
	// For Service Select
	$('.select-wrap').on('click', function(){
		$(this).addClass('selected').siblings().removeClass('selected');
	})
	// Preloader 
    jQuery(window).on('load', function() {
        $(".egns-preloader").delay(1600).fadeOut("slow");
    });
	$('.preloader-close-btn').on("click", function () {
        $('.egns-preloader').addClass('close');
    });
	// sidebar
	$('.sidebar-btn2').on("click", function () {
		$('.header-sidebar').addClass('slide');
	});
	$('.close-btn').on("click", function () {
		$('.header-sidebar').removeClass('slide');
	});

	jQuery('.dropdown-icon').on('click', function () {
		// alert()
		// $(this).next('.mob-submenu').slideToggle();
		jQuery(this).toggleClass('active').next('ul, .mega-menu').slideToggle();
		jQuery(this).parent().siblings().children('ul, .mega-menu').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});
	jQuery('.dropdown5').on('click', function () {
		// alert()
		// $(this).next('.mob-submenu').slideToggle();
		jQuery(this).toggleClass('active').next('.checkbox-container ul').slideToggle();
		jQuery(this).parent().siblings().children('.checkbox-container ul').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});

	// sticky header

	window.addEventListener('scroll', function () {
		const header = document.querySelector('header.header-area');
		header.classList.toggle("sticky", window.scrollY > 0);
	});

	// mobile-search-area

	$('.search-btn').on("click", function(){
		$('.search-bar').addClass('slide');
	});
	
	$('.close-btn').on("click", function(){
		$('.search-bar').removeClass('slide');
	});
	// Cart

	$('.cart-btn').on("click", function(){
		$('.cart-sidebar').addClass('slide');
	});
	
	$('.cart-close-btn').on("click", function(){
		$('.cart-sidebar').removeClass('slide');
	});

	$("#emailAdresss").on("click", function() {
		let emails= $(this).data('emails');
		let whatsapp= $(this).data('whatsapp');
		$("#emailAdresss a").replaceWith(`<a href="${emails}"><span><i class='bx bxl-whatsapp'></i>${whatsapp}</span></a>`);
	});
	$("#emailAdresss2").on("click", function() {
		let emails= $(this).data('emails');
		let whatsapp= $(this).data('whatsapp');
		$("#emailAdresss2 a").replaceWith(`<a href="${emails}"><span><i class='bx bxl-whatsapp'></i>${whatsapp}</span></a>`);
	});
	$("#cardnumber").on("click", function() {
		let card= $(this).data('card');
		$("#cardnumber .card-number-show").replaceWith(`<div class="card-number-show"><span class="title">${card}</span></div>`);
	});
	$("#cardnumber2").on("click", function() {
		let card= $(this).data('card');
		$("#cardnumber2 .card-number-show").replaceWith(`<div class="card-number-show"><span class="title">${card}</span></div>`);
	});
	//Counter up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	$('.sidebar-button').on("click",function () {
		$(this).toggleClass('active');
	});

	// Preloader
	jQuery(window).on('load', function () {
		$(".preloader").fadeOut("1000");
	});

	//Active menu
	const currentLocation = location.href;
	const menuItem = document.querySelectorAll('ul li a');
	const menuLength = menuItem.length;
	for (let i = 0; i < menuLength; i++) {
		if (menuItem[i].href === currentLocation) {
			menuItem[i].className = "active";
		}
	}

	//Video popup
	$('.video-popup').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// niceSelect
	$('select').niceSelect();

	jQuery(window).on('load', function () {
        new WOW().init();
        window.wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            offset: 100
        })
        window.wow.init();
    });

	
	// password-hide and show
	
	const togglePassword = document.querySelector('#togglePassword');

	const password = document.querySelector('#password');

	if(togglePassword){
	togglePassword.addEventListener('click', function (e) {
	// toggle the type attribute
	const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
	password.setAttribute('type', type);
	// toggle the eye / eye slash icon
	this.classList.toggle('bi-eye');
	});
	}

	
	// confirm-password
	const togglePassword2= document.getElementById('togglePassword2');

	const password2 = document.querySelector('#password2');

	if (togglePassword2){
	togglePassword2.addEventListener('click', function (e) {
	// toggle the type attribute
	const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
	password2.setAttribute('type', type);
	// toggle the eye / eye slash icon
	this.classList.toggle('bi-eye');
	});
	}
	
	// confirm-password
	const togglePassword3= document.getElementById('togglePassword3');

	const password3 = document.querySelector('#password3');

	if (togglePassword3){
	togglePassword3.addEventListener('click', function (e) {
	// toggle the type attribute
	const type = password3.getAttribute('type') === 'password' ? 'text' : 'password';
	password3.setAttribute('type', type);
	// toggle the eye / eye slash icon
	this.classList.toggle('bi-eye');
	});
	}

	//Dashboard Old Password* (M abid)
	const togglePassword4= document.getElementById('togglePassword4');

	const password4 = document.querySelector('#password4');

	if (togglePassword4){
	togglePassword4.addEventListener('click', function (e) {
	// toggle the type attribute
	const type = password4.getAttribute('type') === 'password' ? 'text' : 'password';
	password4.setAttribute('type', type);
	// toggle the eye / eye slash icon
	this.classList.toggle('bi-eye');
	});
	}
	//Dashboard New Password* (M abid)
	const togglePassword5= document.getElementById('togglePassword5');

	const password5 = document.querySelector('#password5');

	if (togglePassword5){
	togglePassword5.addEventListener('click', function (e) {
	// toggle the type attribute
	const type = password5.getAttribute('type') === 'password' ? 'text' : 'password';
	password5.setAttribute('type', type);
	// toggle the eye / eye slash icon
	this.classList.toggle('bi-eye');
	});
	}
	// Dashboard Confirm Password* (M abid)
	const togglePassword6= document.getElementById('togglePassword6');

	const password6 = document.querySelector('#password6');

	if (togglePassword6){
	togglePassword6.addEventListener('click', function (e) {
	// toggle the type attribute
	const type = password6.getAttribute('type') === 'password' ? 'text' : 'password';
	password6.setAttribute('type', type);
	// toggle the eye / eye slash icon
	this.classList.toggle('bi-eye');
	});
	}
	/* ---------------------------------------------
   Sliders
   --------------------------------------------- */
	// Home1 Banner slider
	var swiper = new Swiper(".home1-banner-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		effect: 'fade',             // Use the fade effect
		fadeEffect: {
		  crossFade: true           // Enable cross-fade transition
		},
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		pagination: {
			el: '.banner-swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: ".next-1",
			prevEl: ".prev-1",
		},
	});
	var swiper = new Swiper(".home2-banner-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		effect: 'fade',             // Use the fade effect
		fadeEffect: {
		  crossFade: true           // Enable cross-fade transition
		},
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		pagination: {
			el: '.banner2-swiper-pagination',
			clickable: true,
		},
	});
	// Home1 Category slider
	var swiper = new Swiper(".home1-category-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		loop: 'true',
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-1",
			prevEl: ".prev-1",
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 6
			},
		}
	});
	// category-1-slider
	$('#slick1').slick({
		rows: 2,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		slidesToShow: 6,
		slidesToScroll: 2,
		responsive: [{
			breakpoint: 1200,
			settings: {
				// arrows: false,
				slidesToShow: 5
			}
		}, {
			breakpoint: 991,
			settings: {
				arrows: false,
				slidesToShow: 4
			}
		}, {
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 3
			}
		}, {
			breakpoint: 576,
			settings: {
				arrows: false,
				slidesToShow: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 2
			}
		}, {
			breakpoint: 350,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}]
	});
	// category--slider
	$('#slick2').slick({
		rows: 3,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [{
			breakpoint: 1200,
			settings: {
				// arrows: false,
				slidesToShow: 2
			}
		}, {
			breakpoint: 991,
			settings: {
				arrows: false,
				slidesToShow: 3
			}
		}, {
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 3
			}
		}, {
			breakpoint: 576,
			settings: {
				arrows: false,
				slidesToShow: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 2
			}
		}, {
			breakpoint: 350,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}]
	});
	// category--slider
	$('#slick3').slick({
		rows: 2,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [{
			breakpoint: 1200,
			settings: {
				arrows: false,
				slidesToShow: 2
			}
		}, {
			breakpoint: 991,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}, {
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}, {
			breakpoint: 576,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}, {
			breakpoint: 350,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}]
	});
	// Product Slider
	const sliders = document.querySelectorAll('.product-img-slider');
	sliders.forEach((slider) => {
		const nextBtn = slider.parentElement.querySelector('.product-stand-next');
		const prevBtn = slider.parentElement.querySelector('.product-stand-prev');

		const swiper = new Swiper(slider, {
			slidesPerView: 1,
			speed: 1500,
			spaceBetween: 10,
			loop: true,
			autoplay: false,
			navigation: {
				nextEl: nextBtn,
				prevEl: prevBtn,
			},
		});
		nextBtn.addEventListener('click', () => {
			swiper.slideNext();
		});

		prevBtn.addEventListener('click', () => {
			swiper.slidePrev();
		});
	});




	// most-search-slider
	var swiper = new Swiper(".most-search-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-12",
			prevEl: ".prev-12",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	var swiper = new Swiper(".home3-featured-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-7",
			prevEl: ".prev-7",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	// most-search-slider
	var swiper = new Swiper(".home1-location-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-12",
			prevEl: ".prev-12",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	var swiper = new Swiper(".home1-team-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-13",
			prevEl: ".prev-13",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	var swiper = new Swiper(".home4-team-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-13",
			prevEl: ".prev-13",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3
			},
		}
	});

	// Upcoming Car
	var swiper = new Swiper(".dream-category-slider", {
		slidesPerView: 6,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-13",
			prevEl: ".prev-13",
		},
		pagination: {
			el: '.dream-pagination',
			clickable: true, // Allows clicking on pagination bullets to navigate
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 6
			},
		}
	});
	var swiper = new Swiper(".apartment-type-slider", {
		slidesPerView: 6,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-1",
			prevEl: ".prev-1",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 6
			},
		}
	});
	// Compare Car 
	var swiper = new Swiper(".upcoming-car-slider", {
		slidesPerView: 3,
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-2",
			prevEl: ".prev-2",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 3
			},
		}
	});
	// Our Brief History
	var swiper = new Swiper(".brief-history-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-13",
			prevEl: ".prev-13",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	// Customer Feedback
	var swiper = new Swiper(".customer-feedback-slider", {
		slidesPerView: 3,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-4",
			prevEl: ".prev-4",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 2,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 2
			},
		}
	});


	var swiper = new Swiper(".customer-feedback-slider2", {
		slidesPerView: 3,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-6",
			prevEl: ".prev-6",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 3
			},
		}
	});
	// News & Article
	var swiper = new Swiper(".news-slider", {
		slidesPerView: 3,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// disableOnInteraction: false,
		// },
		navigation: {
			nextEl: ".next-4",
			prevEl: ".prev-4",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 3
			},
		}
	});

	// most-search-slider
	var swiper = new Swiper(".home2-featured-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		slidesPerView: 1,
		centerSlides: true,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-1",
			prevEl: ".prev-1",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	// Recent Launch Slider
	var swiper = new Swiper(".recent-launch-car-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		slidesPerView: 1,
		centerSlides: true,
		loop: true,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-5",
			prevEl: ".prev-5",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	var swiper = new Swiper(".propertie-by-cites-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		slidesPerView: 1,
		centerSlides: true,
		loop: true,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-12",
			prevEl: ".prev-12",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 3
			},
		}
	});

	// Home2 Compare Slider
	var swiper = new Swiper(".home2-compare-slider", {
		slidesPerView: 1,
        speed: 1500,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        parallax: true,
        effect: 'fade',
        navigation: false,
        fadeEffect: {
            crossFade: true,
        },
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-7",
			prevEl: ".prev-7",
		},
	});

	// Home2 Compare Slider
	var swiper = new Swiper(".home3-banner-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		slidesPerView: 1,
		centerSlides: true,
		loop: true,
		effect: 'fade',
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-4",
			prevEl: ".prev-4",
		},
		pagination: {
			el: ".paginations111",
			clickable: true,
		},
	});

	// Recent Launch Slider
	var swiper = new Swiper(".brand-category-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		slidesPerView: 1,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-5",
			prevEl: ".prev-5",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	// Recent Launch Slider
	var swiper = new Swiper(".home3-about-img-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		slidesPerView: 1,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-6",
			prevEl: ".prev-6",
		},

	});

	//  Home3 Featured Car slider
	var swiper = new Swiper(".home3-featured-car-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		slidesPerView: 1,
		centerSlides: true,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-8",
			prevEl: ".prev-8",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	//  Home3 Featured Car slider
	var swiper = new Swiper(".testimonial-slider3", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 30,
		slidesPerView: 1,
		centerSlides: true,
		loop: true,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-10",
			prevEl: ".prev-10",
		},

	});
	//  Home4 categoty-filter-slider slider
	var swiper = new Swiper(".categoty-filter-slider", {
		slidesPerView: 3,
		speed: 1500,
		spaceBetween: 15,
		centerSlides: true,
		loop: false,
		navigation: {
			nextEl: ".next-10",
			prevEl: ".prev-10",
		},

	});

	// Latest Car Slider
	var swiper = new Swiper(".home4-latest-car-slider", {
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-11",
			prevEl: ".prev-11",
		},
		pagination: {
			el: ".pagination11",
			clickable: "true",
		  },

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 3
			},
		}
	});
	// Latest Car Slider
	var swiper = new Swiper(".home4-featured-car-slider", {
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-12",
			prevEl: ".prev-12",
		},
		pagination: {
			el: ".pagination12",
			clickable: "true",
		  },

		  breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 3
			},
		}
	});

	var swiper = new Swiper(".customer-feedback-slider4", {
		slidesPerView: 3,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-6",
			prevEl: ".prev-6",
		},
		pagination: {
			el: ".pagination8",
			clickable: "true",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 3
			},
		}
	});

	var swiper = new Swiper(".home5-fetured-slider", {
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-51",
			prevEl: ".prev-51",
		},
		pagination: {
			el: ".pagination8",
			clickable: "true",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 4
			},
		}
	});

	// Home5-Brand-Category Slides
	var swiper = new Swiper(".home5-brand-category-slider", {
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-52",
			prevEl: ".prev-52",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			420: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 6
			},
		}
	});
	// Home6-Brand-Category Slides
	var swiper = new Swiper(".home6-brand-category-slider", {
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-1",
			prevEl: ".prev-1",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			420: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 6
			},
		}
	});
	// Home6 top Used Car
	var swiper = new Swiper(".home6-top-use-car-slider", {
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-2",
			prevEl: ".prev-2",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			420: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 3
			},
		}
	});
	// Home6 top Used Car
	var swiper = new Swiper(".car-color-slider", {
		speed: 1500,
		spaceBetween: 40,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-2",
			prevEl: ".prev-2",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			420: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 2
			},
		}
	});
	// Product Details Slider
	var swiper = new Swiper(".product-details-slider", {
		speed: 1500,
		spaceBetween: 24,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-2",
			prevEl: ".prev-2",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			420: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	// Product Details Slider
	var swiper = new Swiper(".product-details-slider2", {
		speed: 1500,
		spaceBetween: 24,
		autoplay: {
			delay: 2000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-2",
			prevEl: ".prev-2",
		},

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			420: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	// Product Details Slider
	var swiper = new Swiper(".recent-post-sidebar-slider", {
		speed: 1500,
		spaceBetween: 24,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-51",
			prevEl: ".prev-51",
		},
	});
	// Category-pages-slider Slider

	const sliders2 = document.querySelectorAll('.category-pages-slider');
	sliders2.forEach((slider) => {
		const nextBtn = slider.parentElement.querySelector('.next-100');
		const prevBtn = slider.parentElement.querySelector('.prev-100');

		const swiper = new Swiper(slider, {
			speed: 1500,
			spaceBetween: 24,
			navigation: {
				nextEl: nextBtn,
				prevEl: prevBtn,
			},

			breakpoints: {
				280: {
					slidesPerView: 1,
				},
				420: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				576: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 3
				},
			}
		});
		nextBtn.addEventListener('click', () => {
			swiper.slideNext();
		});

		prevBtn.addEventListener('click', () => {
			swiper.slidePrev();
		});
	});
	// =======================================================================================
	// Shop Card 
	// =======================================================================================

	// Initialize the first child as active on page load
	$('.shop-big-img ul li:first-child').addClass('active');
	// Mouse enter event for shop-big-img div
	$('.shop-big-img').mouseenter(function () {
		// Remove active class from all li elements except the first child
		$('.shop-big-img ul li:not(:first-child)').removeClass('active');
	});
	// Mouse leave event for shop-big-img div
	$('.shop-big-img').on('mouseleave',function () {
		// Remove active class from all li elements except the first child
		$('.shop-big-img ul li:not(:first-child)').removeClass('active');
		// Add active class to the first child
		$('.shop-big-img ul li:first-child').addClass('active');
	});
	// Hover event for li elements
	$('.shop-big-img ul li').on( 'hover',function () {
		// Add active class to the current li and remove from siblings
		$(this).addClass('active').siblings().removeClass('active');
	});

	
	document.querySelector('.sidebar-button').addEventListener('click', () =>
	document.querySelector('.main-menu, .sidebar-menu').classList.toggle('show-menu'));

	$('.menu-close-btn').on("click", function() {
        $('.sidebar-menu').removeClass('show-menu');
    });
	// sidebar toggle area

	$('.sidebar-button').on("click", function(){
		$('.dashboard-sidebar-wrapper').toggleClass('slide');
		$('.dashboard-header').toggleClass('slide');
		$('.main-content').toggleClass('slide');
		$('.dashboard-footer').toggleClass('slide');   
	});
	
	// Range Slider
	$("#eg-range-slider").slider({
		range: true,
		min: 0,
		max: 3000,
		values: [ 200, 2000 ],
		slide: function( event, ui ) {
			$( ".from" ).val(ui.values[0] );
			$( ".to" ).val(ui.values[1] );
		}
	});
	
	
	$(".from").change(function () {
		var value = $(this).val();
		console.log(typeof(value));
		$("#eg-range-slider").slider("values", 0, value);
	});
	
	$(".to").change(function () {
		var value = $(this).val();
	   console.log(typeof(value));
		$("#eg-range-slider").slider("values", 1, value);
	});
	

// timer start
$("[data-countdown]").each(function () {
    var $deadline = new Date($(this).data("countdown")).getTime();
    var $dataDays = $(this).children("[data-days]");
    var $dataHours = $(this).children("[data-hours]");
    var $dataMinutes = $(this).children("[data-minutes]");
    var $dataSeconds = $(this).children("[data-seconds]");
    var x = setInterval(function () {
      var now = new Date().getTime();
      var t = $deadline - now;
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((t % (1000 * 60)) / 1000);
      $dataDays.html(`${days} <span>D</span>`);
      $dataHours.html(`${hours} <span>H</span>`);
      $dataMinutes.html(`${minutes} <span>M</span>`);
      $dataSeconds.html(`${seconds} <span>S</span>`);
      if (t <= 0) {
        clearInterval(x);
        $dataDays.html("00 <span>D</span>");
        $dataHours.html("00 <span>H</span>");
        $dataMinutes.html("00 <span>M</span>");
        $dataSeconds.html("00 <span>S</span>");
      }
    }, 1000);
  });


  $("#datepicker").datepicker({
    dateFormat: 'yy-mm-dd',
    timeFormat: 'HH:mm:ss',

  });
  $("#datepicker2").datepicker({
    dateFormat: 'yy-mm-dd',
    timeFormat: 'HH:mm:ss',

  });

   //Pricing Popup Checkout payment (abid)
   $(function() {
	$('.payment-options li').on('click', function() {
	  $('.payment-options li').removeClass('active'); // Remove active class from all list items
	  if ($(this).hasClass('paypal')) {
		$('#card-payment').hide();
		$(this).addClass('active'); // Add active class to the clicked list item
	  }
	  else if ($(this).hasClass('cash-on-delivery')) {
		$('#card-payment').hide();
		$(this).addClass('active'); // Add active class to the clicked list item
	  }
	  else if ($(this).hasClass('card-payment')) {
		$('#card-payment').show();
		$(this).addClass('active'); // Add active class to the clicked list item
	  }
	  else {
		$('#card-payment').hide();
	  }
	});
  });

  //Select wrap(abid M)
  $(".number-list li").on("click", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
  });

   //Quantity Increment (abid M)
   $(".quantity__minus").on("click", function (e) {
    e.preventDefault();
    var input = $(this).siblings(".quantity__input");
    var value = parseInt(input.val(),10);
    if (value > 1) {
      value--;
    }
    input.val(value.toString().padStart(2, "0"));
  });
  $(".quantity__plus").on("click", function (e) {
    e.preventDefault();
    var input = $(this).siblings(".quantity__input");
    var value = parseInt(input.val(),10);
    value++;
    input.val(value.toString().padStart(2, "0"));
  });

//   //dashboard payment invoice download button toggle (abid M)
$(".dot-icon").on("click", function (e) {
	let parent  = $(this).parent();

    parent.find(".download-btn").toggleClass("download");
    e.stopPropagation();
    // $(".download-btn").toggleClass("download");
  });

  //Subscription Bar (abid M)
  var skillPers = document.querySelectorAll(".subscription-bar-per");

  skillPers.forEach(function(skillPer) {
	var per = parseFloat(skillPer.getAttribute("data-per"));
	skillPer.style.width = per + "%";
	
	var animatedValue = 0; 
	var startTime = null;
	
	function animate(timestamp) {
		if (!startTime) startTime = timestamp;
		var progress = timestamp - startTime;
		var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)
		
		if (stepPercentage < 1) {
		animatedValue = per * stepPercentage;
		skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
		requestAnimationFrame(animate);
		} else {
		animatedValue = per;
		skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
		}
	}
	requestAnimationFrame(animate);
	});
}(jQuery));