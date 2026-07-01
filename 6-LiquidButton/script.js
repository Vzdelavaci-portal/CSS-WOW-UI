const buttons = document.querySelectorAll(".liquid-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.remove("clicked");

    void button.offsetWidth;

    button.classList.add("clicked");
  });
});