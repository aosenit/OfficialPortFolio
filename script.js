$(document).ready(function () {
  //to change nav(active) on scroll
  $(window)
    .scroll(function () {
      let scrollDistance = $(window).scrollTop() - -400;

      $(".anchor").each(function (i) {
        if ($(this).position().top <= scrollDistance) {
          $(".headerNav a.active").removeClass("active");
          $(".headerNav a").eq(i).addClass("active");
        }
      });
    })
    .scroll();

  //to show headerNav for small screen on menubar toggle
  $(".menuIcon").click(function () {
    $(".headerNav").toggleClass("addHeaderNav");
  });

  // to toggle active class on nav click and also close headernav for small screen

  $(".headerNav a").click(function () {
    $(".headerNav a").removeClass("active");
    $(this).addClass("active");
    $(".headerNav").removeClass("addHeaderNav");
  });

  //to select portfolio types based on type selected
  $(".portfolioLists li").click(function (e) {
    $(".portfolioLists li").removeClass("activePortfolio");
    $(this).addClass("activePortfolio");

    if (e.target.id == "javascript") {
      $(".portfolioProject").hide();
      $(".javascript").show("slow");
    }

    if (e.target.id == "react") {
      $(".portfolioProject").hide();
      $(".react").show("slow");
    }

    if (e.target.id == "all") {
      $(".portfolioProject").show("slow");
    }

    // if (e.target.id == "next") {
    //   $(".portfolioProject").hide();
    //   $(".next").show();
    // }
  });
});
