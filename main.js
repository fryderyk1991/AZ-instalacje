const menuBtn = document.querySelector('.burger-btn');
const menuBtnLines = document.querySelectorAll('.burger-btn > div')
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavList = [...document.querySelectorAll('.mobile-nav-ul > li')];
const modalCookies = document.querySelector('.modal-cookies');
const btnCookies = document.getElementById('accept');

function showAndHideMobileNav() {
   mobileNav.classList.toggle('open');
   mobileNavList.forEach((elem) => {
      elem.classList.toggle('open');
   });
   dropdownContent.classList.remove('down');
   arrowIcon.classList.remove('down');
   menuBtnLines.forEach((line) => line.classList.toggle('open'));
}

menuBtn.addEventListener('click', showAndHideMobileNav);

const cookiesModal = () => {
   if (document.cookie.includes("az-instalacje")) return;
   setTimeout(() => {
      modalCookies.classList.add('show');
         btnCookies.addEventListener('click', () => {
            modalCookies.classList.remove('show');
            if (btnCookies.id === "accept") {
               document.cookie = "agreeCookies= az-instalacje; max-age=" + 60 * 60 * 24 * 30;
            }
         })
   }, 500);
};

window.addEventListener('load', cookiesModal);


//  dropdown 

const dropdown = document.querySelector(".mobile_nav--dropdown");
const arrowIcon = document.querySelector(".fa-dropdown");
const dropdownContent = document.querySelector('.dropdown_content');
dropdown.addEventListener('click', () => {
   arrowIcon.classList.toggle('down');
   dropdownContent.classList.toggle('down');
   dropdown.classList.toggle('down')
})


// phone icon scroll fx
const phoneIconMobile = document.querySelector(".phone__icon");

// window.addEventListener('load' , () => {
//    setTimeout( () => {
     
//    }, 1000)
// })

window.addEventListener('scroll', () => {
   let currentScroll = window.scrollY;
   if (currentScroll > 0) {
      phoneIconMobile.classList.add('active');
   }
   else {phoneIconMobile.classList.remove('active')}
})
   

