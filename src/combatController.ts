export class combatController{


enemyAttackStrength : number;
attackStrength : number;


constructor(enemyAttackStrength : number, attackStrength : number){
this.enemyAttackStrength = enemyAttackStrength;
this.attackStrength =  attackStrength;
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