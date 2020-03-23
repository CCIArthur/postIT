  
class PostIt {
    x;
    y;
    couleur;
    texte;

    constructor(x, y, couleur, texte) {
        this.x = x;
        this.y = y;
        this.couleur = couleur;
        this.texte = texte;
    }

    changePlace(x, y) {
        this.x = x;
        this.y = y;
    }

    changeColor(color) {
        this.couleur = color;
    }

    afficheTest() {
        let monElem;
        let creation = false;

        if(document.getElementById("test") == null)
        {
            monElem = document.createElement('div');
            creation = true;
        }
        else
        {
            monElem = document.getElementById('test');
        }
        monElem.style.position = "fixed";
        monElem.id = 'test';
        monElem.style.top = this.posY + "px";
        monElem.style.left = this.posX + "px";
        monElem.style.width = "150px"; //modifiable par la suite
        monElem.style.height = "150px"; //modifiable par la suite 
    }


    /*
     Si ma voiture n'existe pas je l'ajoute au html
     if (creation) {
        document.body.appendChild(monElem);
     }
     */
}