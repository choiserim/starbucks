console.log("Hello, Starbucks!");

const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// 객체 선택자
// searchEl은 .search 클래스를 가진 요소를 선택하고,
// searchInputEl은 그 안에 있는 input 요소를 선택한다.
// searchEl은 검색창 전체를 나타내고, 
// searchInputEl은 검색창 안에 있는 입력 필드를 나타낸다.
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 해당 연도 
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();