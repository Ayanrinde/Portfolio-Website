// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

```
navbar.style.background =
    window.scrollY > 50
    ? "rgba(10,15,30,0.85)"
    : "rgba(0,0,0,0.2)";
```

});

// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
".glass-card, .project-card, .timeline-item, .section-title"
);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

revealElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

if(pageYOffset >= sectionTop){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== `#${current}`
){

link.classList.add("active");

}

});

});

// ===============================
// MOUSE GLOW
// ===============================

const glow =
document.createElement("div");

glow.classList.add("mouse-glow");

document.body.appendChild(glow);

document.addEventListener(
"mousemove",
(e)=>{

glow.style.left =
e.clientX+"px";

glow.style.top =
e.clientY+"px";

});

// ===============================
// PROJECT FILTERING
// ===============================

const filters =
document.querySelectorAll(
".filter-buttons button"
);

const projects =
document.querySelectorAll(
".project-card"
);

filters.forEach(button=>{

button.addEventListener(
"click",
()=>{

const filter =
button.dataset.filter;

projects.forEach(project=>{

if(
filter === "all" ||
project.classList.contains(filter)
){

project.style.display =
"block";

}else{

project.style.display =
"none";

}

});

});

});

// ===============================
// GITHUB API
// ===============================

const githubUsername =
"YOUR_USERNAME";

if(
document.getElementById("repos")
){

fetch(
`https://api.github.com/users/${githubUsername}`
)

.then(res=>res.json())

.then(data=>{

document.getElementById(
"repos"
).textContent =
data.public_repos;

document.getElementById(
"followers"
).textContent =
data.followers;

document.getElementById(
"following"
).textContent =
data.following;

})

.catch(err=>{

console.log(err);

});

}

// ===============================
// SCROLL TO TOP
// ===============================

const scrollBtn =
document.getElementById(
"scrollTop"
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 400){

scrollBtn.style.display =
"block";

}else{

scrollBtn.style.display =
"none";

}

});

scrollBtn?.addEventListener(
"click",
()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

// ===============================
// PARALLAX
// ===============================

window.addEventListener(
"scroll",
()=>{

const bg =
document.querySelector(
".gradient-bg"
);

bg.style.transform =
`translateY(${window.pageYOffset * 0.15}px)`;

});

// ===============================
// EMAILJS CONTACT FORM
// ===============================

// Initialize EmailJS
emailjs.init("BK0mDSO7sFIbmXeT3");

const form = document.getElementById("contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const button =
form.querySelector("button");

button.innerHTML = "Sending...";
button.disabled = true;

emailjs.sendForm(

"service_kagi5xu",
"template_qpzzul9",
this

)

.then(() => {

button.innerHTML = "Message Sent ✓";

alert("Thank you! Your message has been sent successfully.");

form.reset();

button.innerHTML = "Send Message";
button.disabled = false;

})

.catch((error)=>{

console.error(error);

alert("Failed to send message.");

button.innerHTML = "Send Message";
button.disabled = false;

});

});

}

// ===============================
// PARTICLE BACKGROUND
// ===============================

const canvas = document.getElementById("particles");

if (canvas) {

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];

    const particleCount =
        window.innerWidth > 768 ? 120 : 60;

    for (let i = 0; i < particleCount; i++) {

        particles.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height,

            // Tiny premium particles
            size: Math.random() * 1.5 + 0.3,

            speedX: (Math.random() - 0.5) * 0.4,

            speedY: (Math.random() - 0.5) * 0.4,

            opacity: Math.random() * 0.6 + 0.3

        });

    }

    function animateParticles() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {

            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0 || p.x > canvas.width)
                p.speedX *= -1;

            if (p.y < 0 || p.y > canvas.height)
                p.speedY *= -1;

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                p.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = `rgba(0,212,255,${p.opacity})`;

            ctx.fill();

        });

        requestAnimationFrame(animateParticles);

    }

    animateParticles();

}

// ===============================
// LOAD EVENT
// ===============================

window.addEventListener(
"load",
()=>{

document.body.classList.add(
"loaded"
);

});

// ===============================
// CONSOLE SIGNATURE
// ===============================

console.log(
"%cPremium Computer Science Portfolio Loaded",
"color:#00d4ff;font-size:18px;font-weight:bold;"
);

// ======================
// MOBILE MENU
// ======================

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", function () {

    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");

});

// Close menu when clicking a link

document.querySelectorAll(".mobile-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");

    });

});

document.addEventListener("click", function(e){

    if(
        !mobileMenu.contains(e.target) &&
        !hamburger.contains(e.target)
    ){

        mobileMenu.classList.remove("active");
        hamburger.classList.remove("active");

    }

});