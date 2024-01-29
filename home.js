document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const initialScroll = 500;
  const navBtn = document.querySelectorAll(".nav-btns button,.sign-in");
  const svg = document.querySelector('.c-slacklogo--color > path');

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > initialScroll) {
      navBtn[0].classList.remove('text-white');
      navBtn[1].classList.add('btn-outline-purple');
      navBtn[2].classList.add('btn-bg-purple');
      svg.setAttribute('fill', '#000');

      navbar.classList.add("navbar-sticky");
    } else {
      navBtn[0].classList.add('text-white');
      navBtn[1].classList.remove('btn-outline-purple');
      navBtn[2].classList.remove('btn-bg-purple');
      svg.setAttribute('fill', '#fff');

      navbar.classList.remove("navbar-sticky");
    }
  });

  // Open and close menu functionality
  const menuBtn = document.querySelector(".navbar-toggler");
  const body = document.body;

  menuBtn.addEventListener("click", function () {
    body.classList.toggle("menu-opened");
    
    // Adjust navbar height when the menu is open
    if (body.classList.contains("menu-opened")) {
      navbar.style.height = "50%";
      navbar.style.overflowY = 'auto'
    } else {
      navbar.style.height = "";
      navbar.style.overflowY = "";
    }
  });
});
