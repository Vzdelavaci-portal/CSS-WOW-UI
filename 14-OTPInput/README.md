# 🔐 OTP Input

A modern and interactive **One-Time Password (OTP) verification component** built with HTML, CSS and JavaScript.

The component provides six separate verification fields with automatic focus movement, paste support, keyboard navigation, validation animations and a resend timer.

Part of the **CSS WOW UI** collection.

---

## ✨ Features

- 6-digit OTP input
- Automatic focus movement
- Automatic backspace navigation
- Full OTP paste support
- Numeric input filtering
- Arrow key navigation
- Enter key verification
- Animated focus states
- Filled input indicators
- Success validation animation
- Error shake animation
- Verification button state
- Resend code timer
- Responsive design
- Keyboard friendly
- Reduced-motion support
- No external libraries

---

## 🛠 Technologies

- HTML5
- CSS3
- JavaScript (ES6)
- CSS Grid
- CSS Gradients
- Glassmorphism
- CSS Animations
- CSS Custom Properties
- Web Animations API
- DOM Events

---

## 📂 Project Structure

```text
14-OTPInput/
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

- Building an OTP verification interface
- Managing multiple input fields
- Moving focus programmatically
- Handling keyboard events
- Working with paste events
- Filtering numeric input
- Combining values from multiple inputs
- Creating validation states
- Using CSS animations for feedback
- Creating countdown timers
- Managing button states
- Building responsive form components

---

## 🔢 OTP Input

The verification code is divided into six individual fields:

```html
<input
    class="otp-input"
    type="text"
    inputmode="numeric"
    maxlength="1"
>
```

Each input accepts a single digit.

The `inputmode="numeric"` attribute also helps display a numeric keyboard on supported mobile devices.

---

## ⚡ Automatic Focus

After entering a digit, focus automatically moves to the next field.

```javascript
if (
    input.value &&
    index < inputs.length - 1
) {
    focusInput(index + 1);
}
```

This makes entering the verification code faster and more natural.

---

## ⬅️ Backspace Navigation

When Backspace is pressed inside an empty field, focus automatically moves to the previous field.

```javascript
if (
    event.key === "Backspace" &&
    input.value === "" &&
    index > 0
) {
    focusInput(index - 1);
}
```

---

## ⌨️ Arrow Navigation

Users can also move between fields using:

```text
← Arrow Left
→ Arrow Right
```

Example:

```javascript
if (event.key === "ArrowLeft") {
    event.preventDefault();

    focusInput(index - 1);
}

if (event.key === "ArrowRight") {
    event.preventDefault();

    focusInput(index + 1);
}
```

---

## 📋 Paste Support

The component supports pasting an entire verification code.

For example:

```text
123456
```

Instead of placing the complete value inside one field, JavaScript distributes each digit across the six OTP inputs.

```javascript
const pastedText =
    event.clipboardData
        .getData("text")
        .replace(/\D/g, "")
        .slice(0, inputs.length);
```

The digits are then distributed:

```javascript
inputs.forEach((input, index) => {
    input.value =
        pastedText[index] || "";
});
```

---

## 🔢 Numeric Filtering

Non-numeric characters are automatically removed:

```javascript
input.value =
    input.value.replace(
        /\D/g,
        ""
    );
```

This ensures that the OTP fields contain only numbers.

---

## 🔐 Verification

For demonstration purposes, the project uses the following verification code:

```text
123456
```

It is defined in JavaScript:

```javascript
const DEMO_CODE = "123456";
```

When the user enters all six digits, the **Verify Code** button becomes active.

---

## ✅ Successful Verification

When the correct code is entered:

- Input borders become green
- A success message appears
- The button changes to a verified state
- A short confirmation animation plays

The button changes from:

```text
Verify Code
```

to:

```text
Verified ✓
```

---

## ❌ Invalid Code

If the entered code is incorrect:

- Inputs turn red
- The OTP group shakes
- An error message appears

```javascript
otpGroup.classList.add(
    "error"
);
```

The shake effect is created with CSS:

```css
@keyframes shake {
    0%,
    100% {
        transform: translateX(0);
    }

    20% {
        transform: translateX(-7px);
    }

    40% {
        transform: translateX(6px);
    }

    60% {
        transform: translateX(-4px);
    }

    80% {
        transform: translateX(3px);
    }
}
```

---

## 🔄 Resend Code

The component includes a simulated **Resend** feature.

After clicking Resend:

- Existing digits are cleared
- Focus returns to the first input
- A status message appears
- A countdown begins
- The resend button is temporarily disabled

Example:

```text
Resend (15s)
```

After the countdown finishes:

```text
Resend
```

becomes available again.

---

## 🎨 Visual States

The OTP inputs contain several visual states.

### Default

Empty input waiting for a digit.

### Focus

The active field:

- Moves slightly upward
- Gets a cyan border
- Displays a glow effect

### Filled

Completed fields use a purple highlight.

### Success

Correct verification changes the fields to green.

### Error

Incorrect verification changes the fields to red and triggers the shake animation.

---

## 💎 Glassmorphism Design

The verification card uses a modern glass-style interface with:

- Transparent backgrounds
- Backdrop blur
- Soft borders
- Gradient highlights
- Glow effects
- Rounded corners
- Layered shadows

Example:

```css
backdrop-filter: blur(22px);
-webkit-backdrop-filter: blur(22px);
```

---

## ⚙️ Customization

### Change OTP Length

The current component uses six inputs.

To create a 4-digit OTP, use four fields instead:

```text
_ _ _ _
```

The JavaScript automatically uses the number of elements contained in the `inputs` array for several operations.

---

### Change Demo Code

In `script.js`:

```javascript
const DEMO_CODE = "123456";
```

For example:

```javascript
const DEMO_CODE = "987654";
```

> In a real application, verification should happen securely on the server. A production OTP should never be validated against a hard-coded code in client-side JavaScript.

---

### Change Resend Timer

Find:

```javascript
let seconds = 15;
```

For a 30-second timer:

```javascript
let seconds = 30;
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
    --red: #ef4444;
}
```

---

### Change Input Spacing

```css
.otp-group {
    gap: 11px;
}
```

---

### Change Input Shape

Adjust:

```css
.otp-input {
    border-radius: 17px;
}
```

Use a smaller value for sharper corners or a larger value for a softer appearance.

---

## 📱 Responsive Design

The component adapts to smaller screens.

The six inputs automatically shrink while keeping:

- Equal dimensions
- Proper spacing
- Readable digits
- Comfortable interaction

Additional breakpoints are included for smaller mobile devices.

---

## ♿ Accessibility

The project includes:

- Native HTML inputs
- Native button elements
- Individual labels through `aria-label`
- Keyboard navigation
- Numeric mobile keyboard support
- Visible focus states
- Reduced-motion support

The first input also includes:

```html
autocomplete="one-time-code"
```

which can help supported browsers and mobile devices recognize verification codes.

---

## 🚀 Performance

The component is lightweight and requires no external dependencies.

It uses:

- Native DOM events
- CSS transitions
- CSS animations
- Web Animations API
- Small JavaScript functions
- No frameworks
- No external UI libraries

---

## ⚠️ Production Note

This project demonstrates the **frontend UI and interaction** of an OTP verification system.

A real authentication system should:

- Generate OTP codes securely on the server
- Store them securely and temporarily
- Use expiration times
- Limit verification attempts
- Rate-limit resend requests
- Never expose the expected OTP in frontend JavaScript
- Verify codes on the backend
- Use HTTPS

The hard-coded `123456` code is included only for demonstration purposes.

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

# 🔐 OTP Input

Moderní interaktivní komponenta pro zadávání **jednorázového ověřovacího kódu (OTP)** vytvořená pomocí HTML, CSS a JavaScriptu.

Obsahuje šest samostatných polí, automatické přeskakování mezi nimi, podporu vložení celého kódu, ovládání klávesnicí, validaci a časovač pro opětovné odeslání kódu.

Projekt je součástí kolekce **CSS WOW UI**.

---

## ✨ Funkce

- 6místný OTP kód
- Automatický přesun na další pole
- Návrat pomocí Backspace
- Vložení celého OTP kódu
- Pouze číselné hodnoty
- Navigace šipkami
- Ověření pomocí Enter
- Animované focus stavy
- Zvýraznění vyplněných polí
- Animace úspěšného ověření
- Shake animace při chybě
- Aktivace ověřovacího tlačítka
- Resend časovač
- Responzivní design
- Podpora klávesnice
- Bez externích knihoven

---

## 🛠 Použité technologie

- HTML5
- CSS3
- JavaScript (ES6)
- CSS Grid
- CSS Gradients
- Glassmorphism
- CSS Animations
- CSS Custom Properties
- Web Animations API
- DOM Events

---

## 📂 Struktura projektu

```text
14-OTPInput/
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
3. V prohlížeči otevři:

```text
index.html
```

Není potřeba žádná instalace ani externí knihovna.

---

## 🎯 Co si můžeš vyzkoušet

Projekt ukazuje:

- Tvorbu OTP formuláře
- Práci s více inputy
- Programové přesouvání focusu
- Keyboard events
- Paste events
- Filtrování číselných hodnot
- Spojení hodnot z více polí
- Validaci formuláře
- CSS animace podle stavu
- Countdown timer
- Aktivaci a deaktivaci tlačítek
- Responzivní formulářové komponenty

---

## 🔢 Zadávání OTP

Každé pole přijímá jeden znak:

```html
<input
    class="otp-input"
    type="text"
    inputmode="numeric"
    maxlength="1"
>
```

Po zadání čísla se focus automaticky přesune na další pole.

---

## 📋 Vložení celého kódu

Uživatel může vložit například:

```text
123456
```

JavaScript jednotlivá čísla automaticky rozdělí mezi šest polí.

To výrazně zlepšuje použitelnost například při kopírování kódu z e-mailu nebo jiné aplikace.

---

## 🔐 Demo ověření

Pro demonstrační účely je správný kód:

```text
123456
```

Po jeho zadání a kliknutí na **Verify Code** se zobrazí úspěšný stav.

Jakýkoliv jiný kód vyvolá chybovou animaci.

---

## 🔄 Resend

Tlačítko **Resend** simuluje opětovné odeslání OTP.

Po kliknutí:

- Vymaže současný kód
- Vrátí focus na první pole
- Spustí 15sekundový countdown
- Dočasně deaktivuje další odeslání

---

## ⚙️ Úpravy

Správný demo kód:

```javascript
const DEMO_CODE = "123456";
```

Délka resend časovače:

```javascript
let seconds = 15;
```

Hlavní barvy:

```css
:root {
    --cyan: #22d3ee;
    --purple: #a855f7;
    --pink: #f472b6;
    --green: #22c55e;
    --red: #ef4444;
}
```

---

## ⚠️ Důležité

Tento projekt demonstruje především **frontendovou část OTP rozhraní**.

V reálné aplikaci by OTP kód měl být:

- Generován na serveru
- Časově omezený
- Bezpečně ověřován na backendu
- Chráněn proti opakovaným pokusům
- Chráněn rate limitingem
- Přenášen pouze přes HTTPS

Správný OTP kód by nikdy neměl být uložen přímo ve frontendovém JavaScriptu.

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