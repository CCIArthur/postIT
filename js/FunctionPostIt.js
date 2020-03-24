let onBouge = false;
let x;
let y;
let idBouge = 0;
const addRed = document.querySelector(".red");
var tableau = new Array();

addRed.addEventListener("click", function () {
    console.log("Click rouge");
    monTest1 = new PostIt(150, 100, "red", "Post ");
    monTest1.afficheTest();
    tableau.push(monTest1);
    console.log(tableau);
});


document.addEventListener('mousemove', e => {
    x = e.clientX;
    y = e.clientY;
});

document.addEventListener('mouseup', () => {
    console.log("on stop");
    idBouge = 0
    onBouge = false;
});

document.getElementById('ajouter').addEventListener('mousedown', () => {
    let pi = new PostIt(150, 100, "red", "1", tableau.length + 1);
    tableau.push(pi);
    //onBouge = true;
    tableau[(tableau.length - 1)].afficheTest();
    console.log(tableau);
});

function refresh() {
    if (onBouge && idBouge != 0) {
        console.log("on déplace ! "+idBouge)
        tableau[(idBouge - 1)].changePlace(x, y);
        tableau[(idBouge - 1)].afficheTest();
    }
    setTimeout(refresh, 200);
}

refresh();


// AJOUTER LES BOUTONS AU POSTIT
function jdeAttachElem(parentId, elem, classElem = [], idElem = "", fonct = "") {
    let elemACreer = document.createElement(elem)
    if (classElem.length > 0) {
        for (let uneClasse in classElem) {
            elemACreer.classList.add(classElem[uneClasse])
        }

    }
    if (idElem != "") {
        elemACreer.id = idElem
    }
    if (fonct != "") {
        elemACreer.addEventListener('click', fonct);
    }
    document.getElementById(parentId).appendChild(elemACreer)

}

function supprimer(numero) {
    delete tableau[numero - 1]
}
