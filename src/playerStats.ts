//__________________________________________________________________________________________________________________
//Statistics overall



export class playerStats {
    playerHealth: number;
    playerDefense: number;
    playerStrength: number;
    playerDexterity: number;
    playerDefenseDebuff: number;
    playerStrengthDebuff: number;
    playerDexterityDebuff: number;
    playerSanity: number;
    playerMorality: number;

    constructor(playerHealth: number, playerDefense: number, playerStrength: number, playerDexterity: number, playerDefenseDebuff: number, playerStrengthDebuff: number, playerDexterityDebuff: number, playerSanity: number, playerMorality: number) {
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
}