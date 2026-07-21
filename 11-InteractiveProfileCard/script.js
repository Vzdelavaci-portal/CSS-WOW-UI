const card = document.getElementById("profileCard");
const cardLight = document.getElementById("cardLight");

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

const followButton = document.getElementById("followButton");

const counters = document.querySelectorAll(".stat strong[data-target]");

let countersStarted = false;

function animateCounters() {
  if (countersStarted) {
    return;
  }

  countersStarted = true;

  counters.forEach((counter) => {
    const target = Number(counter.dataset.target);
    const format = counter.dataset.format;
    const duration = 1000;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(target * easedProgress);

      if (format === "compact" && currentValue >= 1000) {
        counter.textContent = `${(currentValue / 1000).toFixed(1)}K`;
      } else {
        counter.textContent = currentValue;
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedPanel = tab.dataset.tab;

    tabs.forEach((button) => {
      button.classList.remove("active");
    });

    panels.forEach((panel) => {
      panel.classList.remove("active");
    });

    tab.classList.add("active");

    document
      .getElementById(selectedPanel)
      .classList.add("active");
  });
});

followButton.addEventListener("click", () => {
  const followText = followButton.querySelector(".follow-text");
  const followIcon = followButton.querySelector(".follow-icon");

  const isFollowing =
    followButton.classList.toggle("following");

  followText.textContent =
    isFollowing ? "Following" : "Follow";

  followIcon.textContent =
    isFollowing ? "✓" : "＋";

  followButton.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.94)" },
      { transform: "scale(1.04)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 300,
      easing: "ease-out"
    }
  );
});

card.addEventListener("mousemove", (event) => {
  const rect = card.getBoundingClientRect();

  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const rotateY =
    ((mouseX - rect.width / 2) / (rect.width / 2)) * 7;

  const rotateX =
    ((rect.height / 2 - mouseY) / (rect.height / 2)) * 7;

  card.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;

  cardLight.style.left = `${mouseX}px`;
  cardLight.style.top = `${mouseY}px`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform =
    "rotateX(0deg) rotateY(0deg)";

  cardLight.style.left = "50%";
  cardLight.style.top = "50%";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
      }
    });
  },
  {
    threshold: 0.35
  }
);

observer.observe(card);