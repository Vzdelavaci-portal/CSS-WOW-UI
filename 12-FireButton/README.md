# 🔥 Fire Button

A visually rich and interactive fire button built with HTML, CSS and JavaScript.

The component uses the **Canvas API** to generate a dynamic particle-based flame effect instead of relying on fixed CSS flame shapes. The fire continuously changes, reacts to hover and creates an explosive ignition effect when the button is clicked.

Part of the **CSS WOW UI** collection.

---

## ✨ Features

- Particle-based animated fire
- Natural and continuously changing flame movement
- Canvas-rendered glow and hot flame core
- Rising embers
- Increased fire intensity on hover
- Explosive click animation
- Spark burst effect
- Flash effect
- Animated smoke
- Realistic glowing button
- Animated fire reflections
- 3D button press effect
- Responsive layout
- Reduced-motion accessibility support
- No external libraries

---

## 🛠 Technologies

- HTML5
- CSS3
- JavaScript
- Canvas API
- Web Animations
- CSS Custom Properties
- CSS Gradients
- CSS Filters
- `requestAnimationFrame()`

---

## 📂 Project Structure

```text
12-FireButton/
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

No installation, build process or external library is required.

---

## 🎯 Learning Goals

This project demonstrates:

- Creating particle effects with the Canvas API
- Building a real-time animation loop
- Using `requestAnimationFrame()`
- Working with canvas gradients
- Using additive blending
- Creating reusable JavaScript classes
- Managing animated particles
- Simulating upward flame movement
- Adding turbulence and horizontal drift
- Reacting to hover and click events
- Creating DOM-based sparks and smoke
- Handling responsive canvas resolution
- Supporting high-density displays
- Improving performance by removing expired particles

---

## 🔥 How the Fire Works

The fire is generated from many individual particles.

Each particle contains properties such as:

- Position
- Radius
- Vertical velocity
- Horizontal velocity
- Lifetime
- Opacity
- Stretch
- Turbulence
- Wave offset
- Wave speed

The particles are created near the bottom of the canvas and move upward while gradually shrinking and fading.

```javascript
this.velocityY = -randomBetween(0.75, 1.65);
this.life = randomBetween(0.72, 1);
this.decay = randomBetween(0.006, 0.012);
```

When a particle disappears, it is reused and returned to the bottom of the flame.

---

## 🎨 Flame Colors

The flame uses several color layers:

```javascript
const fireColors = [
    {
        position: 0,
        color: "rgba(255, 255, 230, 0.96)"
    },
    {
        position: 0.16,
        color: "rgba(255, 242, 130, 0.94)"
    },
    {
        position: 0.38,
        color: "rgba(255, 181, 35, 0.88)"
    },
    {
        position: 0.64,
        color: "rgba(255, 76, 0, 0.72)"
    },
    {
        position: 1,
        color: "rgba(145, 8, 0, 0)"
    }
];
```

The flame starts with a bright white and yellow core, transitions into orange and ends with transparent dark red edges.

---

## 💡 Additive Blending

The particles are drawn using additive blending:

```javascript
context.globalCompositeOperation = "lighter";
```

This causes overlapping particles to become brighter and creates a glowing fire effect.

After drawing the flame, the canvas returns to the standard blending mode:

```javascript
context.globalCompositeOperation = "source-over";
```

---

## ⚡ Interactive Effects

### Hover

When the user moves the cursor over the button:

- Fire intensity increases
- More embers appear
- The button moves slightly upward
- The glow becomes stronger
- The shine animation appears
- The fire icon moves and rotates

### Click

When the button is clicked:

- The flame briefly becomes stronger
- Additional embers are generated
- Sparks explode around the button
- A bright flash appears
- Smoke rises above the button
- The button shakes briefly

---

## 💥 Ignition Effect

The click interaction is controlled by the `ignite()` function:

```javascript
function ignite() {
    burstStrength = 1;

    for (let index = 0; index < 18; index += 1) {
        embers.push(new Ember(true));
    }

    fireWrapper.classList.add("igniting");

    createFlash();
    createSparkExplosion();
    createSmoke();
}
```

The `burstStrength` value temporarily increases the upward speed and intensity of the fire particles.

---

## ✨ Spark System

The spark explosion creates multiple DOM elements with randomized properties:

- Direction
- Distance
- Size
- Color
- Animation duration

```javascript
spark.style.setProperty(
    "--angle",
    `${randomBetween(0, 360)}deg`
);

spark.style.setProperty(
    "--distance",
    `${randomBetween(70, 195)}px`
);
```

Each spark removes itself after its animation finishes.

---

## 💨 Smoke Effect

Smoke particles are generated after clicking the button.

Each smoke element receives a random:

- Position
- Size
- Horizontal drift
- Animation duration

The smoke gradually rises, expands and disappears.

---

## 📱 Responsive Canvas

The canvas automatically adapts to the size of the page and the pixel density of the display.

```javascript
devicePixelRatio = Math.min(
    window.devicePixelRatio || 1,
    2
);
```

This keeps the flame sharp on high-resolution screens while limiting unnecessary rendering load.

The canvas is recalculated after resizing the browser window:

```javascript
window.addEventListener("resize", () => {
    resizeCanvas();
    createParticles();
});
```

---

## ⚙️ Customization

### Change the Number of Fire Particles

In `script.js`, edit:

```javascript
const amount =
    window.innerWidth < 580
        ? 95
        : 135;
```

A higher value creates a denser and smoother flame but requires more rendering power.

---

### Change the Flame Speed

Edit the vertical velocity:

```javascript
this.velocityY =
    -randomBetween(0.75, 1.65) *
    intensity;
```

Higher values make the fire rise faster.

---

### Change the Particle Size

Edit:

```javascript
this.radius =
    randomBetween(18, 42) *
    intensity;
```

Smaller particles create a more detailed flame. Larger particles create a softer and wider flame.

---

### Change the Flame Height

You can adjust the particle lifetime:

```javascript
this.life = randomBetween(0.72, 1);
this.decay = randomBetween(0.006, 0.012);
```

Lower decay values allow particles to remain visible longer and rise higher.

---

### Change the Fire Width

Edit the particle spawn area:

```javascript
const baseWidth = canvasWidth * 0.7;
const baseLeft = canvasWidth * 0.15;
```

A larger `baseWidth` creates a wider flame.

---

### Change the Button Text

Edit the button content in `index.html`:

```html
<span class="button-icon">🔥</span>
<span class="button-text">Ignite Now</span>
```

---

### Change the Main Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --yellow: #ffd84f;
    --orange: #ff9800;
    --deep-orange: #ff4d00;
    --red: #df250d;
    --dark-red: #791407;
}
```

---

## ♿ Accessibility

The project includes:

- A native `<button>` element
- Keyboard activation support
- Decorative canvas hidden from assistive technologies
- Decorative effect layers marked with `aria-hidden`
- Reduced-motion support
- Responsive text and layout

The canvas is decorative and therefore uses:

```html
aria-hidden="true"
```

---

## 🚀 Performance Notes

The animation is optimized by:

- Using `requestAnimationFrame()`
- Limiting the device pixel ratio
- Reusing fire particles
- Removing expired ember particles
- Removing DOM effects after animations
- Pausing excessive frame-time jumps
- Using separate canvas and DOM effect layers

The number of particles can be reduced on slower devices.

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

# 🔥 Fire Button

Vizuálně výrazné a interaktivní ohnivé tlačítko vytvořené pomocí HTML, CSS a JavaScriptu.

Komponenta využívá **Canvas API**, které generuje dynamický částicový oheň. Plamen proto není složený z několika pevných CSS tvarů, ale neustále se mění, reaguje na najetí kurzoru a při kliknutí vytvoří výrazný efekt vzplanutí.

Projekt je součástí kolekce **CSS WOW UI**.

---

## ✨ Funkce

- Částicový animovaný oheň
- Přirozeně se měnící pohyb plamene
- Vykreslování pomocí Canvas API
- Zářivé jádro ohně
- Stoupající žhavé částice
- Zvýšení intenzity při hoveru
- Explozivní efekt při kliknutí
- Animované jiskry
- Krátký světelný záblesk
- Stoupající kouř
- Zářivé 3D tlačítko
- Animované odrazy ohně
- Efekt stisku tlačítka
- Responzivní rozložení
- Podpora omezení pohybu
- Bez externích knihoven

---

## 🛠 Použité technologie

- HTML5
- CSS3
- JavaScript
- Canvas API
- Web Animations
- CSS proměnné
- CSS gradienty
- CSS filtry
- `requestAnimationFrame()`

---

## 📂 Struktura projektu

```text
12-FireButton/
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

Není potřeba žádná instalace, sestavení projektu ani externí knihovna.

---

## 🎯 Co si můžeš vyzkoušet

Tento projekt ukazuje:

- Tvorbu částicových efektů pomocí Canvas API
- Vytvoření animační smyčky
- Použití `requestAnimationFrame()`
- Práci s canvas gradienty
- Použití aditivního prolínání
- Tvorbu JavaScriptových tříd
- Správu animovaných částic
- Simulaci pohybu plamene vzhůru
- Přidání turbulence a bočního pohybu
- Reakci na hover a kliknutí
- Tvorbu jisker a kouře
- Responzivní změnu velikosti canvasu
- Podporu obrazovek s vysokým rozlišením
- Odstraňování nepotřebných částic

---

## 🔥 Jak oheň funguje

Oheň je vytvořený z velkého množství jednotlivých částic.

Každá částice obsahuje například:

- Pozici
- Velikost
- Vertikální rychlost
- Horizontální rychlost
- Životnost
- Průhlednost
- Protažení
- Turbulenci
- Posun vlny
- Rychlost vlnění

Částice vznikají ve spodní části canvasu, pohybují se vzhůru, postupně se zmenšují a mizí.

```javascript
this.velocityY = -randomBetween(0.75, 1.65);
this.life = randomBetween(0.72, 1);
this.decay = randomBetween(0.006, 0.012);
```

Po zániku se částice znovu použije a vrátí se ke spodní části plamene.

---

## 🎨 Barvy plamene

Plamen využívá několik barevných vrstev:

```javascript
const fireColors = [
    {
        position: 0,
        color: "rgba(255, 255, 230, 0.96)"
    },
    {
        position: 0.16,
        color: "rgba(255, 242, 130, 0.94)"
    },
    {
        position: 0.38,
        color: "rgba(255, 181, 35, 0.88)"
    },
    {
        position: 0.64,
        color: "rgba(255, 76, 0, 0.72)"
    },
    {
        position: 1,
        color: "rgba(145, 8, 0, 0)"
    }
];
```

Oheň začíná jasným bílo-žlutým jádrem, přechází do oranžové a končí průhlednými tmavě červenými okraji.

---

## 💡 Aditivní prolínání

Částice se vykreslují pomocí aditivního prolínání:

```javascript
context.globalCompositeOperation = "lighter";
```

Překrývající se částice se díky tomu zesvětlují a vytvářejí zářivý efekt ohně.

Po vykreslení plamene se canvas vrátí do běžného režimu:

```javascript
context.globalCompositeOperation = "source-over";
```

---

## ⚡ Interaktivní efekty

### Hover

Po najetí kurzoru:

- Oheň zesílí
- Objeví se více žhavých částic
- Tlačítko se lehce zvedne
- Glow efekt zesílí
- Přes tlačítko přejede odlesk
- Ikona ohně se zvětší a pootočí

### Kliknutí

Po kliknutí:

- Plamen krátce zesílí
- Vzniknou další žhavé částice
- Kolem tlačítka vyletí jiskry
- Zobrazí se výrazný záblesk
- Nad tlačítkem se objeví kouř
- Tlačítko se krátce zachvěje

---

## 💥 Efekt vzplanutí

Kliknutí ovládá funkce `ignite()`:

```javascript
function ignite() {
    burstStrength = 1;

    for (let index = 0; index < 18; index += 1) {
        embers.push(new Ember(true));
    }

    fireWrapper.classList.add("igniting");

    createFlash();
    createSparkExplosion();
    createSmoke();
}
```

Hodnota `burstStrength` krátkodobě zvýší rychlost a intenzitu plamene.

---

## ✨ Systém jisker

Výbuch jisker vytváří několik HTML elementů s náhodnými vlastnostmi:

- Směr
- Vzdálenost
- Velikost
- Barva
- Délka animace

```javascript
spark.style.setProperty(
    "--angle",
    `${randomBetween(0, 360)}deg`
);

spark.style.setProperty(
    "--distance",
    `${randomBetween(70, 195)}px`
);
```

Po dokončení animace se každá jiskra automaticky odstraní.

---

## 💨 Kouřový efekt

Po kliknutí vznikají částice kouře.

Každý kouřový prvek získá náhodnou:

- Pozici
- Velikost
- Boční odchylku
- Délku animace

Kouř stoupá, zvětšuje se a postupně mizí.

---

## 📱 Responzivní Canvas

Canvas se automaticky přizpůsobí velikosti stránky a hustotě pixelů obrazovky.

```javascript
devicePixelRatio = Math.min(
    window.devicePixelRatio || 1,
    2
);
```

Díky tomu zůstává plamen ostrý i na obrazovkách s vysokým rozlišením, ale zároveň se zbytečně nezvyšuje vykreslovací zátěž.

Canvas se přepočítá také při změně velikosti okna:

```javascript
window.addEventListener("resize", () => {
    resizeCanvas();
    createParticles();
});
```

---

## ⚙️ Přizpůsobení

### Změna počtu částic

V souboru `script.js` uprav:

```javascript
const amount =
    window.innerWidth < 580
        ? 95
        : 135;
```

Vyšší počet vytvoří hustší a plynulejší oheň, ale zvýší nároky na vykreslování.

---

### Změna rychlosti plamene

Uprav vertikální rychlost:

```javascript
this.velocityY =
    -randomBetween(0.75, 1.65) *
    intensity;
```

Vyšší hodnoty způsobí rychlejší stoupání plamene.

---

### Změna velikosti částic

Uprav:

```javascript
this.radius =
    randomBetween(18, 42) *
    intensity;
```

Menší částice vytvoří detailnější oheň. Větší částice vytvoří měkčí a mohutnější plamen.

---

### Změna výšky plamene

Uprav životnost částic:

```javascript
this.life = randomBetween(0.72, 1);
this.decay = randomBetween(0.006, 0.012);
```

Nižší hodnota `decay` umožní částicím zůstat viditelné déle a vystoupat výše.

---

### Změna šířky ohně

Uprav oblast, ve které částice vznikají:

```javascript
const baseWidth = canvasWidth * 0.7;
const baseLeft = canvasWidth * 0.15;
```

Vyšší hodnota `baseWidth` vytvoří širší plamen.

---

### Změna textu tlačítka

V souboru `index.html` uprav:

```html
<span class="button-icon">🔥</span>
<span class="button-text">Ignite Now</span>
```

---

### Změna hlavních barev

V souboru `style.css` uprav CSS proměnné:

```css
:root {
    --yellow: #ffd84f;
    --orange: #ff9800;
    --deep-orange: #ff4d00;
    --red: #df250d;
    --dark-red: #791407;
}
```

---

## ♿ Přístupnost

Projekt obsahuje:

- Nativní HTML prvek `<button>`
- Podporu ovládání klávesnicí
- Dekorativní canvas skrytý před čtečkami obrazovky
- Efektové vrstvy označené pomocí `aria-hidden`
- Podporu omezení animací
- Responzivní text a rozložení

Canvas je pouze dekorativní, a proto používá:

```html
aria-hidden="true"
```

---

## 🚀 Poznámky k výkonu

Animace je optimalizovaná pomocí:

- `requestAnimationFrame()`
- Omezení hodnoty `devicePixelRatio`
- Opakovaného používání částic plamene
- Odstraňování neaktivních žhavých částic
- Odstraňování DOM efektů po skončení animace
- Omezení příliš velkých časových skoků mezi snímky
- Oddělení Canvas a DOM efektů

Na slabších zařízeních lze počet částic snížit.

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