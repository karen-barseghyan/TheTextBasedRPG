export class enemyStats{

/*
    let enemyHealth = 1;
    let enemyDefense = 1;
    let enemyStrength = 1;
    let enemyDexterity = 1;
    let enemyOnScreen = 0;
    let itemToUse = 0;
    let potionBackOpen = 0;
    let rummageOpen = 0;

*/

enemyHealth : number;
enemyDefense : number;
enemyStrength : number;
enemyDexterity : number;
enemyOnScreen : number;
itemToUse : number;
potionBackOpen : number;
rummageOpen : number;




    constructor(enemyHealth : number, enemyDefense : number, enemyStrength : number, enemyDexterity : number, enemyOnScreen : number, itemToUse : number, potionBackOpen : number, rummageOpen : number){
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