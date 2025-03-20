jQuery(document).ready(function ($) {
  $('.staking-slider').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    infinite: true,
    dots: true,
    autoplaySpeed: 3500,
    });
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
  $('.event-thumbnails-slider').slick({
    slidesToShow:1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    infinite: true,
    prevArrow: $('.ido-slick-prev'),
      nextArrow: $('.ido-slick-next'),
      responsive: [
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
      if (!$("#outside-click").add("#navbarText").is(event.target) && !$("#outside-click").has(event.target).length) {
        $("#navbarText").removeClass("show");
      }
    });
    $(document).on("click", function (event) {
      const $dashboardLeft = $(".resize-icon");
      const $dashboard = $(".dashboard-area");
      if (!$dashboardLeft.is(event.target) && $dashboardLeft.has(event.target).length === 0) {
        $dashboard.removeClass("menu-icon-show");
      }
    });
  // menu bg add
  $(window).on("scroll", function () {
    $("header").toggleClass("menu-bg-fixed", $(window).scrollTop() > 120);
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
   // Dropdown toggle
   $('.dropdown-toggle').click(function() {
    $(this).next('.dropdown').toggle( 400 );
  });
  $(document).click(function(e) {
    var target = e.target;
    if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
      $('.dropdown').hide() ;
    }
  });
})
  function urlCopy(elem) {
    const inputField = elem.previousElementSibling;  // Get the associated input
    inputField.select();
    inputField.setSelectionRange(0, 99999);  // For mobile compatibility
    navigator.clipboard.writeText(inputField.value).catch(err => {
      console.error('Failed to copy:', err);  // Optional error logging
    });
  }
  new DataTable('.mobile-table', {
    responsive: true,
    paging: false,
    searching: false,
    ordering:  false
    });
    