document.addEventListener("DOMContentLoaded", function () {
  // ページ内スクロール
  const nav = document.querySelector(".header");

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const target = document.querySelector(
        href === "#" || href === "" ? "html" : href
      );
      const position = target.offsetTop;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    });
  });

  // ページトップ
  document.getElementById("js-page-top").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// worksの画像スライド表示
const back = document.getElementById("left-arrow");
const next = document.getElementById("right-arrow");

const totalSlides = document.querySelectorAll(".article-img-slide").length;
let currentIndex = 0;

const slidePosition = () => {
  const list = document.querySelector(".article-img-list");
  const slideWidth = document.querySelector(".article-img-wrapper").clientWidth;
  list.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  if (currentIndex === 0) {
    back.style.display = "none";
  } else {
    back.style.display = "unset";
  }

  if (currentIndex === totalSlides - 1) {
    next.style.display = "none";
  } else {
    next.style.display = "unset";
  }
};

// 左矢印
back.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    slidePosition();
  }
});

// 右矢印
next.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    slidePosition();
  }
});

// ウィンドウリサイズ時にスライド位置を再計算
window.addEventListener("resize", slidePosition);
