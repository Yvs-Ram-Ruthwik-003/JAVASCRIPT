//Counter program

const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countlable = document.getElementById("countlabel");
let count = 0;

increase.onclick=function(){
    count++;
    countlable.textContent = count;
}

decrease.onclick=function(){
    count--;
    countlable.textContent = count;
}
 reset.onclick = function(){
    count = 0;
    countlable.textContent = count;
 }