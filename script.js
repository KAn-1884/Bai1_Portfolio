// 1. Xử lý Menu Mobile
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  // Animation cho icon burger (biến thành dấu X)
  burger.classList.toggle("toggle");
});

// Đóng menu khi click vào link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-active");
  });
});

// 2. Hiệu ứng gõ chữ (Typewriter Effect)
const typeText = document.querySelector(".typewriter");
const textArray = ["Web Developer", "Mobile Developer", "IT Student"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = textArray[textIndex];

  if (isDeleting) {
    typeText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typeText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  // Tốc độ gõ
  let typeSpeed = isDeleting ? 100 : 200;

  if (!isDeleting && charIndex === currentText.length) {
    // Gõ xong thì dừng một chút rồi xóa
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    // Xóa xong thì chuyển sang từ tiếp theo
    isDeleting = false;
    textIndex++;
    if (textIndex === textArray.length) {
      textIndex = 0;
    }
  }

  setTimeout(type, typeSpeed);
}

// Bắt đầu gõ khi load trang
document.addEventListener("DOMContentLoaded", type);

// 3. Hiệu ứng Scroll Animation (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // Nếu muốn lặp lại hiệu ứng khi cuộn lên thì bỏ comment dòng dưới
      // entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
