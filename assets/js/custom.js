(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
	});

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Animated scrolling / Scroll Up
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});

		/* ---------------------------------------------- /*
		 * Background image
		/* ---------------------------------------------- */

		$('#intro').backstretch([
			'assets/images/bg1.jpg',
			'assets/images/bg2.jpg',
			'assets/images/bg3.jpg'
		], {duration: 3000, fade: 750});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})

		var navbar = $('.navbar');
		var navHeight = navbar.height();

		$(window).scroll(function() {
			if($(this).scrollTop() >= navHeight) {
				navbar.addClass('navbar-color');
			}
			else {
				navbar.removeClass('navbar-color');
			}
		});

		if($(window).width() <= 767) {
			navbar.addClass('custom-collapse');
		}

		$(window).resize(function() {
			if($(this).width() <= 767) {
				navbar.addClass('custom-collapse');
			}
			else {
				navbar.removeClass('custom-collapse');
			}
		});

		/* ---------------------------------------------- /*
		 * Knob Animation
		/* ---------------------------------------------- */

		$(".custom-knob").knob({
			font: 'Montserrat',
			bgColor: '#C4C4C4',
			fgColor: '#2980b9',
			thickness: '0.05',
			readOnly: true,
			max: 20,
			min: 0,
			step: 1,
			value: 0,
			width: 150,
			height: 150
		});

		$('#skill').waypoint(function() {
			$('#skill .custom-knob').each(function() {
				counter = $(this).attr('data-count-to'),
				$(this).animate({ value: counter }, {
					duration: 1500,
					easing:'swing',
					progress: function() {
						$(this).val(Math.ceil(this.value)).trigger('change');
					}
				})
			});
		}, { offset: '70%', triggerOnce: true });

		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();

		/* ---------------------------------------------- /*
		 * Owl slider - (clients, testimonials)
		/* ---------------------------------------------- */

		$("#owl-testimonials").owlCarousel({
			items : 1,
			navigation: true,
			navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			slideSpeed : 300,
			paginationSpeed : 400,
			autoPlay: 5000,
			singleItem: true
		});

		$("#owl-clients").owlCarousel({
			items : 5,
			pagination: false,
			slideSpeed : 300,
			paginationSpeed : 400,
			autoPlay: 5000
		});

		/* ---------------------------------------------- /*
		 * Rotate
		/* ---------------------------------------------- */

		$(".rotate").textrotator({
			animation: "dissolve",
			separator: "|",
			speed: 3000
		});

		/* ---------------------------------------------- /*
		 * Portfolio pop up
		/* ---------------------------------------------- */

		$('#portfolio').magnificPopup({
			delegate: 'a.pop-up',
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				titleSrc: 'title',
				tError: 'Error cargando la imagen.'
			}
		});

		$('.video-pop-up').magnificPopup({
			type: 'iframe'
		});

		/* ---------------------------------------------- /*
		 * A jQuery plugin for fluid width video embeds
		/* ---------------------------------------------- */

		$(".video").fitVids();

		/* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};


        /* ---------------------------------------------- /*
         * Turn image to base64
        /* ---------------------------------------------- */
        var base64 = false, valid = true;
        function readImage(input) {
            var size = input.files[0].size;
            if(size > 5000000){return alert('El archivo debe ser menor de 5MG')}
            if ( input.files && input.files[0] ) {
                var FR= new FileReader();
                FR.onload = function(e) {
                    base64 = e.target.result;
                    valid = true;
                };
                FR.readAsDataURL( input.files[0] );
            }
        }

        $("#c_image").change(function(){
            readImage(this);
            valid = false;
        });
		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$("#contact-form").submit(function(e) {
			e.preventDefault();
            if(!valid){return console.log('uplading');}
			var c_name = $("#c_name").val();
			var c_email = $("#c_email").val();
			var c_message = $("#c_message ").val();
			var c_image = $("#c_image");
			var responseMessage = $('#contact-form .ajax-response');

			if (( c_name== "" || c_email == "" || c_message == "") || (!isValidEmailAddress(c_email) )) {
				responseMessage.fadeIn(500);
				responseMessage.html('<i class="fa fa-warning"></i> Por favor, diligenciar todos los campos');
			}
			else {
				$.ajax({
					type: "POST",
					url: "/mail",
					dataType: 'json',
					data: {
						c_email: c_email,
						c_name: c_name,
						c_message: c_message,
                        c_image: base64
					},
					beforeSend: function() {
						$('#contact-form button').empty();
						$('#contact-form button').append('<i class="fa fa-cog fa-spin"></i> Un momento...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
                            console.log(result);
							$('#contact-form .ajax-hidden').fadeOut(500);
							responseMessage.html(result.message).fadeIn(500);
						} else {
							$('#contact-form button').empty();
							$('#contact-form button').append('<i class="fa fa-retweet"></i> Intentar otra vez.');
							responseMessage.html(result.message).fadeIn(1000);
						}
					}
				});
			}

			return false;

		});

		/* ---------------------------------------------- /*
		 * Google Map
		/* ---------------------------------------------- */

		map = new GMaps({
			el: '#map',
			lat: 6.167376,
			lng: -75.585511,
			zoom: 18,
			scrollwheel: true,
			zoomControl : false,
			panControl : true,
			streetViewControl : true,
			mapTypeControl: false,
			overviewMapControl: false/*,
			styles: [{"featureType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}]*/
		});

		var image = new google.maps.MarkerImage('assets/images/map-icon.png',
			new google.maps.Size(60, 60),
			new google.maps.Point(0, 0),
			new google.maps.Point(26, 30)
		);

		map.addMarker({
			lat: 6.167376,
			lng: -75.585511,
			icon: image,
			title: 'renbert',
			infoWindow: {
				content: '<p><strong>renbert</strong><br/> Calle 38A Sur No 38-23</p>'
			}
		});

	});

})(jQuery);
