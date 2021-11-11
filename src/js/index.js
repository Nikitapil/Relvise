import "../style/style.scss";

//mobile menu

const mobileBtn = document.querySelector(".mobile-menu-btn");
const navList = document.querySelector(".header__nav-list");
document.addEventListener("click", (event) => {
  let targetEl = event.target;
  if (
    targetEl.closest(".mobile-menu-btn") ||
    targetEl.closest(".header__nav-item")
  ) {
    mobileBtn.classList.toggle("active-mobile");
    navList.classList.toggle("active-mobile");
  }
});
window.addEventListener("scroll", () => {
  const header = document.querySelector('.header');
  if (window.pageYOffset > 0) {
    header.classList.add('header-bg');
  } else {
    header.classList.remove('header-bg');
  }
});
