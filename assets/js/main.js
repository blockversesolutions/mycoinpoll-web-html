
jQuery(document).ready(function ($) {
  
  $('.ido-card-slider').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    infinite: true,
    prevArrow: $('.ido-slick-prev'),
      nextArrow: $('.ido-slick-next'),
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint:991,
          settings: {
            slidesToShow: 1,
            arrows:false,
            dots: true,
          },
        },
      ],
    });
    $('#accordion').on('click', '[data-toggle="collapse"]', function(event) {
			event.preventDefault();
			
			var $this = $(this),
				target = $this.attr('href') || $this.data('target');
			
			if (target === undefined || $(target).hasClass('in')) {
				return false;
			}
		});
    $(document).on("click", function (event) {
      const $div = $("#outside-click");
      const $navbarText = $("#navbarText");
      if (!$div.is(event.target) && $div.has(event.target).length === 0) {
        $navbarText.removeClass("show");
      }
    });
    

  // menu bg add
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 300) {
          $('header').addClass('menu-bg-fixed');
      } else {
          $('header').removeClass('menu-bg-fixed');
      }
  });
  // Country select
  // Get references to elements
    const $selectSelected = $('.select-selected');
    const $selectItems = $('.select-items');
    const $selectItemList = $('.select-item');

    // Toggle dropdown on click
    $selectSelected.on('click', function () {
        $selectItems.toggle();
    });

    // Close dropdown when clicking outside
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.custom-select').length) {
            $selectItems.hide();
        }
    });
    // function toggleMenuIcon() {
    //   if ($(window).width() <= 768) {
    //     $('.dashboard-area').addClass('menu-icon-show');
    //   } else {
    //     $('.dashboard-area').removeClass('menu-icon-show');
    //   }
    // }
  
    // // Run the function initially and also on window resize
    // toggleMenuIcon();
    // $(window).resize(toggleMenuIcon);

    $(".resize-icon").click(function(){
      $(".dashboard-area").toggleClass('menu-icon-show');
    }); 

    // Update selected value and close dropdown
    $selectItemList.on('click', function () {
        const selectedValue = $(this).data('value');
        const selectedText = $(this).html();
        $selectSelected.html(selectedText);
        $selectItems.hide();
    });

  // logo flip
  $('.logo-flip-box').flipbox({
    autoplay: true,
    autoplayReverse: false,
    autoplayWaitDuration:1800,
    autoplayPauseOnHover: false,
    animationDuration: 1500,
    animationEasing: 'ease'
  });


})
