const searchBox =
    document.getElementById("searchBox");

const searchToggle =
    document.getElementById("searchToggle");

const searchInput =
    document.getElementById("searchInput");

const clearButton =
    document.getElementById("clearButton");

const suggestions =
    document.getElementById("suggestions");

const components = [
    {
        name: "Neon Button",
        category: "Button",
        icon: "⚡"
    },
    {
        name: "Floating Label Input",
        category: "Form",
        icon: "✨"
    },
    {
        name: "Glassmorphism Button",
        category: "Button",
        icon: "🧊"
    },
    {
        name: "Classic Progress Bar",
        category: "Progress",
        icon: "📊"
    },
    {
        name: "Spinner Loader",
        category: "Loader",
        icon: "🔄"
    },
    {
        name: "Liquid Button",
        category: "Button",
        icon: "🌊"
    },
    {
        name: "Hamburger Menu",
        category: "Navigation",
        icon: "🍔"
    },
    {
        name: "iOS Toggle Switch",
        category: "Switch",
        icon: "🍏"
    },
    {
        name: "Glass Card",
        category: "Card",
        icon: "💎"
    },
    {
        name: "3D Press Button",
        category: "Button",
        icon: "🔘"
    },
    {
        name: "Interactive Profile Card",
        category: "Card",
        icon: "👤"
    },
    {
        name: "Fire Button",
        category: "Button",
        icon: "🔥"
    },
    {
        name: "Animated Search Box",
        category: "Form",
        icon: "🔍"
    }
];

function openSearch() {
    searchBox.classList.add("active");

    setTimeout(() => {
        searchInput.focus();
    }, 220);
}

function closeSearch() {
    searchBox.classList.remove("active");

    searchInput.value = "";

    clearButton.classList.remove("visible");

    suggestions.classList.remove("visible");

    suggestions.innerHTML = "";
}

function updateClearButton() {
    const hasText =
        searchInput.value.trim().length > 0;

    clearButton.classList.toggle(
        "visible",
        hasText
    );
}

function renderSuggestions(items) {
    suggestions.innerHTML = "";

    if (!searchInput.value.trim()) {
        suggestions.classList.remove(
            "visible"
        );

        return;
    }

    suggestions.classList.add(
        "visible"
    );

    if (items.length === 0) {
        suggestions.innerHTML = `
            <div class="empty-state">
                No components found.
            </div>
        `;

        return;
    }

    items.slice(0, 6).forEach((item) => {
        const button =
            document.createElement("button");

        button.type = "button";
        button.className = "suggestion";

        button.innerHTML = `
            <span class="suggestion-icon">
                ${item.icon}
            </span>

            <span class="suggestion-content">
                <strong>${item.name}</strong>
                <span>${item.category}</span>
            </span>
        `;

        button.addEventListener(
            "click",
            () => {
                searchInput.value =
                    item.name;

                updateClearButton();

                suggestions.classList.remove(
                    "visible"
                );
            }
        );

        suggestions.appendChild(button);
    });
}

function filterComponents() {
    const query =
        searchInput.value
            .trim()
            .toLowerCase();

    updateClearButton();

    if (!query) {
        renderSuggestions([]);
        return;
    }

    const results =
        components.filter((item) => {
            return (
                item.name
                    .toLowerCase()
                    .includes(query) ||

                item.category
                    .toLowerCase()
                    .includes(query)
            );
        });

    renderSuggestions(results);
}

searchToggle.addEventListener(
    "click",
    () => {
        if (
            searchBox.classList.contains(
                "active"
            )
        ) {
            searchInput.focus();
        } else {
            openSearch();
        }
    }
);

searchInput.addEventListener(
    "input",
    filterComponents
);

searchInput.addEventListener(
    "focus",
    () => {
        if (
            searchInput.value.trim()
        ) {
            filterComponents();
        }
    }
);

clearButton.addEventListener(
    "click",
    () => {
        searchInput.value = "";

        updateClearButton();

        suggestions.classList.remove(
            "visible"
        );

        searchInput.focus();
    }
);

document.addEventListener(
    "keydown",
    (event) => {
        if (event.key === "Escape") {
            closeSearch();

            searchToggle.focus();
        }
    }
);

document.addEventListener(
    "click",
    (event) => {
        const clickedInside =
            searchBox.contains(
                event.target
            ) ||
            suggestions.contains(
                event.target
            );

        if (!clickedInside) {
            suggestions.classList.remove(
                "visible"
            );
        }
    }
);