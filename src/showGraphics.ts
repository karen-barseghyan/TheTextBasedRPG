//_________________________________________
//Class that shows all the graphics (including gifs)

export class showGraphics {
    constructor(shownEnemy: string | number, shownItem: string | number, shownFloor: string | number, shownAnimation: string | number) {
        (<HTMLInputElement>document.getElementById('enemy')).src = "gfx/enemies/" + shownEnemy + ".gif";
        (<HTMLInputElement>document.getElementById('item')).src = "gfx/items/" + shownItem + ".png";
        (<HTMLInputElement>document.getElementById('floor')).src = "gfx/floors/" + shownFloor + ".png";
        (<HTMLInputElement>document.getElementById('animation')).src = "gfx/animations/" + shownAnimation + ".gif";
    }
}

