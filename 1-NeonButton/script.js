const button = document.querySelector(".neon-btn");

button.addEventListener("click", () => {

    button.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(0.9)" },
            { transform: "scale(1.1)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 300
        }
    );

});