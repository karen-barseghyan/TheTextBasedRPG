export class playerInventory{


hasMirror : number;
armorLevel : number;
helmetLevel : number;
glovesLevel : number;
soulAmount : number;
keyAmount : number;
weaponLevel : number;
healthPotionAmount : number;
sanityPotionAmount : number;
ringLevel : number;
shieldLevel : number;


    constructor(hasMirror : number, armorLevel : number, helmetLevel : number, glovesLevel : number, soulAmount : number, keyAmount : number, weaponLevel : number, healthPotionAmount : number,sanityPotionAmount : number, ringLevel : number, shieldLevel : number){
      this.hasMirror = hasMirror;
      this.armorLevel = armorLevel;
      this.helmetLevel = helmetLevel;
      this.glovesLevel = glovesLevel;
      this.soulAmount = soulAmount;
      this.keyAmount = keyAmount;
      this.weaponLevel = weaponLevel;
      this.healthPotionAmount = healthPotionAmount;
      this.sanityPotionAmount = sanityPotionAmount;
      this.ringLevel = ringLevel;
      this.shieldLevel = shieldLevel;
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