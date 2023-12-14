// active menu

const allMenu = document.querySelectorAll(".unorderList li a");
const menuContainer = document.querySelector(".unorderList");

menuContainer.addEventListener("click", function (e) {
  const btnID = e.target.dataset.id;
  if (btnID) {
    allMenu.forEach((btn) => {
      console.log(btn);
      btn.classList.remove("active-menu");
      e.target.classList.add("active-menu");
      // console.log(e.target.classList);
    });
  }
});

// end active menu

// number counter section

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
animateValue(obj, 0, 85, 1000);

const obj1 = document.getElementById("value1");
animateValue(obj1, 0, 18, 1000);

const obj2 = document.getElementById("value2");
animateValue(obj2, 0, 12, 1000);

const obj3 = document.getElementById("value3");
animateValue(obj3, 0, 150, 1000);

// start section header

const btnOpen = document.querySelector(".humbergur");
const btnClose = document.querySelector(".close-btn");
const navMobile = document.querySelector(".navbar-mobile");
const listItem = document.querySelectorAll(".unorderList li");

btnOpen.addEventListener("click", () => {
  navMobile.style.display = "block";
  btnClose.style.display = "block";
});

btnClose.addEventListener("click", closeFunction);

function closeFunction() {
  navMobile.style.display = "none";
  btnClose.style.display = "none";
}

// scrolling header

const navbar = document.getElementById("top-header");
const header = document.getElementById("header");

window.addEventListener("scroll", checkHeightHeader);
function checkHeightHeader() {
  if (window.scrollY > 200) {
    header.classList.add("header-scrolled");
    navbar.classList.add("topbar-scrolled");
  } else {
    header.classList.remove("header-scrolled");
    navbar.classList.remove("topbar-scrolled");
  }
}

// slide section

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    1024: {
      slidesPerView: 2,
    },
  },
});

//end swiper slide

// button top
const btnTop = document.querySelector(".button-top a i");

console.log(btnTop);
window.addEventListener("scroll", checkHeight);
function checkHeight() {
  if (window.scrollY > 200) {
    btnTop.style.display = "flex";
    btnTop.style.opacity = "1";
  } else {
    btnTop.style.display = "none";
  }
}

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
