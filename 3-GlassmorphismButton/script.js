const button = document.querySelector(".glass-btn");

button.addEventListener("click", () => {

    button.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(.92)" },
            { transform: "scale(1.05)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 350
        }
    );

});