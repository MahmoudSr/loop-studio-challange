const navToggle = document.querySelector(".nav-toggle");
const navigation = document.getElementById("nav__list");
const logo = document.querySelector(".logo");

navToggle.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible");

  if (visibility == "false") {
    navigation.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
    logo.setAttribute("aria-expanded", "true");
  } else if (visibility == "true") {
    navigation.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    logo.setAttribute("aria-expanded", "false");
  }
});
