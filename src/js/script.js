const burgerIcon = $(".burger__icon");
const burgerNav = $(".burger__nav");
let burgerOpen = false;

let burgerReload = () => {
  if (burgerOpen) {
    burgerNav.css({ display: "flex", position: "fixed" });
    $("body, html").css({ overflow: "hidden" });
  } else {
    burgerNav.css({ display: "none", position: "" });
    $("body, html").css({ overflow: "" });
  }
};

burgerReload(); // reload the burger when page loaded

burgerIcon.on("click", () => {
  burgerOpen = !burgerOpen; // opening/closing the burger
  burgerReload(); // reloading the burger
});

$(".footer__link, .header__link, .burger__link").on("click", function () {
  // smooth scroll when clicked on any link
  let elementClick = $(this).attr("href"); // get element id that page will scroll to
  let destination = $(elementClick).offset().top;
  burgerOpen = false; // closing the burger
  burgerReload(); // reloading the burger
  // scrolling to element
  $("html:not(:animated),body:not(:animated)").animate(
    { scrollTop: destination },
    900 // 900ms
  );
  return false;
});

$(window).on("resize", function () {
  // close burger when phone rotated and > 675
  if ($("body").width() > 675) {
    burgerOpen = false; // closing the burger
    burgerReload(); // reloading the burger
  }
});
