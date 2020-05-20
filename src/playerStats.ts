    //__________________________________________________________________________________________________________________
    //Statistics overall



export class playerStats{

/*
    let playerHealth = 11;
    let playerDefense = 6;
    let playerStrength = 6;
    let playerDexterity = 6;
    let playerDefenseDebuff = 0;
    let playerStrengthDebuff = 0;
    let playerDexterityDebuff = 0;
    let playerSanity = 6;
    let playerMorality = 6;
*/

playerHealth : number;
playerDefense : number;
playerStrength : number;
playerDexterity : number;
playerDefenseDebuff : number;
playerStrengthDebuff : number;
playerDexterityDebuff : number;
playerSanity : number;
playerMorality : number;




    constructor(playerHealth : number, playerDefense : number, playerStrength : number, playerDexterity : number, playerDefenseDebuff : number, playerStrengthDebuff : number, playerDexterityDebuff : number, playerSanity : number, playerMorality : number){
      this.playerHealth = playerHealth;
      this.playerDefense = playerDefense;
      this.playerStrength = playerStrength;
      this.playerDexterity = playerDexterity;
      this.playerDefenseDebuff = playerDefenseDebuff;
      this.playerStrengthDebuff = playerStrengthDebuff;
      this.playerDexterityDebuff = playerDexterityDebuff;
      this.playerSanity = playerSanity;
      this.playerMorality = playerMorality;
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