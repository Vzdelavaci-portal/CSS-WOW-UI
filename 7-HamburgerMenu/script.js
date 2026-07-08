const button =
document.querySelector(".menu-btn");

const menu =
document.querySelector(".menu");

button.onclick=()=>{

button.classList.toggle("active");

menu.classList.toggle("active");

};