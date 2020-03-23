/*monElem.onmousedown = function(event)
{

    let postItX = monElem.getBoundingClientRect().left;
    let postItY = monElem.getBoundingClientRect().top;
    let sourisX = event.clientX;
    let sourisY = event.clientY;
    let deplacementX = sourisX - postItX;
    let deplacementY = sourisY - postItY;
    console.log(deplacementX, deplacementY);

    monElem.style.position = 'absolute';
    monElem.style.zIndex = 1;


    function deplacement(x, y) {
        monElem.style.left = x - deplacementX + 'px';
        monElem.style.top = y - deplacementY + 'px';
    }

    deplacement(event.pageX, event.pageY);

}*/



//Choix des couleurs de post-its
const mettreRouge = document.querySelector(".red");
const mettreVert = document.querySelector(".green");
const mettreBleu = document.querySelector(".blue");
const mettreJaune = document.querySelector(".yellow");