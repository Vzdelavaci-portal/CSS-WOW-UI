const fill=document.querySelector(".progress-fill");
const percent=document.getElementById("percent");

const start=document.getElementById("start");
const reset=document.getElementById("reset");

let progress=0;
let timer=null;

start.onclick=()=>{

clearInterval(timer);

timer=setInterval(()=>{

progress++;

fill.style.width=progress+"%";

percent.textContent=progress+"%";

if(progress>=100){

clearInterval(timer);

}

},35);

};

reset.onclick=()=>{

clearInterval(timer);

progress=0;

fill.style.width="0%";

percent.textContent="0%";

};