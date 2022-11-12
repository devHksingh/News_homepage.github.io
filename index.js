const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-menu-toggle");

navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    document.querySelector("body").style.background = "burlywood";
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    document.querySelector("body").style.background = "none";
  }

  console.log(navToggle.getAttribute("aria-expanded"));
});
