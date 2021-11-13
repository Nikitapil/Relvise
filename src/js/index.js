import "../style/style.scss";

const mobileBtn = document.querySelector(".mobile-menu-btn");
const navList = document.querySelector(".header__nav-list");
const partners = document.querySelector('.partners');
const partnersList = document.querySelector('.partners__list');

document.addEventListener("click", (event) => {
  let targetEl = event.target;
  if (
    targetEl.closest(".mobile-menu-btn") ||
    targetEl.closest(".header__nav-item")
  ) {
    mobileBtn.classList.toggle("active-mobile");
    navList.classList.toggle("active-mobile");
  }
  if (targetEl.closest('.partners-left')) {
    partnersList.scrollBy(-151, 0)
  }
  if (targetEl.closest('.partners-right')) {
    partnersList.scrollBy(151, 0)
  }
  if (targetEl.closest('.footer__title')) {
    targetEl.classList.toggle('footer-active')
    targetEl.nextElementSibling.classList.toggle('footer-active')
  }
});

// header style by scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector('.header');
  if (window.pageYOffset > 0) {
    header.classList.add('header-bg');
  } else {
    header.classList.remove('header-bg');
  }
});


