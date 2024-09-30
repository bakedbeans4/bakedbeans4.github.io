const lyd = new Audio("eating-chips.mp3");


document.getElementById("cookie").addEventListener("click", klikk);

let poengsum = 0;

let stor = true;

function klikk() {
    lyd.play();
    poengsum = poengsum + 1;
    document.getElementById("poeng").innerText = poengsum;

    if (stor) {
        document.getElementById("cookie").style.transform = "scale(0.8)";
        stor = false;
    } else {
        document.getElementById("cookie").style.transform = "scale(1)";
        stor = true;
    }

    if (poengsum > 9) {
        document.getElementById("cookie").src = "cookie2.png";
    }

    if (poengsum > 19){
        document.getElementById("cookie").src = "cookie3.png";
    }
}


document.getElementById("knapp").addEventListener("click",restart)


function restart() {
    poengsum = 0;
    document.getElementById("poeng").innerText =poengsum;
}