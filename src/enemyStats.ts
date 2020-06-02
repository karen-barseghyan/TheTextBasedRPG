export class enemyStats{


enemyHealth : number;
enemyDefense : number;
enemyStrength : number;
enemyDexterity : number;
enemyOnScreen : boolean;
itemToUse : number;
potionBackOpen : boolean;
rummageOpen : boolean;




    constructor(enemyHealth : number, enemyDefense : number, enemyStrength : number, enemyDexterity : number, enemyOnScreen : boolean, itemToUse : number, potionBackOpen : boolean, rummageOpen : boolean){
      this.enemyHealth = enemyHealth;
      this.enemyDefense = enemyDefense;
      this.enemyStrength = enemyStrength;
      this.enemyDexterity = enemyDexterity;
      this.enemyOnScreen = enemyOnScreen;
      this.itemToUse = itemToUse;
      this.potionBackOpen = potionBackOpen;
      this.rummageOpen = rummageOpen;
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