



//_________________________________________________________
//Class building the Floor.




export class floorBuilder {


    floor: number;
    previousFloor: number;
    enemy: number;
    previousEnemy: number;
    item: number;
    previousItem: number;
    move: number;
    previousMove: number;
    enemyIsAlive: boolean;
    itemIsOnGround: boolean;
    animation: number;


    constructor(floor: number, previousFloor: number, enemy: number, previousEnemy: number, item: number, previousItem: number, move: number, previousMove: number, enemyIsAlive: boolean, itemIsOnGround: boolean, animation: number) {

        this.floor = floor;
        this.previousFloor = previousFloor;
        this.enemy = enemy;
        this.previousEnemy = previousEnemy;
        this.item = item;
        this.previousItem = previousItem;
        this.move = move;
        this.previousMove = previousMove;
        this.enemyIsAlive = enemyIsAlive;
        this.itemIsOnGround = itemIsOnGround;
        this.animation = animation;
    }
}