const toggles = document.querySelectorAll(".switch input");

toggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    const switchElement = toggle.closest(".switch");

    switchElement.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(0.94)" },
        { transform: "scale(1.06)" },
        { transform: "scale(1)" }
      ],
      {
        duration: 260,
        easing: "ease-out"
      }
    );
  });
});