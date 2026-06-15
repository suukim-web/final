document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".playlist-slide");
  const prevButton = document.querySelector(".prev-arrow");
  const nextButton = document.querySelector(".next-arrow");

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach(function (slide) {
      slide.classList.remove("is-active");
    });

    slides[index].classList.add("is-active");
  }

  function goNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function goPrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  nextButton.addEventListener("click", goNext);
  prevButton.addEventListener("click", goPrev);

  document.querySelectorAll(".vinyl-rotator").forEach(function (vinyl) {
    let isDragging = false;
    let startX = 0;
    let currentRotation = 0;

    vinyl.addEventListener("pointerdown", function (event) {
      isDragging = true;
      startX = event.clientX;
      vinyl.setPointerCapture(event.pointerId);
    });

    vinyl.addEventListener("pointermove", function (event) {
      if (!isDragging) return;

      const moveX = event.clientX - startX;
      const nextRotation = currentRotation + moveX;

      vinyl.style.transform = `rotate(${nextRotation}deg)`;
    });

    vinyl.addEventListener("pointerup", function (event) {
      if (!isDragging) return;

      const transformValue = vinyl.style.transform;
      const match = transformValue.match(/rotate\(([-0-9.]+)deg\)/);

      if (match) {
        currentRotation = Number(match[1]);
      }

      isDragging = false;
      vinyl.releasePointerCapture(event.pointerId);
    });
  });
});