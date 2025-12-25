// Chọn phần tử burger và menu
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

// Sự kiện click để bật tắt menu
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Hiệu ứng cuộn navbar thay đổi màu khi scroll (tùy chọn thêm)
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#fff";
  } else {
    navbar.style.background = "#fff"; // Hoặc để trong suốt nếu muốn
  }
});
