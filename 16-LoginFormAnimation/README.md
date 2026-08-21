# 🔐 Login Form Animation

A modern and interactive **Login Form Animation** built with HTML, CSS and JavaScript.

The component combines floating labels, animated focus states, password visibility controls, form validation, loading feedback and a successful login animation inside a polished glassmorphism interface.

Perfect for **login pages, dashboards, SaaS applications, admin panels and modern web applications**.

Part of the **CSS WOW UI** collection.

---

## ✨ Features

- Modern animated login form
- Floating input labels
- Animated focus states
- Email validation
- Password validation
- Show / hide password
- Custom Remember Me checkbox
- Forgot Password link
- Loading animation
- Success animation
- Error shake animation
- Dynamic status messages
- Social login buttons
- Glassmorphism design
- Gradient effects
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
- CSS Transitions
- CSS Custom Properties
- Web Animations
- DOM Events

---

## 📂 Project Structure

```text
16-LoginFormAnimation/
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

- Building modern login interfaces
- Creating floating labels
- Handling form submissions
- Validating user input
- Managing UI states with JavaScript
- Creating loading animations
- Creating success and error feedback
- Showing and hiding passwords
- Building custom checkboxes
- Working with CSS transitions
- Using CSS animations
- Creating responsive forms
- Building glassmorphism interfaces

---

## 📝 Floating Labels

The form uses animated labels that move when the input receives focus or contains a valid value.

```css
.input-group input:focus + label,
.input-group input:valid + label {
    top: 12px;

    transform:
        translateY(0);

    font-size: 11px;

    color: #67e8f9;
}
```

The result is a clean input interface without permanently occupying additional space for labels.

---

## ✨ Focus Animation

When an input receives focus, several visual effects are activated:

- Input moves slightly upward
- Border becomes cyan
- Background changes
- Soft glow appears
- Floating label changes color

```css
.input-group input:focus {
    transform:
        translateY(-2px);

    border-color:
        var(--cyan);

    box-shadow:
        0 0 0 4px rgba(34, 211, 238, 0.08),
        0 0 28px rgba(34, 211, 238, 0.15);
}
```

---

## 👁 Password Visibility

The password field includes a visibility toggle.

Users can switch between:

```text
Password hidden
```

and:

```text
Password visible
```

JavaScript changes the input type dynamically:

```javascript
password.type =
    passwordVisible
        ? "text"
        : "password";
```

The icon also changes depending on the current state.

---

## ☑️ Remember Me

The default browser checkbox is replaced with a custom animated checkbox.

```html
<label class="remember">

    <input
        type="checkbox"
        id="remember"
    >

    <span class="checkmark"></span>

    <span>
        Remember me
    </span>

</label>
```

When selected, the checkbox displays a gradient background and checkmark.

---

## 🔍 Form Validation

Before the simulated login begins, JavaScript checks the entered values.

### Email

The email field must:

- Not be empty
- Contain an `@` character

Example:

```javascript
if (!emailValue.includes("@")) {
    showError(
        "Please enter a valid email."
    );

    return;
}
```

### Password

The password must contain at least:

```text
6 characters
```

Example:

```javascript
if (
    passwordValue.length < 6
) {
    showError(
        "Password must contain at least 6 characters."
    );

    return;
}
```

---

## ❌ Error Animation

Invalid input triggers a shake animation.

```css
.login-form.error {
    animation:
        shake 0.38s ease;
}
```

The animation moves the form horizontally:

```css
@keyframes shake {

    0%,
    100% {
        transform:
            translateX(0);
    }

    20% {
        transform:
            translateX(-7px);
    }

    40% {
        transform:
            translateX(6px);
    }

    60% {
        transform:
            translateX(-4px);
    }

    80% {
        transform:
            translateX(3px);
    }
}
```

An error message is also displayed below the inputs.

---

## ⏳ Loading State

After successful frontend validation, the Sign In button changes into a loading state.

The button contains three states:

```html
<span class="button-text">
    Sign In
</span>

<span class="loader"></span>

<span class="success-icon">
    ✓
</span>
```

JavaScript activates the loading state:

```javascript
loginButton.classList.add(
    "loading"
);
```

The original button text disappears and an animated spinner appears.

---

## 🔄 Loading Spinner

The spinner uses a simple CSS rotation animation:

```css
.loader {
    border:
        3px solid rgba(2, 6, 23, 0.25);

    border-top-color:
        #020617;

    border-radius:
        50%;

    animation:
        spin 0.75s linear infinite;
}
```

Animation:

```css
@keyframes spin {
    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}
```

---

## ✅ Success Animation

After the simulated loading process finishes, the button changes into a success state.

The gradient becomes green and a checkmark appears.

```javascript
loginButton.classList.add(
    "success"
);
```

The status message changes to:

```text
Login successful!
```

The success state automatically disappears after a short delay.

---

## 🔐 Simulated Login

This project demonstrates the frontend interaction of a login form.

The login process is simulated using:

```javascript
setTimeout(() => {
    loginSuccess();
}, 1500);
```

This creates a short delay to demonstrate the loading state.

There is no real authentication backend connected to the project.

---

## 🌐 Social Login Buttons

The card includes example buttons for:

```text
Google
GitHub
Apple
```

They are currently visual UI elements only.

Example:

```html
<div class="social-login">

    <button type="button">
        G
    </button>

    <button type="button">
        GH
    </button>

    <button type="button">
        
    </button>

</div>
```

In a real application, these buttons could be connected to OAuth authentication providers.

---

## 💎 Glassmorphism Design

The main login card uses a transparent glass-style interface.

```css
.login-card {
    background:
        linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.03)
        );

    backdrop-filter:
        blur(22px);

    -webkit-backdrop-filter:
        blur(22px);
}
```

The design combines:

- Transparency
- Background blur
- Gradient colors
- Soft borders
- Glow effects
- Layered shadows
- Rounded corners

---

## 🌈 Gradient Theme

The main theme uses three accent colors:

```css
:root {
    --cyan: #22d3ee;
    --purple: #a855f7;
    --pink: #f472b6;
}
```

They are used throughout:

- Page heading
- Sign In button
- Checkbox
- Glow effects
- Focus states
- Decorative elements

---

## 🔐 Animated Login Icon

The login icon contains a subtle floating animation.

```css
.login-icon {
    animation:
        iconFloat 4s ease-in-out infinite;
}
```

The animation moves the icon slightly up and down:

```css
@keyframes iconFloat {

    0%,
    100% {
        transform:
            translateY(0);
    }

    50% {
        transform:
            translateY(-7px);
    }
}
```

---

## ⚙️ Customization

### Change Heading

```html
<h2>
    Welcome Back
</h2>
```

---

### Change Description

```html
<p class="description">
    Enter your account details to continue.
</p>
```

---

### Change Button Text

```html
<span class="button-text">
    Sign In
</span>
```

For example:

```text
Log In
```

or:

```text
Continue
```

---

### Change Minimum Password Length

Find:

```javascript
if (
    passwordValue.length < 6
)
```

For a minimum of 8 characters:

```javascript
if (
    passwordValue.length < 8
)
```

---

### Change Loading Duration

The simulated login currently waits:

```javascript
1500
```

milliseconds.

Change:

```javascript
setTimeout(() => {
    loginSuccess();
}, 1500);
```

For example:

```javascript
setTimeout(() => {
    loginSuccess();
}, 2500);
```

---

### Change Theme Colors

Edit:

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

## 📱 Responsive Design

The component adapts to smaller screens.

On mobile devices:

- Card padding is reduced
- Typography remains readable
- Inputs remain touch friendly
- Form options stack vertically
- Buttons remain full width

The component works on:

- Desktop
- Tablet
- Mobile

---

## ♿ Accessibility

The project includes:

- Native `<form>` element
- Native `<input>` elements
- Native buttons
- Associated input labels
- Password visibility button with `aria-label`
- Browser autocomplete attributes
- Keyboard interaction
- Visible focus states
- Reduced-motion support

Example:

```html
<input
    type="email"
    autocomplete="email"
>
```

and:

```html
<input
    type="password"
    autocomplete="current-password"
>
```

---

## ⚠️ Production Security

This project demonstrates the **frontend UI and animation** of a login form.

It does **not** implement real authentication.

A production login system should:

- Authenticate users on the backend
- Never store passwords in frontend JavaScript
- Hash passwords securely on the server
- Use HTTPS
- Protect against brute-force attacks
- Implement rate limiting
- Use secure sessions or authentication tokens
- Protect against CSRF where applicable
- Validate data on the server
- Use secure password reset procedures
- Implement appropriate session expiration

Frontend validation should only improve user experience.

It must never replace server-side validation.

---

## 💡 Possible Improvements

The component could be extended with:

- Real authentication API
- Registration form
- Password strength indicator
- Two-factor authentication
- OTP verification
- Passkey support
- OAuth login
- Login modal
- Animated form switching
- Account lockout messages
- Backend validation
- Dark / light theme toggle

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
- 🔑 Login Form Animation

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

# 🔐 Login Form Animation

Moderní a interaktivní **animovaný přihlašovací formulář** vytvořený pomocí HTML, CSS a JavaScriptu.

Komponenta kombinuje **floating labels, animované focus stavy, zobrazení hesla, validaci formuláře, loading animaci a úspěšné přihlášení** v moderním Glassmorphism designu.

Hodí se například pro:

- Přihlašovací stránky
- Dashboardy
- SaaS aplikace
- Admin panely
- Webové aplikace

Projekt je součástí kolekce **CSS WOW UI**.

---

## ✨ Funkce

- Moderní login formulář
- Floating labels
- Animované inputy
- Validace e-mailu
- Validace hesla
- Show / Hide Password
- Remember Me checkbox
- Forgot Password odkaz
- Loading spinner
- Success animace
- Error shake animace
- Dynamické stavové zprávy
- Social login tlačítka
- Glassmorphism design
- Gradientové efekty
- Responzivní design
- Reduced-motion podpora
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
- CSS Transitions
- CSS Custom Properties
- DOM Events

---

## 📂 Struktura projektu

```text
16-LoginFormAnimation/
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
3. Spusť:

```text
index.html
```

Není potřeba instalace ani externí knihovna.

---

## 🎯 Co si můžeš vyzkoušet

Projekt ukazuje:

- Tvorbu moderního login formuláře
- Floating labels
- Form submit events
- Frontend validaci
- Show / Hide Password
- Dynamické CSS stavy
- Loading animace
- Success a Error feedback
- Vlastní checkbox
- CSS transitions
- CSS animations
- Responzivní formuláře
- Glassmorphism design

---

## 📝 Floating Labels

Label se při aktivaci inputu přesune nahoru.

```css
.input-group input:focus + label,
.input-group input:valid + label {
    top: 12px;

    font-size: 11px;

    color: #67e8f9;
}
```

Díky tomu formulář zůstává kompaktní a zároveň přehledný.

---

## 👁 Zobrazení hesla

Kliknutím na ikonu oka lze přepnout mezi:

```text
Skryté heslo
```

a:

```text
Viditelné heslo
```

JavaScript mění:

```javascript
password.type =
    passwordVisible
        ? "text"
        : "password";
```

---

## ❌ Chybový stav

Pokud uživatel zadá neplatné údaje, formulář:

- Zobrazí chybovou zprávu
- Spustí shake animaci
- Přesune focus na problémové pole

Například:

```text
Please enter a valid email.
```

---

## ⏳ Loading Animation

Po úspěšné frontend validaci se tlačítko přepne z:

```text
Sign In
```

na animovaný spinner.

JavaScript aktivuje:

```javascript
loginButton.classList.add(
    "loading"
);
```

---

## ✅ Success State

Po dokončení simulovaného přihlášení:

- Spinner zmizí
- Tlačítko zezelená
- Zobrazí se ✓
- Objeví se zpráva:

```text
Login successful!
```

---

## ☑️ Remember Me

Součástí formuláře je vlastní checkbox:

```text
Remember me
```

Jeho vzhled je vytvořen kompletně pomocí CSS.

---

## 🌐 Social Login

Součástí návrhu jsou také tlačítka pro:

```text
Google
GitHub
Apple
```

V tomto projektu jde pouze o UI demonstraci.

V reálné aplikaci mohou být propojena s OAuth autentizací.

---

## 💎 Glassmorphism

Karta používá kombinaci:

- Transparentního pozadí
- Backdrop blur
- Gradientů
- Glow efektů
- Jemných borderů
- Stínů
- Zaoblených rohů

Výsledkem je moderní glass-style login panel.

---

## ⚙️ Přizpůsobení

Můžeš jednoduše změnit:

- Nadpis
- Text formuláře
- Placeholder / label
- Minimální délku hesla
- Loading duration
- Barvy
- Social login tlačítka
- Text Sign In tlačítka

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

## 📱 Responzivní design

Formulář funguje na:

- Desktopu
- Tabletu
- Mobilu

Na menších obrazovkách se automaticky upraví padding a rozložení formuláře.

---

## ⚠️ Bezpečnost

Tento projekt demonstruje pouze **frontendovou část přihlašovacího formuláře**.

V produkční aplikaci musí skutečné ověření probíhat na serveru.

Nikdy:

```text
❌ Neukládej hesla do frontendového JavaScriptu
❌ Neověřuj skutečné přihlašovací údaje pouze v prohlížeči
❌ Neukládej hesla v plaintextu
```

Produkční aplikace by měla používat:

```text
✓ HTTPS
✓ Backend authentication
✓ Secure password hashing
✓ Rate limiting
✓ Secure sessions / tokens
✓ Server-side validation
```

---

## 💡 Možná rozšíření

Projekt lze dále rozšířit například o:

- Registration Form
- Password Strength Meter
- OTP Verification
- Two-Factor Authentication
- Passkeys
- OAuth
- Login / Register switch
- Forgot Password modal
- Backend API
- Dark / Light Mode

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
- 🔑 Login Form Animation

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