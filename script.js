// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Form validation for contact page (if present)
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = form.querySelector("input[name='name']");
      const email = form.querySelector("input[name='email']");
      const message = form.querySelector("textarea[name='message']");

      if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        alert("Please fill in all fields before submitting the form.");
      }
    });
  }

  // Image slider interactivity for poultry gallery
  const slider = document.querySelector(".slider");
  if (slider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // adjust scroll speed
      slider.scrollLeft = scrollLeft - walk;
    });
  }
});
