// NAVIGATION BAR
$(".hamburger_menu").on("click", function () {
  $(".hamburger_menu").toggleClass("animate"),
    $("#overlay").toggleClass("overlay-active"),
    $(".main_top_section").toggleClass("mobile_view"),
    $("body").toggleClass("fix_screen_mobile"),
    $(".hero-background").toggleClass("overflow-initial");
}),
  $(document).ready(function () {
    let e = document.querySelector("#mint"),
      i = document.querySelector("#about"),
      t = document.querySelector("#showcase"),
      r = document.querySelector("#mission"),
      o = document.querySelector("#roadmap"),
      s = document.querySelector("#Team");
    $(".section-1").click(function () {
      $(".hamburger_menu").removeClass("animate"),
        $("#overlay").removeClass("overlay-active"),
        $(".main_top_section").removeClass("mobile_view"),
        $("body").removeClass("fix_screen_mobile"),
        $(".main_top_section").removeClass("h-100vh"),
        $("html").removeClass("overflow-hidden");
      e.scrollIntoView();
    }),
      $(".section-2").click(function () {
        $(".hamburger_menu").removeClass("animate"),
          $("#overlay").removeClass("overlay-active"),
          $(".main_top_section").removeClass("mobile_view"),
          $("body").removeClass("fix_screen_mobile"),
          $(".main_top_section").removeClass("h-100vh"),
          $("html").removeClass("overflow-hidden");
        i.scrollIntoView();
      }),
      $(".section-3").click(function () {
        $(".hamburger_menu").removeClass("animate"),
          $("#overlay").removeClass("overlay-active"),
          $(".main_top_section").removeClass("mobile_view"),
          $("body").removeClass("fix_screen_mobile"),
          $(".main_top_section").removeClass("h-100vh"),
          $("html").removeClass("overflow-hidden");
        t.scrollIntoView();
      }),
      $(".section-4").click(function () {
        $(".hamburger_menu").removeClass("animate"),
          $("#overlay").removeClass("overlay-active"),
          $(".main_top_section").removeClass("mobile_view"),
          $("body").removeClass("fix_screen_mobile"),
          $(".main_top_section").removeClass("h-100vh"),
          $("html").removeClass("overflow-hidden");
        r.scrollIntoView();
      }),
      $(".section-5").click(function () {
        $(".hamburger_menu").removeClass("animate"),
          $("#overlay").removeClass("overlay-active"),
          $(".main_top_section").removeClass("mobile_view"),
          $("body").removeClass("fix_screen_mobile"),
          $(".main_top_section").removeClass("h-100vh"),
          $("html").removeClass("overflow-hidden");
        o.scrollIntoView();
      }),
      $(".section-6").click(function () {
        $(".hamburger_menu").removeClass("animate"),
          $("#overlay").removeClass("overlay-active"),
          $(".main_top_section").removeClass("mobile_view"),
          $("body").removeClass("fix_screen_mobile"),
          $(".main_top_section").removeClass("h-100vh"),
          $("html").removeClass("overflow-hidden");
        s.scrollIntoView();
      }),
      $(".hamburger_menu").click(function () {
        $(".main_top_section").addClass("h-100vh"),
          $("html").toggleClass("overflow-hidden");
      });
  }),
  $(".button_su_inner").mouseenter(function (e) {
    var i = $(this).offset(),
      t = e.pageX - i.left,
      r = e.pageY - i.top;
    $(this).prev(".su_button_circle").css({ left: t, top: r }),
      $(this).prev(".su_button_circle").removeClass("desplode-circle"),
      $(this).prev(".su_button_circle").addClass("explode-circle");
  }),
  $(".button_su_inner").mouseleave(function (e) {
    var i = $(this).offset(),
      t = e.pageX - i.left,
      r = e.pageY - i.top;
    $(this).prev(".su_button_circle").css({ left: t, top: r }),
      $(this).prev(".su_button_circle").removeClass("explode-circle"),
      $(this).prev(".su_button_circle").addClass("desplode-circle");
  });
const timeMonth = document.getElementById("time-month"),
  timeQuarter = document.getElementById("time-quarter"),
  timeYear = document.getElementById("time-year");
let starterPrice = document.getElementById("starter"),
  retailPrice = document.getElementById("retail"),
  bestPrice = document.getElementById("best-price"),
  starterPriceMobile = document.getElementById("starter-mobile"),
  retailPriceMobile = document.getElementById("retail-mobile"),
  bestPriceMobile = document.getElementById("best-price-mobile");
const handleSwitchToMonthly = () => {
    (starterPrice.innerHTML = 250),
      (retailPrice.innerHTML = 750),
      (bestPrice.innerHTML = 1500),
      (starterPriceMobile.innerHTML = 250),
      (retailPriceMobile.innerHTML = 750),
      (bestPriceMobile.innerHTML = 1500),
      timeMonth.classList.add("active"),
      timeQuarter.classList.remove("active"),
      timeYear.classList.remove("active");
  },
  handleSwitchToQuarterly = () => {
    (starterPrice.innerHTML = 14),
      (retailPrice.innerHTML = 22),
      (bestPrice.innerHTML = 30),
      (starterPriceMobile.innerHTML = 14),
      (retailPriceMobile.innerHTML = 22),
      (bestPriceMobile.innerHTML = 30),
      timeMonth.classList.remove("active"),
      timeQuarter.classList.add("active"),
      timeYear.classList.remove("active");
  },
  handleSwitchToYearly = () => {
    timeMonth.classList.remove("active"),
      timeQuarter.classList.remove("active"),
      timeYear.classList.add("active"),
      (starterPrice.innerHTML = 18),
      (retailPrice.innerHTML = 26),
      (bestPrice.innerHTML = 36),
      (starterPriceMobile.innerHTML = 18),
      (retailPriceMobile.innerHTML = 26),
      (bestPriceMobile.innerHTML = 36);
  };

window.addEventListener("load", handleSwitchToMonthly());

// slick slider------
$(".slick-slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
});

// scroll to top

let scroll_btn = document.querySelector(".scroll_top");
let scroll_pt = 200;
scroll_btn.classList.add("d-none");

window.addEventListener("scroll", () => {
  if (window.scrollY > scroll_pt) {
    scroll_btn.classList.remove("d-none");
  } else {
    scroll_btn.classList.add("d-none");
  }
  scroll_btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
