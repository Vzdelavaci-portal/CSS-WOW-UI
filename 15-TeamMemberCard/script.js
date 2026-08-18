const teamCard =
    document.getElementById("teamCard");

const cardLight =
    document.getElementById("cardLight");

const bio =
    document.getElementById("bio");

const bioToggle =
    document.getElementById("bioToggle");

const contactButton =
    document.getElementById("contactButton");

let bioExpanded = false;

bioToggle.addEventListener(
    "click",
    () => {
        bioExpanded = !bioExpanded;

        bio.classList.toggle(
            "expanded",
            bioExpanded
        );

        bioToggle.textContent =
            bioExpanded
                ? "Show less"
                : "Show more";
    }
);

teamCard.addEventListener(
    "mousemove",
    (event) => {
        const rect =
            teamCard.getBoundingClientRect();

        const mouseX =
            event.clientX - rect.left;

        const mouseY =
            event.clientY - rect.top;

        const rotateY =
            (
                (
                    mouseX -
                    rect.width / 2
                ) /
                (
                    rect.width / 2
                )
            ) * 7;

        const rotateX =
            (
                (
                    rect.height / 2 -
                    mouseY
                ) /
                (
                    rect.height / 2
                )
            ) * 7;

        teamCard.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

        cardLight.style.left =
            `${mouseX}px`;

        cardLight.style.top =
            `${mouseY}px`;
    }
);

teamCard.addEventListener(
    "mouseleave",
    () => {
        teamCard.style.transform =
            "rotateX(0deg) rotateY(0deg)";

        cardLight.style.left =
            "50%";

        cardLight.style.top =
            "50%";
    }
);

contactButton.addEventListener(
    "click",
    () => {
        contactButton.animate(
            [
                {
                    transform:
                        "scale(1)"
                },
                {
                    transform:
                        "scale(0.96)"
                },
                {
                    transform:
                        "scale(1.03)"
                },
                {
                    transform:
                        "scale(1)"
                }
            ],
            {
                duration: 300,
                easing: "ease-out"
            }
        );

        contactButton.innerHTML =
            "<span>✓</span> Message Ready";

        setTimeout(() => {
            contactButton.innerHTML =
                "<span>✉️</span> Contact Member";
        }, 1600);
    }
);