  
class PostIt {
    x;
    y;
    couleur;
    texte;
    numero;

    constructor(x, y, couleur, texte, numero)
    {
        this.x = x;
        this.y = y;
        this.couleur = couleur;
        this.texte = texte;
        this.numero = numero;
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

        if(document.getElementById("test" + this.numero) == null)
        {
            monElem = document.createElement('div');
            creation = true;
        }
        else
        {
            monElem = document.getElementById('test' + this.numero);
        }
        monElem.style.position = "fixed";
        monElem.id = 'test' + this.numero;
        monElem.style.top = this.posY + "px";
        monElem.style.left = this.posX + "px";
        monElem.style.width = "150px"; //modifiable par la suite
        monElem.style.height = "150px"; //modifiable par la suite 
        monElem.style.backgroundColor = "red" //modifiable par la suite
        monElem.innerHTML = '<p> Post-It</p>';
    
        if (creation)
        {
            document.body.appendChild(monElem);
            monElem.innerHTML += "numero : " + this.numero;
            jdeAttachElem("test" + this.numero, "div", ["basDroite"], "menBas" + this.numero)
            jdeAttachElem("menBas" + this.numero, 'i', ["fas", "fa-arrows-alt"], "", () => {
                idBouge = this.numero;
                onBouge = true;
            });
            jdeAttachElem("menBas" + this.numero, 'i', ["fas", "fa-trash-alt"], "", () => {
                document.getElementById("test" + this.numero).remove()
                supprimer(this.numero)
            });
        }
    }
     
}