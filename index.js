// 맨 위로 이동 버튼
let moveToTop = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};

// // 타이핑 효과
// const $txt = document.querySelector(".txt-title");
// const content = "안녕하세요. \n강이삭을 소개합니다.";
// let contentIndex = 0;

// let typing = function () {
//   $txt.innerHTML += content[contentIndex];
//   contentIndex++;
//   if (content[contentIndex] === "\n") {
//     $txt.innerHTML += "<br />";
//     contentIndex++;
//   }
//   if (contentIndex > content.length) {
//     $txt.textContent = "";
//     contentIndex = 0;
//   }
// };

// setInterval(typing, 200);

// 이미지 슬라이드
let imgIndex = 0;
let position = 0;
const IMG_WIDTH = 438;
const $btnPrev = document.querySelector(".btn-prev");
const $btnNext = document.querySelector(".btn-next");
const $slideImgs = document.querySelector(".slide-images");

let prev = function () {
  if (imgIndex > 0) {
    $btnNext.removeAttribute("disabled");
    position += IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex - 1;
  }
  if (imgIndex == 0) {
    $btnPrev.setAttribute("disabled", "true");
  }
};

let next = function () {
  if (imgIndex < 4) {
    $btnPrev.removeAttribute("disabled");
    position -= IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    $slideImgs.style.transition = "transform .5s ease-out";
    imgIndex = imgIndex + 1;
  }
  if (imgIndex == 3) {
    $btnNext.setAttribute("disabled", "true");
  }
};


let init = function () {
  $btnPrev.setAttribute("disabled", "true");
  $btnPrev.addEventListener("click", prev);
  $btnNext.addEventListener("click", next);
};

init();

// // 모달
// const $modalBg = document.getElementsByClassName("modal-background");
// const $btnOpen = document.getElementsByClassName("btn-open");
// const $btnClose = document.getElementsByClassName("btn-close");

// function modal(num) {
//   $btnOpen[num].addEventListener("click", () => {
//     $modalBg[num].style.display = "flex";
//     document.body.style.overflow = "hidden";
//   });
//   $btnClose[num].addEventListener("click", () => {
//     $modalBg[num].style.display = "none";
//     document.body.style.overflow = "unset";
//   });
// }

// for (let i = 0; i < $btnOpen.length; i++) {
//   modal(i);
// }






// 스크롤바
let scrollTop = 0;
let bar = document.getElementsByClassName("bar-ing")[0];

window.addEventListener(
  "scroll",
  () => {
    scrollTop = document.documentElement.scrollTop;
    let per = Math.ceil(
      (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
    );
    bar.style.width = per + "%";
  },
  false
);









// 모달 및 슬라이드
const $modalBg = document.getElementsByClassName("modal-background");
const $btnOpen = document.getElementsByClassName("btn-open");
const $btnClose = document.getElementsByClassName("btn-close");
const $btnNext1 = document.getElementsByClassName("btn-next");
const $btnPrev1 = document.getElementsByClassName("btn-prev");
const $modalItems = document.querySelectorAll(".modal-item");

// 현재 슬라이드 상태를 저장하는 변수
let currentSlide = 0;

function modal(num) {
  // 모달 열기
  $btnOpen[num]?.addEventListener("click", () => {
    $modalBg[num].style.display = "flex";
    document.body.style.overflow = "hidden";
    showSlide(0); // 모달 열 때 첫 번째 슬라이드 표시
  });

  // 모달 닫기
  $btnClose[num]?.addEventListener("click", () => {
    $modalBg[num].style.display = "none";
    document.body.style.overflow = "unset";
  });

  // 다음 슬라이드
  $btnNext1[num]?.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % $modalItems.length;
    showSlide(currentSlide);
  });

  // 이전 슬라이드
  $btnPrev1[num]?.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + $modalItems.length) % $modalItems.length;
    showSlide(currentSlide);
  });
}

// 슬라이드 표시 함수
function showSlide(index) {
  $modalItems.forEach((item, idx) => {
    item.classList.toggle("active", idx === index);
  });
}

// 모달 초기화
for (let i = 0; i < $btnOpen.length; i++) {
  modal(i);
}
