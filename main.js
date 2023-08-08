const menuBtn = document.querySelector(".header__burger");
const menuBtnLines = document.querySelectorAll(".header__burger > div");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavList = [...document.querySelectorAll(".mobile-nav__list > li")];
const modalCookies = document.querySelector(".modal__cookies");
const btnCookies = document.getElementById("accept");

function showAndHideMobileNav() {
  mobileNav.classList.toggle("open");
  mobileNavList.forEach((elem) => {
    elem.classList.toggle("open");
  });
  dropdownContent.classList.remove("down");
  arrowIcon.classList.remove("down");
  menuBtnLines.forEach((line) => line.classList.toggle("open"));
}
menuBtn.addEventListener("click", showAndHideMobileNav);

const firstLi = mobileNavList[0].addEventListener("click", function () {
  mobileNavList.forEach((elem) => {
    elem.classList.toggle("open");
  });
  mobileNav.classList.toggle("open");
  menuBtnLines.forEach((line) => line.classList.toggle("open"));
});


const cookiesModal = () => {
  if (document.cookie.includes("az-instalacje")) return;
  setTimeout(() => {
    modalCookies.classList.add("show");
    btnCookies.addEventListener("click", () => {
      modalCookies.classList.remove("show");
      if (btnCookies.id === "accept") {
        document.cookie =
          "agreeCookies= az-instalacje; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  }, 500);
};

window.addEventListener("load", cookiesModal);

const dropdown = document.querySelector(".mobile-nav__list .dropdown__item");
const arrowIcon = document.querySelector(".fa-dropdown");
const dropdownContent = document.querySelector(".mobile-nav__list-dropdown");
dropdown.addEventListener("click", () => {
  arrowIcon.classList.toggle("down");
  dropdownContent.classList.toggle("down");
  dropdown.classList.toggle("down");
  console.log("click");
});

const phoneIconMobile = document.querySelector(".phone__icon");

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;
  if (currentScroll > 0) {
    phoneIconMobile.classList.add("active");
  } else {
    phoneIconMobile.classList.remove("active");
  }
});
