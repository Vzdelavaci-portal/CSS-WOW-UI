const buttons = document.querySelectorAll(".press-button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const face = button.querySelector(".button-face");
    const rect = face.getBoundingClientRect();

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;

    face.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });

    button.classList.remove("clicked");

    void button.offsetWidth;

    button.classList.add("clicked");
  });
});