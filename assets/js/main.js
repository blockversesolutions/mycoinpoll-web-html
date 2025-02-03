
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
  $('.event-thumnails-slider').slick({
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
      const $div = $("#outside-click");
      const $navbarText = $("#navbarText");
      if (!$div.is(event.target) && $div.has(event.target).length === 0) {
        $navbarText.removeClass("show");
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
    $(window).on('scroll', function() {
      if ($(window).scrollTop() >120) {
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
    //  ico tab js
    function openCity(evt, coinName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("ico-tab-content");
      for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("ico-tab-btn");
      for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(coinName).style.display = "block";
      evt.currentTarget.className += " active";
      }
      // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();