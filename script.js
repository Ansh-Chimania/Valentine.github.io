const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");
const page4 = document.getElementById("page-4");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const nextBtn = document.getElementById("next-btn");
const toPage4Btn = document.getElementById("to-page-4-btn");
const envelope = document.getElementById("envelope");

let noCount = 0;

/* BUTTERFLIES BACKGROUND */
const butterflies = [];
for (let i = 0; i < 12; i++) {
  const b = document.createElement("div");
  b.textContent = "🦋";
  b.style.position = "fixed";
  b.style.left = Math.random()*100+"%";
  b.style.top = Math.random()*100+"%";
  b.style.fontSize = (20 + Math.random()*25) + "px";
  b.style.opacity = "0.5";
  b.style.zIndex = "-1";
  document.body.appendChild(b);
  butterflies.push({ el: b, dx: (Math.random()-0.5)*0.5, dy: (Math.random()-0.5)*0.5 });
}

function animateButterflies() {
  butterflies.forEach(b => {
    let x = parseFloat(b.el.style.left) || 0;
    let y = parseFloat(b.el.style.top) || 0;
    const r = b.el.getBoundingClientRect();
    if (r.left < 0 || r.right > window.innerWidth) b.dx *= -1;
    if (r.top < 0 || r.bottom > window.innerHeight) b.dy *= -1;
    b.el.style.left = (r.left + b.dx) + "px";
    b.el.style.top = (r.top + b.dy) + "px";
  });
  requestAnimationFrame(animateButterflies);
}
animateButterflies();

/* NO BUTTON LOGIC */
noBtn.onmouseenter = () => {
  const texts = ["Pakki hai? 🥺", "Ek baar soch le 💔", "Itni jaldi na bolo 😭", "Mera dil mat todo 💔", "Thoda sa chance do 🥺", "Aisa mat karo na 😭", "Dil already dukh raha hai 💔", "Maan jao na please 🥺", "Itna stone-heart mat bano 😭", "Heart break ho raha hai 💔"];
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random()*70+"vw";
  noBtn.style.top = Math.random()*70+"vh";
  noBtn.textContent = texts[Math.floor(Math.random()*texts.length)];
  yesBtn.style.transform = `scale(${1 + 0.2 * noCount})`;
  noCount++;
};

/* PAGE NAVIGATION */
yesBtn.onclick = () => {
  new Audio("actually-good-fahhhh-sfx.mp3").play();
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
};

nextBtn.onclick = () => {
  page2.classList.add("hidden");
  page3.classList.remove("hidden");
};

toPage4Btn.onclick = () => {
  page3.classList.add("hidden");
  page4.classList.remove("hidden");
  initPhotoStack();
  createBhavyaFloatingText();
};

/* ENVELOPE */
envelope.onclick = () => envelope.classList.toggle("open");

/* PAGE 4: CLICK SCREEN TO CYCLE PHOTOS */
function initPhotoStack() {
  const images = document.querySelectorAll(".stack-img");
  let currentIndex = 0;
  if(images.length > 0) images[0].style.display = "block";

  page4.onclick = () => {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = "block";
  };
}

/* PAGE 4: FLOATING "I LOVE YOU BHAVYA" */
function createBhavyaFloatingText() {
  const container = document.getElementById("floating-container");
  setInterval(() => {
    const span = document.createElement("span");
    span.className = "floating-word";
    span.textContent = "Bhavya I Love You!❤️❤️";
    span.style.left = Math.random() * 85 + "vw";
    span.style.fontSize = (Math.random() * 15 + 20) + "px";
    span.style.animationDuration = (Math.random() * 3 + 5) + "s";
    container.appendChild(span);
    setTimeout(() => span.remove(), 6000);
  }, 700);
}