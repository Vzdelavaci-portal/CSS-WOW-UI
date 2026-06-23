const form = document.querySelector(".form");
const button = document.querySelector("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  button.textContent = "Account Created ✓";
  button.classList.add("success");

  setTimeout(() => {
    button.textContent = "Create Account";
    button.classList.remove("success");
    form.reset();
  }, 1800);
});