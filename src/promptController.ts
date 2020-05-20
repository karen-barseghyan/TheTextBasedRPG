export class promptController{

/*
    let allowPrompt = 1;
    let waitForAttack = 0;
    let textSpeed=10;
*/

allowPrompt : number;
waitForAttack : number;
textSpeed: number;



constructor(allowPrompt : number, waitForAttack : number, textSpeed: number){
this.allowPrompt = allowPrompt;
this.waitForAttack =  waitForAttack;
this.textSpeed = textSpeed;
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