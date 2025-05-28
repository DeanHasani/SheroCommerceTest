document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    gap: 15,
    breakpoints: {
      1024: {
        perView: 3
      },
      600: {
        perView: 1,
        startAt: 0,
        focusAt: "center",
        gap: 0
      }
    }
  }).mount();
});
