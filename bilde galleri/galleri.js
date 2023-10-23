

let bilde = document.getElementById("bilde");
bilde.src = "bilder/hell.png";

let bildeListe = [
    "hell.png",
    "knight with no name.png",
    "mysterious bog.png",
    "ocean castle.png"
];


let aktivBilde = 0;
bilde.src = "bilder/" + bildeListe[3];

let knappFrem = document.getElementById("knappfrem") ;
let knappTilbake = document.getElementById("knappTilbake");

knappFrem.addEventListener("click", frem);

function frem () {
aktivBilde = aktivBilde + 1;
bilde.src = "bilder/" + bildeListe[aktivBilde];

}
knappTilbake.addEventListener("click", Tilbake);

function Tilbake () {
aktivBilde = aktivBilde - 1;
bilde.src = "bilder/" + bildeListe[aktivBilde];
}

document.addEventListener("keydown", tastatur );

function tastatur(evt) {
console.log("Du trykte på: " + evt.keyCode);
if(evt.keyCode == 37){
console.log("Du trykte til venstre..")
Tilbake();
}
if(evt.keyCode == 39) {
console.log("Du trykte til høyre..")
frem();

}

}