// LOADER
$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

// HAMBURGER MENU
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function (f) {
  f.stopPropagation();
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("translate-x-full");
  navMenu.classList.toggle("translate-0");
});
document.addEventListener("click", function (f) {
  const isClickInsideForm = navMenu.contains(f.target);

  if (!isClickInsideForm) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("translate-x-full");
    navMenu.classList.remove("translate-0");
  }
});

// FUNCTION
function toggleMenu(hamburger, navMenu) {
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("hidden");
    navMenu.classList.toggle("flex");
  });
}

// SEARCH FORM
const searchToggle = document.querySelector("#search-toggle");
const searchForm = document.querySelector("#search-form");

// FOOTER
const footAboutImg = document.querySelector("#f-about span");
const footAbout = document.querySelector("#footer .foot-about");
toggleMenu(footAboutImg, footAbout);

const footProductImg = document.querySelector("#f-product span");
const footProduct = document.querySelector("#footer .foot-product");
toggleMenu(footProductImg, footProduct);

const footHelpImg = document.querySelector("#f-help span");
const footHelp = document.querySelector("#footer .foot-help");
toggleMenu(footHelpImg, footHelp);

const footMarketplaceImg = document.querySelector("#f-marketplace span");
const footMarketplace = document.querySelector("#footer .foot-marketplace");
toggleMenu(footMarketplaceImg, footMarketplace);

searchToggle.addEventListener("click", function (e) {
  e.stopPropagation(); // Mencegah penyebaran event ke elemen document
  searchForm.classList.toggle("hidden");
  searchForm.classList.toggle("search-form");
});

document.addEventListener("click", function (e) {
  const isClickInsideForm = searchForm.contains(e.target);

  if (!isClickInsideForm) {
    searchForm.classList.add("hidden");
    searchForm.classList.remove("search-form");
  }
});
