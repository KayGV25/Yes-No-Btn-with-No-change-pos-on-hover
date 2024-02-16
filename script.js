const yes = document.getElementById("yes");
const no = document.getElementById("no");
const root = document.getElementById("root");

var i=0;

function changePos(){
    const x = Math.floor(Math.random() * (window.innerWidth - 200));
    const y = Math.floor(Math.random() * (window.innerHeight - 150));
        
    no.style.left = `${x}px`;
    no.style.top = `${y}px`;
}

function init(){
    no.style.left = `${yes.offsetLeft}px`;
    no.style.top = `${yes.offsetTop + yes.offsetHeight}px`;
    if(window.innerWidth <= window.innerHeight){
        no.removeEventListener("mouseover", changePos);
        no.addEventListener("click", changePos)
    }
    else{
        no.removeEventListener("click", changePos);
        no.addEventListener("mouseover", changePos)
    }
}
function change(){
    root.innerHTML = '<h1 id="conTxt"></h1>';
    write();
}

function write(){
    const conTxt = document.getElementById("conTxt")
    res = `Thank You !`;
    if(i<res.length){
        conTxt.innerHTML += res.charAt(i);
        i++;
        setTimeout(write, 100);
    }
}
window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", init);