# 🔍 Animated Search Box

A modern animated search component built with HTML, CSS and JavaScript.

The search box smoothly expands when activated, includes live filtering, animated suggestions, a clear button and elegant glassmorphism styling. Designed as both a beautiful UI element and a reusable search component for real-world websites.

Part of the **CSS WOW UI** collection.

---

## ✨ Features

- Expandable animated search box
- Smooth open and close animations
- Glassmorphism UI
- Live search filtering
- Animated suggestion list
- Search icon animation
- Clear input button
- Keyboard support
- ESC key to close
- Responsive design
- Accessible HTML structure
- No external libraries

---

## 🛠 Technologies

- HTML5
- CSS3
- JavaScript (ES6)
- CSS Transitions
- CSS Gradients
- Glassmorphism
- Flexbox
- CSS Variables

---

## 📂 Project Structure

```text
13-AnimatedSearchBox/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 How to Run

1. Clone or download the repository.
2. Open the project folder.
3. Open:

```text
index.html
```

No installation or external libraries required.

---

## 🎯 Learning Goals

This project demonstrates:

- Creating expandable UI components
- Building animated search interfaces
- Working with DOM events
- Filtering arrays in JavaScript
- Dynamically generating HTML
- Creating reusable UI components
- Managing component state
- Handling keyboard shortcuts
- Responsive layout techniques
- Modern glassmorphism styling

---

## 🔍 Search Component

The search bar starts as a compact icon.

When activated it:

- Expands smoothly
- Focuses the input automatically
- Displays a clear button
- Supports live filtering
- Shows animated suggestions

---

## ⚡ Live Search

Suggestions are filtered while typing.

```javascript
const results = components.filter((item) => {
    return (
        item.name
            .toLowerCase()
            .includes(query) ||

        item.category
            .toLowerCase()
            .includes(query)
    );
});
```

No page refresh is required.

---

## 💡 Animated Suggestions

Matching components appear inside an animated dropdown.

Each suggestion contains:

- Icon
- Component name
- Category

The dropdown automatically hides when:

- The input becomes empty
- Clicking outside the component
- Pressing **Esc**

---

## 🎨 Glassmorphism Design

The search box uses a modern glass effect.

Features include:

- Blur backdrop
- Transparent background
- Soft shadows
- Gradient highlights
- Glow effects
- Rounded corners

---

## ⌨️ Keyboard Support

The component supports keyboard interaction.

### ESC

```text
Close search
```

### Auto Focus

Opening the search automatically focuses the input.

---

## ✨ Interactive Effects

### Hover

- Icon animation
- Glow effect
- Smooth transitions

### Active

- Expands the search box
- Shows the input field
- Displays suggestions
- Enables the clear button

### Clear Button

The clear button:

- Removes the text
- Keeps focus inside the input
- Hides suggestions

---

## ⚙️ Customization

### Change Placeholder

```html
placeholder="Search components..."
```

---

### Add New Search Items

Simply extend the array:

```javascript
const components = [
    {
        name: "Fire Button",
        category: "Button",
        icon: "🔥"
    }
];
```

---

### Change Expansion Width

```css
.search-box.active {
    width: 100%;
}
```

---

### Change Animation Speed

```css
transition:
    width 0.55s;
```

---

### Change Theme Colors

```css
:root {

    --cyan: #22d3ee;

    --purple: #a855f7;

    --pink: #f472b6;

}
```

---

## 📱 Responsive

The layout automatically adapts to:

- Desktop
- Tablet
- Mobile

The component remains fully usable on smaller screens.

---

## ♿ Accessibility

Includes:

- Semantic HTML
- Native buttons
- Keyboard support
- Focus management
- Accessible labels
- Responsive layout

---

## 🚀 Performance

Optimized by:

- Using CSS transitions
- Rendering suggestions only when needed
- Lightweight DOM updates
- Minimal JavaScript
- No frameworks
- No external dependencies

---

## 📚 Part of the CSS WOW UI Series

Completed components:

- ⚡ Neon Button
- ✨ Floating Label Input
- 🧊 Glassmorphism Button
- 📊 Classic Progress Bar
- 🔄 Spinner Loader
- 🌊 Liquid Button
- 🍔 Hamburger Menu
- 🍏 iOS Toggle Switch
- 💎 Glass Card
- 🔘 3D Press Button
- 👤 Interactive Profile Card
- 🔥 Fire Button
- 🔍 Animated Search Box

---

## 👨‍💻 Author

Štefan Tusjak

Website

```text
https://stefantusjak.cz
```

GitHub

```text
https://github.com/Vzdelavaci-portal
```

---

## 📄 License

Free for learning and educational purposes.

---

# 🇨🇿 Česká verze

# 🔍 Animated Search Box

Moderní animované vyhledávací pole vytvořené pomocí HTML, CSS a JavaScriptu.

Komponenta se po kliknutí plynule rozbalí, podporuje živé filtrování, animovaný seznam návrhů, tlačítko pro vymazání textu a moderní vzhled ve stylu Glassmorphism.

Projekt je součástí kolekce **CSS WOW UI**.

---

## ✨ Funkce

- Animované rozbalovací vyhledávání
- Plynulé otevření a zavření
- Glassmorphism design
- Živé filtrování
- Animovaný seznam návrhů
- Animace lupy
- Tlačítko pro vymazání textu
- Ovládání klávesnicí
- Zavření pomocí ESC
- Responzivní rozložení
- Přístupná HTML struktura
- Bez externích knihoven

---

## 🛠 Použité technologie

- HTML5
- CSS3
- JavaScript (ES6)
- CSS Transitions
- CSS Gradients
- Glassmorphism
- Flexbox
- CSS Variables

---

## 📂 Struktura projektu

```text
13-AnimatedSearchBox/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Spuštění projektu

1. Stáhni nebo naklonuj repozitář.
2. Otevři složku projektu.
3. Spusť:

```text
index.html
```

Není potřeba žádná instalace ani externí knihovna.

---

## 🎯 Co si můžeš vyzkoušet

Projekt ukazuje:

- Tvorbu rozbalovacích komponent
- Animované vyhledávání
- Práci s DOM událostmi
- Filtrování polí v JavaScriptu
- Dynamické generování HTML
- Správu stavu komponent
- Ovládání pomocí klávesnice
- Moderní Glassmorphism design
- Responzivní rozložení

---

## 🔍 Vyhledávání

Vyhledávací pole začíná jako malé tlačítko s ikonou lupy.

Po aktivaci:

- Plynule se rozbalí
- Automaticky nastaví focus
- Zobrazí tlačítko pro smazání
- Podporuje živé vyhledávání
- Zobrazuje animované návrhy

---

## ⚡ Živé filtrování

Návrhy se aktualizují při každém napsaném znaku.

```javascript
const results = components.filter((item) => {
    return (
        item.name
            .toLowerCase()
            .includes(query) ||

        item.category
            .toLowerCase()
            .includes(query)
    );
});
```

Není potřeba obnovovat stránku.

---

## 💡 Animované návrhy

Každý nalezený výsledek obsahuje:

- Ikonu
- Název komponenty
- Kategorie

Seznam se automaticky skryje při:

- Vymazání textu
- Kliknutí mimo komponentu
- Stisknutí klávesy **ESC**

---

## 🎨 Glassmorphism

Komponenta využívá moderní vzhled se skleněným efektem.

Obsahuje:

- Rozmazané pozadí
- Průhlednost
- Jemné stíny
- Gradienty
- Glow efekty
- Zaoblené rohy

---

## ⌨️ Ovládání

Podporované akce:

### ESC

```text
Zavře vyhledávání
```

### Automatický focus

Po otevření se kurzor automaticky přesune do vstupního pole.

---

## ✨ Interaktivní efekty

### Hover

- Animace lupy
- Glow efekt
- Plynulé přechody

### Aktivní stav

- Rozbalení pole
- Zobrazení inputu
- Animované návrhy
- Aktivace tlačítka pro smazání

### Clear Button

- Vymaže text
- Zachová focus
- Skryje návrhy

---

## ⚙️ Přizpůsobení

### Změna placeholderu

```html
placeholder="Search components..."
```

---

### Přidání dalších položek

```javascript
const components = [
    {
        name: "Fire Button",
        category: "Button",
        icon: "🔥"
    }
];
```

---

### Změna šířky

```css
.search-box.active {
    width: 100%;
}
```

---

### Změna rychlosti animace

```css
transition:
    width 0.55s;
```

---

### Změna barev

```css
:root {

    --cyan: #22d3ee;

    --purple: #a855f7;

    --pink: #f472b6;

}
```

---

## 📱 Responzivita

Komponenta funguje na:

- Desktopu
- Tabletu
- Mobilu

Rozložení se automaticky přizpůsobuje velikosti obrazovky.

---

## ♿ Přístupnost

Projekt obsahuje:

- Sémantické HTML
- Nativní tlačítka
- Podporu klávesnice
- Správu focusu
- Přístupné popisky
- Responzivní rozložení

---

## 🚀 Výkon

Optimalizováno pomocí:

- CSS animací
- Vykreslování návrhů pouze při potřebě
- Lehkých DOM operací
- Malého množství JavaScriptu
- Bez frameworků
- Bez externích závislostí

---

## 📚 Součást série CSS WOW UI

Hotové komponenty:

- ⚡ Neon Button
- ✨ Floating Label Input
- 🧊 Glassmorphism Button
- 📊 Classic Progress Bar
- 🔄 Spinner Loader
- 🌊 Liquid Button
- 🍔 Hamburger Menu
- 🍏 iOS Toggle Switch
- 💎 Glass Card
- 🔘 3D Press Button
- 👤 Interactive Profile Card
- 🔥 Fire Button
- 🔍 Animated Search Box

---

## 👨‍💻 Autor

Štefan Tusjak

Web

```text
https://stefantusjak.cz
```

GitHub

```text
https://github.com/Vzdelavaci-portal
```

---

## 📄 Licence

Projekt je zdarma k použití pro výukové a vzdělávací účely.