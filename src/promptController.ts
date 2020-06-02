export class promptController{

allowPrompt : boolean;
waitForAttack : boolean;
textSpeed: number;



constructor(allowPrompt : boolean, waitForAttack : boolean, textSpeed: number){
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