# 👤 Interactive Profile Card

A modern and interactive profile card built with HTML, CSS and JavaScript.

The component includes animated statistics, interactive tabs, skill progress bars, contact links, a Follow button and a smooth 3D tilt effect that reacts to the mouse position.

Part of the **CSS WOW UI** collection.

---

## ✨ Features

- Modern glassmorphism design
- Interactive Profile, Skills and Contact tabs
- Animated statistics counters
- Animated skill progress bars
- Functional Follow button
- Follow and Following states
- 3D mouse tilt effect
- Mouse-follow lighting effect
- Animated online status
- Floating avatar animation
- Responsive layout
- Reduced-motion accessibility support

---

## 🛠 Technologies

- HTML5
- CSS3
- JavaScript
- Intersection Observer API
- Web Animations API

---

## 📂 Project Structure

```text
11-InteractiveProfileCard/
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
3. Open the following file in your browser:

```text
index.html
```

No installation or external libraries are required.

---

## 🎯 Learning Goals

This project demonstrates:

- Creating interactive UI cards
- Switching content with JavaScript
- Working with custom data attributes
- Animating numerical counters
- Using the Intersection Observer API
- Creating animated progress bars
- Handling button states
- Creating a 3D tilt effect
- Tracking the mouse position
- Using CSS glassmorphism
- Building responsive components
- Supporting reduced-motion preferences

---

## 🧩 Card Sections

### Profile

The Profile tab contains:

- Short profile description
- Creative project highlight
- Education highlight

### Skills

The Skills tab contains animated progress bars for:

- HTML
- CSS
- JavaScript
- Python

### Contact

The Contact tab contains links for:

- Email
- GitHub
- Personal website

---

## ⚡ Interactive Elements

### Animated Statistics

The statistics start counting when the card enters the visible part of the page.

Displayed statistics:

- Projects
- Followers
- Posts

### Follow Button

The Follow button switches between two states:

```text
Follow
```

and:

```text
Following
```

The text, icon, color and animation change automatically.

### 3D Tilt Effect

The card rotates according to the current mouse position.

The effect is created using:

```css
transform: rotateX() rotateY();
```

### Mouse-Follow Light

A blurred light element follows the cursor across the card and creates a dynamic glow effect.

---

## 🎨 Customization

You can customize the main colors in the `:root` section of `style.css`:

```css
:root {
  --cyan: #22d3ee;
  --purple: #a855f7;
  --pink: #f472b6;
  --green: #22c55e;
}
```

You can also edit:

- Profile name
- Role
- Location
- Initials or avatar
- Statistics
- Skills
- Contact links
- Profile description
- Highlight cards

---

## 📊 Changing Statistics

Edit the `data-target` attribute in `index.html`:

```html
<strong data-target="42">0</strong>
```

For compact values such as `8.5K`, use:

```html
<strong data-target="8500" data-format="compact">0</strong>
```

---

## 📈 Changing Skill Levels

Edit the percentage and the `--progress` custom property:

```html
<div class="skill-header">
  <span>CSS</span>
  <span>90%</span>
</div>

<div class="skill-track">
  <span style="--progress: 90%"></span>
</div>
```

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

---

## 👨‍💻 Author

Štefan Tusjak

Website:

```text
https://stefantusjak.cz
```

GitHub:

```text
https://github.com/Vzdelavaci-portal
```

---

## 📄 License

This project is free to use for learning and educational purposes.

---

# 🇨🇿 Česká verze

# 👤 Interactive Profile Card

Moderní interaktivní profilová karta vytvořená pomocí HTML, CSS a JavaScriptu.

Komponenta obsahuje animované statistiky, přepínání záložek, ukazatele dovedností, kontaktní odkazy, funkční tlačítko Follow a plynulý 3D efekt reagující na pohyb kurzoru.

Projekt je součástí kolekce **CSS WOW UI**.

---

## ✨ Funkce

- Moderní glassmorphism design
- Interaktivní záložky Profile, Skills a Contact
- Animované počítání statistik
- Animované ukazatele dovedností
- Funkční tlačítko Follow
- Přepínání stavů Follow a Following
- 3D efekt podle pohybu kurzoru
- Světelný efekt sledující kurzor
- Animovaný online stav
- Plovoucí animace avataru
- Responzivní rozložení
- Podpora omezení animací

---

## 🛠 Použité technologie

- HTML5
- CSS3
- JavaScript
- Intersection Observer API
- Web Animations API

---

## 📂 Struktura projektu

```text
11-InteractiveProfileCard/
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
3. V internetovém prohlížeči otevři soubor:

```text
index.html
```

Není potřeba žádná instalace ani externí knihovna.

---

## 🎯 Co si můžeš vyzkoušet

Tento projekt ukazuje:

- Tvorbu interaktivních UI karet
- Přepínání obsahu pomocí JavaScriptu
- Práci s vlastními datovými atributy
- Animované počítání hodnot
- Použití Intersection Observer API
- Tvorbu animovaných progress barů
- Přepínání stavů tlačítka
- Tvorbu 3D tilt efektu
- Sledování polohy kurzoru
- Použití glassmorphism designu
- Tvorbu responzivních komponent
- Podporu nastavení omezeného pohybu

---

## 🧩 Části karty

### Profile

Záložka Profile obsahuje:

- Krátký popis profilu
- Informaci o kreativních projektech
- Informaci o vzdělávacím obsahu

### Skills

Záložka Skills obsahuje animované ukazatele pro:

- HTML
- CSS
- JavaScript
- Python

### Contact

Záložka Contact obsahuje odkazy na:

- E-mail
- GitHub
- Osobní web

---

## ⚡ Interaktivní prvky

### Animované statistiky

Statistiky se začnou počítat ve chvíli, kdy se karta zobrazí ve viditelné části stránky.

Zobrazené statistiky:

- Projekty
- Sledující
- Příspěvky

### Tlačítko Follow

Tlačítko se přepíná mezi stavy:

```text
Follow
```

a:

```text
Following
```

Automaticky se změní text, ikona, barva i animace.

### 3D Tilt efekt

Karta se naklání podle aktuální polohy kurzoru.

Efekt využívá:

```css
transform: rotateX() rotateY();
```

### Světlo sledující kurzor

Rozmazaný světelný prvek se pohybuje po kartě podle kurzoru a vytváří dynamický glow efekt.

---

## 🎨 Přizpůsobení

Hlavní barvy můžeš změnit v části `:root` v souboru `style.css`:

```css
:root {
  --cyan: #22d3ee;
  --purple: #a855f7;
  --pink: #f472b6;
  --green: #22c55e;
}
```

Upravit můžeš také:

- Jméno profilu
- Pracovní roli
- Lokalitu
- Iniciály nebo avatar
- Statistiky
- Dovednosti
- Kontaktní odkazy
- Popis profilu
- Informační karty

---

## 📊 Změna statistik

V souboru `index.html` uprav atribut `data-target`:

```html
<strong data-target="42">0</strong>
```

Pro zkrácený formát, například `8.5K`, použij:

```html
<strong data-target="8500" data-format="compact">0</strong>
```

---

## 📈 Změna úrovně dovedností

Uprav procentuální hodnotu a vlastní CSS proměnnou `--progress`:

```html
<div class="skill-header">
  <span>CSS</span>
  <span>90%</span>
</div>

<div class="skill-track">
  <span style="--progress: 90%"></span>
</div>
```

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

---

## 👨‍💻 Autor

Štefan Tusjak

Web:

```text
https://stefantusjak.cz
```

GitHub:

```text
https://github.com/Vzdelavaci-portal
```

---

## 📄 Licence

Projekt je zdarma k použití pro výukové a vzdělávací účely.