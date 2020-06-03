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
}