  
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
        let monElem = document.createElement("div");
        monElem.className = "notes";
        monElem.style.position = "fixed";
        monElem.style.top = this.y + "px";
        monElem.style.left = this.x + "px";
        monElem.style.width = "250px";
        monElem.style.height = "150px";
        monElem.style.backgroundColor = this.couleur;
        monElem.style.padding = "5px";
        monElem.style.color = "black";
        monElem.innerHTML = ` <h3> ${this.texte} </h3><p>Mon Post-it</p>`;
        document.body.appendChild(monElem);
    }
}

PostIt1 = new PostIt(150, 100, "red", "1");
PostIt2 = new PostIt(350, 300, "yellow", "2");