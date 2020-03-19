class PostIt
{
    x;
    y;
    color;
    /*largeur;
    hauteur;*/

    constructor(x, y, color, /*largeur, hauteur*/)
    {
        this.x = x;
        this.y = y;
        this.color = color;
        /*this.largeur = largeur;
        this.hauteur = hauteur;*/
    }

    changePlace(x, y)
    {
        this.x = x;
        this.y = y;
    }

    changeColor(couleur)
    {
        this.color = couleur;
    }

    afficheTest()
    {
        let monElem = document.createElement('div')
        monElem.style.position = "fixed";
        monElem.style.top = this.y + "px";
        monElem.style.left = this.x + "px";
        monElem.style.width = "150px";
        monElem.style.height = "150px";
        monElem.style.backgroundColor = this.couleur;
        monElem.style.padding = "5px";
        monElem.style.color = "black";
        monElem.innerHTML = "PostIt";
        document.body.appendChild(monElem);
    }
}

postIt1 = new ClasseTest(100, 200, "red");
postIt2 = new ClasseTest(300, 400, "yellow");
postIt1.afficheTest();
postIt2.afficheTest();