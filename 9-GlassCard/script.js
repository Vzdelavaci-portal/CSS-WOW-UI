const card = document.getElementById("glassCard");
const glow = document.getElementById("cardGlow");
const shine = document.getElementById("shine");
const followButton = document.getElementById("followButton");

const maxRotation = 11;

card.addEventListener("mousemove", (event) => {
  const rect = card.getBoundingClientRect();

  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateY = ((mouseX - centerX) / centerX) * maxRotation;
  const rotateX = ((centerY - mouseY) / centerY) * maxRotation;

  card.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;

  glow.style.left = `${mouseX}px`;
  glow.style.top = `${mouseY}px`;

  shine.style.background = `
    radial-gradient(
      circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.34),
      transparent 34%
    )
  `;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg)";

  glow.style.left = "50%";
  glow.style.top = "50%";

  shine.style.background = `
    radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.3),
      transparent 34%
    )
  `;
});

followButton.addEventListener("click", () => {
  const buttonText = followButton.querySelector(".button-text");
  const buttonIcon = followButton.querySelector(".button-icon");

  const isFollowing = followButton.classList.toggle("following");

  if (isFollowing) {
    buttonText.textContent = "Following";
    buttonIcon.textContent = "✓";
  } else {
    buttonText.textContent = "Follow";
    buttonIcon.textContent = "＋";
  }

  followButton.animate(
    [
      { transform: "translateZ(38px) scale(1)" },
      { transform: "translateZ(38px) scale(0.94)" },
      { transform: "translateZ(38px) scale(1.04)" },
      { transform: "translateZ(38px) scale(1)" }
    ],
    {
      duration: 320,
      easing: "ease-out"
    }
  );
});