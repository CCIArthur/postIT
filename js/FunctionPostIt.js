let onBouge = false;
let x;
let y;
//let idBouge = 0;
const addRed = document.querySelector(".red");
var tableau = new Array();

addRed.addEventListener("click", function() {
    console.log("Hello Red");
    monTest1 = new PostIt(150, 100, "red", "Post ");
    monTest1.afficheTest();
    tableau.push(monTest1);
    console.log(tableau);
});


document.addEventListener('mousemove', e =>
{
    x = e.clientX;
    y = e.clientY;
});

document.addEventListener('mouseup', () =>
{
    console.log("on stop");
    idBouge = 0
    onBouge = false;
});

document.getElementById('ajouter').addEventListener('mousedown', () => 
{
    let pi = new PostIt(150, 100, "red", "1");
    tableau.push(pi);
    //onBouge = true;
    tableau[(tableau.length -1)].afficheTest();
});

function refresh() {
    if (onBouge && idBouge != 0) {
        console.log("on déplace !")
        tabDingo[(idBouge - 1)].changePlace(x, y);
        tabDingo[(idBouge - 1)].afficheTest();
    }
    setTimeout(refresh, 200)
}

refresh();