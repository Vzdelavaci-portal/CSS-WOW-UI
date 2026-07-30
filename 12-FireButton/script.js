const canvas = document.getElementById("fireCanvas");
const context = canvas.getContext("2d");

const fireWrapper = document.getElementById("fireWrapper");
const fireButton = document.getElementById("fireButton");
const effectLayer = document.getElementById("effectLayer");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

const particles = [];
const embers = [];

let canvasWidth = 0;
let canvasHeight = 0;
let devicePixelRatio = 1;

let isHovering = false;
let burstStrength = 0;
let previousTime = performance.now();

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

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function resizeCanvas() {
    const bounds = canvas.getBoundingClientRect();

    devicePixelRatio = Math.min(
        window.devicePixelRatio || 1,
        2
    );

    canvasWidth = bounds.width;
    canvasHeight = bounds.height;

    canvas.width = Math.round(
        canvasWidth * devicePixelRatio
    );

    canvas.height = Math.round(
        canvasHeight * devicePixelRatio
    );

    context.setTransform(
        devicePixelRatio,
        0,
        0,
        devicePixelRatio,
        0,
        0
    );
}

class FireParticle {
    constructor(intensity = 1) {
        this.reset(intensity, true);
    }

    reset(intensity = 1, initial = false) {
        const baseWidth = canvasWidth * 0.7;
        const baseLeft = canvasWidth * 0.15;

        this.x =
            baseLeft +
            Math.random() * baseWidth;

        this.y =
            canvasHeight -
            randomBetween(6, 22);

        if (initial) {
            this.y -= randomBetween(
                0,
                canvasHeight * 0.72
            );
        }

        const centerDistance = Math.abs(
            this.x - canvasWidth / 2
        );

        const centerFactor =
            1 -
            Math.min(
                centerDistance / (canvasWidth * 0.5),
                1
            );

        this.radius =
            randomBetween(18, 42) *
            (0.72 + centerFactor * 0.4) *
            intensity;

        this.initialRadius = this.radius;

        this.velocityX =
            randomBetween(-0.32, 0.32);

        this.velocityY =
            -randomBetween(0.75, 1.65) *
            intensity;

        this.life = randomBetween(0.72, 1);
        this.decay = randomBetween(0.006, 0.012);

        this.waveOffset = randomBetween(
            0,
            Math.PI * 2
        );

        this.waveSpeed = randomBetween(
            0.018,
            0.045
        );

        this.waveAmount = randomBetween(
            0.4,
            1.7
        );

        this.stretch = randomBetween(1.2, 2.3);
        this.opacity = randomBetween(0.42, 0.9);

        this.hotCore = Math.random() > 0.42;
    }

    update(deltaMultiplier, time) {
        const normalizedHeight =
            1 - this.y / canvasHeight;

        const inwardForce =
            (canvasWidth / 2 - this.x) *
            0.00055 *
            normalizedHeight;

        const turbulence =
            Math.sin(
                time * this.waveSpeed +
                this.waveOffset
            ) * this.waveAmount;

        this.velocityX += inwardForce;

        this.x +=
            (
                this.velocityX +
                turbulence * 0.16
            ) *
            deltaMultiplier;

        this.y +=
            this.velocityY *
            deltaMultiplier;

        this.velocityY *= 1.002;

        this.life -=
            this.decay *
            deltaMultiplier;

        this.radius =
            this.initialRadius *
            Math.max(this.life, 0.05);

        if (
            this.life <= 0 ||
            this.y < -this.radius * 2
        ) {
            this.reset(
                isHovering ? 1.08 : 1
            );
        }
    }

    draw() {
        const progress =
            1 -
            this.life;

        const alpha =
            Math.max(this.life, 0) *
            this.opacity;

        const width =
            this.radius *
            (
                1 -
                progress * 0.28
            );

        const height =
            this.radius *
            this.stretch *
            (
                1 +
                progress * 0.48
            );

        context.save();

        context.translate(
            this.x,
            this.y
        );

        context.scale(
            1,
            height / Math.max(width, 1)
        );

        const gradient =
            context.createRadialGradient(
                0,
                width * 0.18,
                0,
                0,
                0,
                width
            );

        fireColors.forEach((stop) => {
            gradient.addColorStop(
                stop.position,
                multiplyAlpha(
                    stop.color,
                    alpha
                )
            );
        });

        context.fillStyle = gradient;

        context.beginPath();
        context.arc(
            0,
            0,
            width,
            0,
            Math.PI * 2
        );
        context.fill();

        if (
            this.hotCore &&
            this.life > 0.42
        ) {
            const coreGradient =
                context.createRadialGradient(
                    0,
                    width * 0.24,
                    0,
                    0,
                    0,
                    width * 0.52
                );

            coreGradient.addColorStop(
                0,
                `rgba(255, 255, 245, ${
                    alpha * 0.8
                })`
            );

            coreGradient.addColorStop(
                0.45,
                `rgba(255, 234, 120, ${
                    alpha * 0.45
                })`
            );

            coreGradient.addColorStop(
                1,
                "rgba(255, 180, 30, 0)"
            );

            context.fillStyle = coreGradient;

            context.beginPath();
            context.arc(
                0,
                width * 0.1,
                width * 0.55,
                0,
                Math.PI * 2
            );
            context.fill();
        }

        context.restore();
    }
}

class Ember {
    constructor(strong = false) {
        this.reset(strong);
    }

    reset(strong = false) {
        this.x =
            canvasWidth * 0.18 +
            Math.random() *
            canvasWidth * 0.64;

        this.y =
            canvasHeight -
            randomBetween(12, 42);

        this.radius =
            strong
                ? randomBetween(1.5, 3.2)
                : randomBetween(0.8, 2.1);

        this.velocityX =
            randomBetween(-0.3, 0.3);

        this.velocityY =
            -randomBetween(
                strong ? 1.4 : 0.7,
                strong ? 2.8 : 1.7
            );

        this.life = 1;
        this.decay = randomBetween(
            0.01,
            0.025
        );

        this.color =
            Math.random() > 0.45
                ? "255, 213, 70"
                : "255, 92, 0";
    }

    update(deltaMultiplier) {
        this.x +=
            this.velocityX *
            deltaMultiplier;

        this.y +=
            this.velocityY *
            deltaMultiplier;

        this.velocityX +=
            randomBetween(-0.015, 0.015);

        this.life -=
            this.decay *
            deltaMultiplier;
    }

    draw() {
        context.beginPath();

        context.fillStyle =
            `rgba(${this.color}, ${this.life})`;

        context.shadowBlur = 10;
        context.shadowColor =
            `rgba(${this.color}, ${this.life})`;

        context.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );

        context.fill();

        context.shadowBlur = 0;
    }
}

function multiplyAlpha(color, multiplier) {
    const match = color.match(
        /rgba?\(([^)]+)\)/
    );

    if (!match) {
        return color;
    }

    const parts = match[1]
        .split(",")
        .map((value) => value.trim());

    const red = parts[0];
    const green = parts[1];
    const blue = parts[2];

    const originalAlpha =
        parts.length > 3
            ? Number(parts[3])
            : 1;

    return `rgba(
        ${red},
        ${green},
        ${blue},
        ${originalAlpha * multiplier}
    )`;
}

function createParticles() {
    particles.length = 0;

    const amount =
        window.innerWidth < 580
            ? 95
            : 135;

    for (
        let index = 0;
        index < amount;
        index += 1
    ) {
        particles.push(
            new FireParticle()
        );
    }
}

function drawFireBase() {
    const baseGradient =
        context.createRadialGradient(
            canvasWidth / 2,
            canvasHeight - 18,
            0,
            canvasWidth / 2,
            canvasHeight - 18,
            canvasWidth * 0.38
        );

    baseGradient.addColorStop(
        0,
        "rgba(255, 255, 225, 0.75)"
    );

    baseGradient.addColorStop(
        0.22,
        "rgba(255, 212, 70, 0.55)"
    );

    baseGradient.addColorStop(
        0.5,
        "rgba(255, 92, 0, 0.25)"
    );

    baseGradient.addColorStop(
        1,
        "rgba(255, 40, 0, 0)"
    );

    context.save();

    context.scale(1, 0.24);

    context.fillStyle = baseGradient;

    context.beginPath();

    context.arc(
        canvasWidth / 2,
        (canvasHeight - 18) / 0.24,
        canvasWidth * 0.38,
        0,
        Math.PI * 2
    );

    context.fill();

    context.restore();
}

function animate(currentTime) {
    const delta =
        Math.min(
            currentTime - previousTime,
            32
        );

    previousTime = currentTime;

    const deltaMultiplier =
        delta / 16.67;

    context.clearRect(
        0,
        0,
        canvasWidth,
        canvasHeight
    );

    context.globalCompositeOperation =
        "lighter";

    drawFireBase();

    const extraIntensity =
        burstStrength > 0
            ? 1 + burstStrength * 0.25
            : 1;

    particles.forEach((particle) => {
        if (burstStrength > 0) {
            particle.velocityY -=
                0.008 *
                burstStrength *
                deltaMultiplier;
        }

        particle.update(
            deltaMultiplier * extraIntensity,
            currentTime
        );

        particle.draw();
    });

    if (
        Math.random() <
        (
            isHovering
                ? 0.36
                : 0.16
        ) *
        deltaMultiplier
    ) {
        embers.push(
            new Ember(
                burstStrength > 0
            )
        );
    }

    for (
        let index = embers.length - 1;
        index >= 0;
        index -= 1
    ) {
        const ember = embers[index];

        ember.update(deltaMultiplier);
        ember.draw();

        if (
            ember.life <= 0 ||
            ember.y < -20
        ) {
            embers.splice(index, 1);
        }
    }

    burstStrength *= Math.pow(
        0.94,
        deltaMultiplier
    );

    context.globalCompositeOperation =
        "source-over";

    requestAnimationFrame(animate);
}

function createSparkExplosion() {
    const colors = [
        "#ffffff",
        "#fffbdc",
        "#ffd84f",
        "#ff9800",
        "#ff5722"
    ];

    for (
        let index = 0;
        index < 34;
        index += 1
    ) {
        const spark =
            document.createElement("span");

        spark.className = "spark";

        spark.style.setProperty(
            "--angle",
            `${randomBetween(0, 360)}deg`
        );

        spark.style.setProperty(
            "--distance",
            `${randomBetween(70, 195)}px`
        );

        spark.style.setProperty(
            "--size",
            `${randomBetween(2.5, 7)}px`
        );

        spark.style.setProperty(
            "--duration",
            `${randomBetween(0.45, 0.95)}s`
        );

        spark.style.setProperty(
            "--color",
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ]
        );

        effectLayer.appendChild(spark);

        spark.addEventListener(
            "animationend",
            () => spark.remove(),
            {
                once: true
            }
        );
    }
}

function createFlash() {
    const flash =
        document.createElement("span");

    flash.className = "flash";

    effectLayer.appendChild(flash);

    flash.addEventListener(
        "animationend",
        () => flash.remove(),
        {
            once: true
        }
    );
}

function createSmoke() {
    for (
        let index = 0;
        index < 7;
        index += 1
    ) {
        const smoke =
            document.createElement("span");

        smoke.className = "smoke";

        smoke.style.setProperty(
            "--left",
            `${randomBetween(34, 66)}%`
        );

        smoke.style.setProperty(
            "--size",
            `${randomBetween(38, 75)}px`
        );

        smoke.style.setProperty(
            "--drift",
            `${randomBetween(-42, 42)}px`
        );

        smoke.style.setProperty(
            "--duration",
            `${randomBetween(1.4, 2.5)}s`
        );

        effectLayer.appendChild(smoke);

        smoke.addEventListener(
            "animationend",
            () => smoke.remove(),
            {
                once: true
            }
        );
    }
}

function ignite() {
    burstStrength = 1;

    for (
        let index = 0;
        index < 18;
        index += 1
    ) {
        embers.push(
            new Ember(true)
        );
    }

    fireWrapper.classList.remove(
        "igniting"
    );

    void fireWrapper.offsetWidth;

    fireWrapper.classList.add(
        "igniting"
    );

    createFlash();
    createSparkExplosion();
    createSmoke();

    fireWrapper.addEventListener(
        "animationend",
        () => {
            fireWrapper.classList.remove(
                "igniting"
            );
        },
        {
            once: true
        }
    );
}

fireWrapper.addEventListener(
    "mouseenter",
    () => {
        isHovering = true;
    }
);

fireWrapper.addEventListener(
    "mouseleave",
    () => {
        isHovering = false;
    }
);

fireButton.addEventListener(
    "click",
    ignite
);

window.addEventListener(
    "resize",
    () => {
        resizeCanvas();
        createParticles();
    }
);

resizeCanvas();
createParticles();

if (prefersReducedMotion.matches) {
    particles.length = 45;
}

requestAnimationFrame(animate);