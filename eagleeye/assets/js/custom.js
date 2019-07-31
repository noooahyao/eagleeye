$(document).ready(function() {

	/*-----------------------------------/
	/*	TOP NAVIGATION AND LAYOUT
	/*----------------------------------*/

	$('.btn-toggle-fullwidth').on('click', function() {
		if(!$('body').hasClass('layout-fullwidth')) {
			$('body').addClass('layout-fullwidth');

		} else {
			$('body').removeClass('layout-fullwidth');
			$('body').removeClass('layout-default'); // also remove default behaviour if set
		}

		$(this).find('.lnr').toggleClass('lnr-arrow-left-circle lnr-arrow-right-circle');

		if($(window).innerWidth() < 1025) {
			if(!$('body').hasClass('offcanvas-active')) {
				$('body').addClass('offcanvas-active');
			} else {
				$('body').removeClass('offcanvas-active');
			}
		}
	});

	$(window).on('load', function() {
		if($(window).innerWidth() < 1025) {
			$('.btn-toggle-fullwidth').find('.icon-arrows')
			.removeClass('icon-arrows-move-left')
			.addClass('icon-arrows-move-right');
		}

		// adjust right sidebar top position
		$('.right-sidebar').css('top', $('.navbar').innerHeight());

		// if page has content-menu, set top padding of main-content
		if($('.has-content-menu').length > 0) {
			$('.navbar + .main-content').css('padding-top', $('.navbar').innerHeight());
		}

		// for shorter main content
		if($('.main').height() < $('#sidebar-nav').height()) {
			$('.main').css('min-height', $('#sidebar-nav').height());
		}
	});


	/*-----------------------------------/
	/*	SIDEBAR NAVIGATION
	/*----------------------------------*/

	$('.sidebar a[data-toggle="collapse"]').on('click', function() {
		if($(this).hasClass('collapsed')) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});

	if( $('.sidebar-scroll').length > 0 ) {
		$('.sidebar-scroll').slimScroll({
			height: '95%',
			wheelStep: 2,
		});
	}


	// Data Maps


		var bubble_map = new Datamap({
		  element: document.getElementById("bubbles"),
		  geographyConfig: {
		    popupOnHover: true,
		    highlightOnHover: true,
		    highlightFillColor: '#55a8fd',
		    highlightBorderColor: 'rgba(85, 168, 253, 0.2)'
		  },
		  fills: {
		    defaultFill: '#e6e8ec',
		    n_america: '#55a8fd',
		    s_america: '#5dcfc7',
		    asia: '#fb598e',
		    africa: '#aa6df3'
		  }

		});
		bubble_map.bubbles([
		  {
		    name: 'Not a bomb, but centered on Brazil',
		    radius: 4,
		    centered: 'BRA',
		    country: 'Brazil',
		    yeild: 25,
		    fillKey: 's_america',
		    date: '1954-03-01',
		    highlightFillColor: '#55a8fd',
		  },
		  {
		    name: 'Not a bomb',
		    radius: 5,
		    yeild: 40,
		    country: 'USA',
		    centered: 'USA',
		    date: '1986-06-05',
		    significance: 'Centered on US',
		    fillKey: 'n_america',
		    highlightFillColor: '#55a8fd',
		  },
		  {
		    name: 'Castle Bravo',
		    radius: 10,
		    yeild: 20,
		    country: 'Africa',
		    significance: 'First dry fusion fuel "staged" thermonuclear weapon; a serious nuclear fallout accident occurred',
		    fillKey: 'africa',
		    date: '1954-03-01',
		    highlightFillColor: '#55a8fd',
		    latitude: -26.195246,
		    longitude:28.034088
		  },
		  {
		    name: 'Tsar Bomba',
		    radius: 5,
		    yeild: 35,
		    country: 'Bangladesh',
		    fillKey: 'asia',
		    significance: 'Largest thermonuclear weapon ever tested—scaled down from its initial 100 Mt design by 50%',
		    date: '1961-10-31',
		    highlightFillColor: '#55a8fd',
		    latitude: 23.6850,
		    longitude: 90.3563
		  }
		], {
		  popupTemplate: function(geo, data) {
		    // return '<div class="hoverinfo"><strong>Yield:</strong>' + data.yeild + '<br/>Exploded on ' + data.date + ' by the '  + data.country + '</div>'
		    return   '<div class="hoverinfo">'+data.country +' '+'<strong>$</strong>' + data.yeild + 'K' + '</div>'
		  }
		});

	//feather icon
		feather.replace()

});
