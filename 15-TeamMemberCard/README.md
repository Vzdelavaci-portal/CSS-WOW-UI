# 👤 Team Member Card

A modern and interactive **Team Member Card** built with HTML, CSS and JavaScript.

The component presents a team member inside a polished profile card with a 3D tilt effect, dynamic lighting, skills, statistics, social links, availability status and an expandable biography.

Perfect for **team sections, agency websites, portfolios, SaaS landing pages and company websites**.

Part of the **CSS WOW UI** collection.

---

## ✨ Features

- Modern team member profile card
- Interactive 3D tilt effect
- Dynamic cursor-following light
- Animated profile avatar
- Availability status
- Verified badge
- Role and location information
- Skill badges
- Expandable biography
- Member statistics
- Social media buttons
- Interactive contact button
- Glassmorphism design
- Gradient cover
- Animated hover effects
- Responsive layout
- Reduced-motion support
- No external libraries

---

## 🛠 Technologies

- HTML5
- CSS3
- JavaScript (ES6)
- CSS Grid
- Flexbox
- CSS Gradients
- Glassmorphism
- CSS Animations
- CSS Transforms
- CSS Custom Properties
- Web Animations API
- DOM Events

---

## 📂 Project Structure

```text
15-TeamMemberCard/
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

No installation, build process or external libraries are required.

---

## 🎯 Learning Goals

This project demonstrates:

- Building reusable profile cards
- Creating 3D mouse interactions
- Working with CSS perspective
- Using `rotateX()` and `rotateY()`
- Tracking cursor position with JavaScript
- Creating cursor-following lighting
- Building expandable content
- Working with DOM events
- Creating interactive buttons
- Using the Web Animations API
- Building responsive card layouts
- Combining CSS Grid and Flexbox
- Creating modern glassmorphism interfaces

---

## 🪪 Team Member Profile

The card displays essential information about a team member:

```text
Name
Role
Location
Availability
Skills
Biography
Statistics
Social Links
```

Example:

```html
<h2>Alex Morgan</h2>

<span class="role">
    Senior UI Designer
</span>

<p class="location">
    📍 Prague, Czech Republic
</p>
```

This information can easily be replaced with real team member data.

---

## 🟢 Availability Status

The card contains a small availability indicator:

```html
<span class="availability">
    <span class="status-dot"></span>
    Available
</span>
```

The green dot uses a subtle pulse animation:

```css
.status-dot {
    background: var(--green);

    box-shadow:
        0 0 12px var(--green);

    animation:
        pulse 1.8s infinite;
}
```

This could represent:

- Online status
- Availability for work
- Active employee
- Available freelancer
- Current team status

---

## 👤 Animated Avatar

The profile avatar uses a gradient background and a subtle floating animation.

```css
.avatar {
    background:
        linear-gradient(
            135deg,
            var(--cyan),
            var(--purple),
            var(--pink)
        );

    animation:
        avatarFloat 4s ease-in-out infinite;
}
```

The example uses initials:

```text
AM
```

A real profile image can also be used instead.

---

## ✓ Verified Badge

A small verification badge is positioned next to the avatar:

```html
<span class="verified">
    ✓
</span>
```

It can represent:

- Verified profile
- Team administrator
- Certified employee
- Confirmed account

---

## 🏷 Skill Badges

The member's main skills are displayed as compact badges:

```html
<div class="skills">

    <span>UI Design</span>
    <span>Figma</span>
    <span>CSS</span>
    <span>Motion</span>

</div>
```

Additional skills can simply be added with another `<span>` element.

---

## 📖 Expandable Biography

The biography starts in a compact state.

```css
.bio {
    max-height: 48px;
    overflow: hidden;
}
```

After clicking:

```text
Show more
```

JavaScript adds the `expanded` class:

```javascript
bio.classList.toggle(
    "expanded",
    bioExpanded
);
```

The biography then expands smoothly:

```css
.bio.expanded {
    max-height: 130px;
}
```

The button automatically changes between:

```text
Show more
```

and:

```text
Show less
```

---

## 📊 Member Statistics

The card contains three example statistics:

```text
84
Projects

4.8K
Followers

97%
Rating
```

They are created using a responsive CSS Grid:

```css
.stats {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);
}
```

These values could also represent:

- Completed projects
- Years of experience
- Customers
- Reviews
- Contributions
- Followers
- Rating

---

## 🌐 Social Links

The card contains social buttons for:

```text
GitHub
LinkedIn
Website
```

Example:

```html
<div class="socials">

    <a href="#" aria-label="GitHub">
        GH
    </a>

    <a href="#" aria-label="LinkedIn">
        IN
    </a>

    <a href="#" aria-label="Website">
        WEB
    </a>

</div>
```

Replace `#` with real profile URLs when using the component in a production website.

---

## 🧊 3D Tilt Effect

One of the main interactive features is the 3D tilt effect.

The card uses:

```css
.card-scene {
    perspective: 1200px;
}
```

and:

```css
.team-card {
    transform-style: preserve-3d;
}
```

JavaScript calculates the cursor position relative to the card:

```javascript
const rect =
    teamCard.getBoundingClientRect();

const mouseX =
    event.clientX - rect.left;

const mouseY =
    event.clientY - rect.top;
```

The cursor position is then converted into rotation values:

```javascript
teamCard.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
`;
```

This makes the card respond naturally to cursor movement.

---

## 💡 Dynamic Lighting

The card also contains a light layer that follows the cursor.

```javascript
cardLight.style.left =
    `${mouseX}px`;

cardLight.style.top =
    `${mouseY}px`;
```

The light itself is created using CSS:

```css
.card-light {
    width: 240px;
    height: 240px;

    border-radius: 50%;

    background:
        rgba(34, 211, 238, 0.16);

    filter: blur(55px);
}
```

Combining the moving light with the 3D rotation creates a more realistic interactive surface.

---

## ✉️ Contact Button

The main CTA is:

```text
Contact Member
```

When clicked, it briefly changes to:

```text
✓ Message Ready
```

The button also performs a short scale animation using the Web Animations API:

```javascript
contactButton.animate(
    [
        {
            transform: "scale(1)"
        },
        {
            transform: "scale(0.96)"
        },
        {
            transform: "scale(1.03)"
        },
        {
            transform: "scale(1)"
        }
    ],
    {
        duration: 300,
        easing: "ease-out"
    }
);
```

After a short delay, the original button state returns.

---

## 🎨 Glassmorphism Design

The card uses a modern glass-style interface:

```css
background:
    linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.035)
    );

backdrop-filter: blur(22px);
-webkit-backdrop-filter: blur(22px);
```

The effect is combined with:

- Transparent borders
- Layered shadows
- Gradient backgrounds
- Glow effects
- Rounded corners
- Dynamic lighting

---

## 🌈 Gradient Cover

The top section uses a colorful gradient:

```css
.cover {
    background:
        linear-gradient(
            135deg,
            #22d3ee,
            #8b5cf6,
            #f472b6
        );
}
```

A subtle grid pattern is layered on top to create additional visual depth.

---

## ⚙️ Customization

### Change Member Name

```html
<h2>Alex Morgan</h2>
```

---

### Change Role

```html
<span class="role">
    Senior UI Designer
</span>
```

---

### Change Location

```html
<p class="location">
    📍 Prague, Czech Republic
</p>
```

---

### Change Skills

```html
<div class="skills">

    <span>JavaScript</span>
    <span>React</span>
    <span>CSS</span>
    <span>Node.js</span>

</div>
```

---

### Change Statistics

```html
<div class="stat">
    <strong>84</strong>
    <span>Projects</span>
</div>
```

---

### Change Theme Colors

Edit the CSS variables:

```css
:root {
    --cyan: #22d3ee;
    --purple: #a855f7;
    --pink: #f472b6;
    --green: #22c55e;
}
```

---

### Change 3D Intensity

The maximum rotation is currently approximately:

```javascript
* 7;
```

For a stronger effect:

```javascript
* 12;
```

For a more subtle effect:

```javascript
* 4;
```

---

## 🖼 Using a Real Profile Image

Instead of initials:

```html
<div class="avatar">
    <span>AM</span>
</div>
```

you can use:

```html
<div class="avatar">
    <img
        src="profile.jpg"
        alt="Alex Morgan"
    >
</div>
```

Then add:

```css
.avatar img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 50%;
}
```

---

## 📱 Responsive Design

The card automatically adapts to smaller screens.

On mobile devices:

- Card width adapts to the viewport
- Internal spacing is reduced
- Statistics remain in a compact grid
- Buttons remain easy to use
- Text remains readable

---

## ♿ Accessibility

The project includes:

- Semantic `<article>` structure
- Native button elements
- Accessible social link labels
- Visible interactive states
- Responsive typography
- Reduced-motion support

Reduced motion is handled with:

```css
@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation-duration:
            0.01ms !important;

        animation-iteration-count:
            1 !important;

        transition-duration:
            0.01ms !important;
    }
}
```

---

## 🚀 Performance

The component is lightweight and requires no external dependencies.

It uses:

- Native JavaScript
- CSS transitions
- CSS animations
- CSS transforms
- Web Animations API
- Lightweight DOM events
- No frameworks
- No external UI libraries

---

## 💡 Possible Improvements

The component could be extended with:

- Real profile photos
- Real social media links
- Contact modal
- Animated statistics
- Multiple team cards
- Team filtering
- Department badges
- Online/offline states
- Dynamic data from an API
- Keyboard-friendly expandable content
- Touch-based interactions

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
- 🔐 OTP Input
- 👥 Team Member Card

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

# 👤 Team Member Card

Moderní a interaktivní **karta člena týmu** vytvořená pomocí HTML, CSS a JavaScriptu.

Komponenta představuje člena týmu pomocí moderní profilové karty s **3D efektem, dynamickým osvětlením, dovednostmi, statistikami, sociálními odkazy, stavem dostupnosti a rozbalovacím popisem**.

Hodí se například pro:

- Firemní weby
- Sekce Our Team
- Agentury
- SaaS projekty
- Portfolia
- Startup landing pages

Projekt je součástí kolekce **CSS WOW UI**.

---

## ✨ Funkce

- Moderní karta člena týmu
- Interaktivní 3D tilt efekt
- Světlo reagující na pohyb kurzoru
- Animovaný avatar
- Stav dostupnosti
- Verified badge
- Role a lokalita
- Skill badges
- Rozbalovací popis
- Statistiky
- Sociální odkazy
- Interaktivní Contact tlačítko
- Glassmorphism design
- Gradientové pozadí
- Hover animace
- Responzivní design
- Podpora reduced motion
- Bez externích knihoven

---

## 🛠 Použité technologie

- HTML5
- CSS3
- JavaScript
- CSS Grid
- Flexbox
- CSS Gradients
- Glassmorphism
- CSS Animations
- CSS Transforms
- CSS Custom Properties
- Web Animations API
- DOM Events

---

## 📂 Struktura projektu

```text
15-TeamMemberCard/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Spuštění

1. Stáhni nebo naklonuj repozitář.
2. Otevři složku projektu.
3. Otevři:

```text
index.html
```

Není potřeba instalace ani žádná externí knihovna.

---

## 🎯 Co si můžeš vyzkoušet

Projekt ukazuje:

- Tvorbu moderních profilových karet
- 3D interakci s kurzorem
- CSS `perspective`
- `rotateX()` a `rotateY()`
- Sledování pozice kurzoru
- Dynamické osvětlení
- Rozbalovací obsah
- DOM Events
- Interaktivní tlačítka
- Web Animations API
- CSS Grid a Flexbox
- Responzivní design
- Glassmorphism

---

## 🧊 3D Tilt Effect

Při pohybu kurzoru nad kartou JavaScript zjistí jeho pozici a podle ní kartu nakloní.

```javascript
teamCard.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
`;
```

Díky CSS:

```css
.card-scene {
    perspective: 1200px;
}
```

vznikne prostorový 3D efekt.

---

## 💡 Dynamické světlo

Společně s nakláněním se po kartě pohybuje jemné světlo:

```javascript
cardLight.style.left =
    `${mouseX}px`;

cardLight.style.top =
    `${mouseY}px`;
```

Výsledkem je efekt povrchu, který reaguje na polohu kurzoru.

---

## 📖 Rozbalovací Bio

Popis člena týmu je ve výchozím stavu zkrácený.

Kliknutím na:

```text
Show more
```

se rozbalí.

Tlačítko se následně změní na:

```text
Show less
```

---

## 📊 Statistiky

Karta může zobrazovat například:

```text
84 Projects
4.8K Followers
97% Rating
```

Statistiky lze jednoduše změnit například na:

```text
Experience
Customers
Projects
Reviews
Contributions
Followers
```

---

## ✉️ Contact Button

Po kliknutí na:

```text
Contact Member
```

se spustí krátká animace a tlačítko zobrazí:

```text
✓ Message Ready
```

V reálném projektu lze tlačítko propojit například s kontaktním formulářem nebo modálním oknem.

---

## 🖼 Vlastní fotografie

Místo iniciál lze použít skutečnou profilovou fotografii:

```html
<div class="avatar">
    <img
        src="profile.jpg"
        alt="Alex Morgan"
    >
</div>
```

CSS:

```css
.avatar img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 50%;
}
```

---

## ⚙️ Přizpůsobení

Můžeš jednoduše změnit:

- Jméno
- Pozici
- Lokalitu
- Avatar
- Bio
- Skills
- Statistiky
- Social links
- Barvy
- Sílu 3D efektu
- Text tlačítka

Hlavní barvy jsou definované pomocí:

```css
:root {
    --cyan: #22d3ee;
    --purple: #a855f7;
    --pink: #f472b6;
    --green: #22c55e;
}
```

---

## 📱 Responzivní design

Karta se automaticky přizpůsobuje velikosti obrazovky.

Funguje na:

- Desktopu
- Tabletu
- Mobilu

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
- 🔐 OTP Input
- 👥 Team Member Card

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