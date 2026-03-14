document.addEventListener("DOMContentLoaded", function(){

/* COUNTDOWN */

const eventDate = new Date("March 17, 2026 19:00:00").getTime();

const timer = setInterval(function(){

const now = new Date().getTime();
const distance = eventDate - now;

const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
const seconds = Math.floor((distance % (1000*60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if(distance < 0){

clearInterval(timer);

startTacoConfetti();

}

},1000);


/* TACO RAIN */

function createTaco(){

const taco = document.createElement("div");

taco.innerHTML = "🌮";

taco.classList.add("falling-taco");

taco.style.left = Math.random()*100 + "vw";

taco.style.fontSize = (Math.random()*20+20)+"px";

taco.style.animationDuration = (Math.random()*3+3)+"s";

document.getElementById("taco-rain").appendChild(taco);

setTimeout(()=>{

taco.remove();

},6000);

}

setInterval(createTaco,600);


/* CONFETTI */

function startTacoConfetti(){

for(let i=0;i<150;i++){

setTimeout(()=>{

const taco = document.createElement("div");

taco.innerHTML="🌮";

taco.style.position="fixed";

taco.style.left=Math.random()*100+"vw";

taco.style.top="-50px";

taco.style.fontSize=(Math.random()*30+20)+"px";

taco.style.animation="fall 4s linear";

document.body.appendChild(taco);

setTimeout(()=>{

taco.remove();

},4000);

},i*40);

}

}


/* IMAGE MODAL */

const foodImages = document.querySelectorAll(".food-image img");

const modal = document.getElementById("image-modal");

const modalImg = document.getElementById("modal-image");

const closeModal = document.getElementById("close-modal");

foodImages.forEach(img => {

img.addEventListener("click", ()=>{

modal.style.display="flex";

modalImg.src = img.src;

});

});

closeModal.addEventListener("click", ()=>{

modal.style.display="none";

});

});

