// console.log("Hello, Starbucks!");

// const searchEl = document.querySelector(".search");
// const searchInputEl = searchEl.querySelector("input");

// // 객체 선택자
// // searchEl은 .search 클래스를 가진 요소를 선택하고,
// // searchInputEl은 그 안에 있는 input 요소를 선택한다.
// // searchEl은 검색창 전체를 나타내고, 
// // searchInputEl은 검색창 안에 있는 입력 필드를 나타낸다.
// searchEl.addEventListener("click", function () {
//   searchInputEl.focus();
// });

// searchInputEl.addEventListener("focus", function () {
//   searchEl.classList.add("focused");
//   searchInputEl.setAttribute("placeholder", "통합검색");
// });

// searchInputEl.addEventListener("blur", function () {
//   searchEl.classList.remove("focused");
//   searchInputEl.setAttribute("placeholder", "");
// });

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener("scroll", _.throttle(function () {
  if (window.scrollY > 500) {
    // badgeEl.style.display = "none";
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: "none"
    });
    // scrollto 버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x: 0,
    });
  } else {
    // badgeEl.style.display = "block";
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: "block"
    });
    // scrollto 숨기기
    gsap.to(toTopEl, 0.2, {
      x: 100,
    });
  }
}, 300));

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

// swiper(선택자, 옵션)
// new Swiper(".notice-line .swiper-container", {
//   direction: "vertical",
//   autoplay: true,
//   loop: true
// });

new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  autoplay: true
});

new Swiper(".promotion .swiper-container", {
  // direction: "horizontal" Swiper의 기본 설정으로 되어있음.
  slidesPerView: 3,
  spaceBetween: 10,
  // slidesPerGroup: 3,
  // freeMode: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000 //5초
  },
  // pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  // },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

// awards 부분
new Swiper('.awards .swiper-container', {
  // direction: "horizontal" 기본값으로 설정
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// promotion에서 upload 아이콘 부분
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// youtube에서 이미지 요소
function floationObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5),
    {
      y: size,
      repeat: -1,
      yoyo: true,
      // 애니메이션 처리를 위한 ease사용 -> gsap easing으로 검색
      ease: Power1.easeInOut,
      delay: random(0, delay),
    });
}

floationObject(".floating1", 1, 15);
floationObject(".floating2", 0.5, 15);
floationObject(".floating3", 1.5, 20);

// scrollMagic cdn - 스크롤 위치계산
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      // 보여짐 여부를 감시할 요소 지정
      triggerElement: spyEl,
      triggerHook: 0.8,
    })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

// 해당 연도 
// const thisYear = document.querySelector(".this-year");
// thisYear.textContent = new Date().getFullYear();