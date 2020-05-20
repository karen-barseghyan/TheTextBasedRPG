



    //_________________________________________________________
    //Class building the Floor.

   


export class floorBuilder{

/*
    let floor = 0;
    let previousFloor: number = null;
    let enemy = 0;
    let previousEnemy: number = null;
    let item = 0;
    let previousItem: number = null;
    let move = 0;
    let previousMove: number = null;
    let enemyIsAlive = 0;
    let itemIsOnGround = 0;
*/

floor : number;
previousFloor: number;
enemy : number;
previousEnemy : number;
item : number;
previousItem: number;
move : number;
previousMove: number;
enemyIsAlive: number;
itemIsOnGround: number;
animation: number;


constructor(floor : number, previousFloor: number, enemy : number, previousEnemy : number, item : number, previousItem: number, move : number, previousMove: number, enemyIsAlive: number, itemIsOnGround: number, animation: number){

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
 /*
    getCurrentStage(): number {
        return this.stage;
    }
    setCurrentStage(stage: number): void {
         this.stage = stage;
    }
    increaseCurrentStage(): void {
        this.stage = this.stage + 1;
        console.log("działa");
   }
   */


}