jQuery(document).ready(function ($) {
  if ($(".staking-slider").length) {
    $(".staking-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      infinite: true,
      dots: true,
      autoplaySpeed: 3500,
    });
  }
  if ($(".ido-card-slider").length) {
    $(".ido-card-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      infinite: true,
      prevArrow: $(".ido-slick-prev"),
      nextArrow: $(".ido-slick-next"),
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    });
  }
  if ($(".event-thumbnails-slider").length) {
    $(".event-thumbnails-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      infinite: true,
      prevArrow: $(".ido-slick-prev"),
      nextArrow: $(".ido-slick-next"),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    });
  }
  $("#accordion").on("click", '[data-toggle="collapse"]', function (event) {
    event.preventDefault();
    var $this = $(this),
      target = $this.attr("href") || $this.data("target");
    if (target === undefined || $(target).hasClass("in")) {
      return false;
    }
  });
  $(document).on("click", function (event) {
    if (
      !$("#outside-click").add("#navbarText").is(event.target) &&
      !$("#outside-click").has(event.target).length
    ) {
      $("#navbarText").removeClass("show");
    }
  });

  $(document).on("click", (event) => {
    if (
      !$(event.target).closest(".resize-icon").length &&
      !$(event.target).closest(".menu-item.menu-active-bg").length
    ) {
      $(".dashboard-area").removeClass("menu-icon-show");
    }
  });
  // menu bg add
  $(window).on("scroll", function () {
    $("header").toggleClass("menu-bg-fixed", $(window).scrollTop() > 120);
  });
  // Country select
  // Get references to elements
  const $selectSelected = $(".select-selected");
  const $selectItems = $(".select-items");
  const $selectItemList = $(".select-item");
  // Toggle dropdown on click
  $selectSelected.on("click", function () {
    $selectItems.toggle();
  });
  // Close dropdown when clicking outside
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".custom-select").length) {
      $selectItems.hide();
    }
  });
  $(".resize-icon").click(function () {
    $(".dashboard-area").toggleClass("menu-icon-show");
  });
  // Update selected value and close dropdown
  $selectItemList.on("click", function () {
    const selectedValue = $(this).data("value");
    const selectedText = $(this).html();
    $selectSelected.html(selectedText);
    $selectItems.hide();
  });
  // logo flip
if ($(".logo-flip-box").length) {
  var $flipBox = $(".logo-flip-box");

  // Function to start autoplay
  function startFlip() {
    $flipBox.flipbox({
      autoplay: true,
      autoplayReverse: false,
      autoplayWaitDuration: 1800,
      autoplayPauseOnHover: false,
      animationDuration: 1500,
      animationEasing: "ease",
    });
  }
  startFlip();
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      $flipBox.flipbox({
        autoplay: false,
      });
    } else {
      startFlip();
    }
  });
}
  // Dropdown toggle
  $(".dropdown-toggle").click(function () {
    $(this).next(".dropdown").toggle(400);
  });
  $(document).click(function (e) {
    var target = e.target;
    if (
      !$(target).is(".dropdown-toggle") &&
      !$(target).parents().is(".dropdown-toggle")
    ) {
      $(".dropdown").hide();
    }
  });
});
// function urlCopy(elem) {
//   const inputField = elem.previousElementSibling;  // Get the associated input
//   inputField.select();
//   inputField.setSelectionRange(0, 99999);  // For mobile compatibility
//   navigator.clipboard.writeText(inputField.value).catch(err => {
//     console.error('Failed to copy:', err);  // Optional error logging
//   });
// }
function urlCopy(elem) {
  const target = elem.previousElementSibling;
  let textToCopy = "";
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
    textToCopy = target.value;
  } else {
    textToCopy = target.innerText || target.textContent;
  }

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Copied:", textToCopy);
      target.classList.add("copied-highlight");
      setTimeout(() => {
        target.classList.remove("copied-highlight");
      }, 1000);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
}
if (document.querySelector(".mobile-table")) {
  new DataTable(".mobile-table", {
    responsive: true,
    paging: false,
    searching: false,
    ordering: false,
  });
}

// chart js code here
document.addEventListener("DOMContentLoaded", function () {
  var chartCanvas = document.getElementById("myChart");

  if (chartCanvas) {
    var ctx = chartCanvas.getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar", // Change to 'line', 'pie', etc.
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
});

