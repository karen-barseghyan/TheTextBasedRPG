
    //_________________________________________________________

import { playerStatsMemory } from "./index";
import { playerInventory } from "./playerInventory";
export let playerInventoryMemory = new playerInventory(1, 0, 0, 0, 10, 5, 0, 10, 10, 0, 0);
    //Class updating the inventory on right side of the screen.
    export class inventory {
        constructor(Mirror: number, Armor: number, Helmet: number, Gloves: number, Keys: number, Weapon: number, Health: string | number, Souls: number, Sanity: string | number, Ring: number, Shield: number) {

            if (Health != 0) {
                if (Health == 1) {
                    document.getElementById("HealthInventory").innerHTML = "<u>" + Health + " Health Potion</u></br> </br>";
                }
                else {
                    document.getElementById("HealthInventory").innerHTML = "<u>" + Health + " Health Potions</u></br> </br>";
                }
            }
            else
                document.getElementById("HealthInventory").innerHTML = "";


            if (Sanity != 0) {
                if (Sanity == 1) {
                    document.getElementById("SanityInventory").innerHTML = "<u>" + Sanity + " Sanity Potion</u></br> </br>";
                }
                else {
                    document.getElementById("SanityInventory").innerHTML = "<u>" + Sanity + " Sanity Potions</u></br> </br>";
                }
            }
            else
                document.getElementById("SanityInventory").innerHTML = "";


            if (Souls != 0) {
                if (Souls == 1) {
                    document.getElementById("SoulInventory").innerHTML = "<u>" + 5 + " Stray Soul</u></br> </br>";
                }
                else {
                    document.getElementById("SoulInventory").innerHTML = "<u>" + 5 + " Stray Souls</u></br> </br>";
                }
            }
            else
                document.getElementById("SoulInventory").innerHTML = "";



            if (Keys != 0) {
                if (Keys == 1) {
                    document.getElementById("KeysInventory").innerHTML = "<u>" + playerInventoryMemory.keyAmount + " Rusty Key</u></br> </br>";
                }
                else {
                    document.getElementById("KeysInventory").innerHTML = "<u>" + playerInventoryMemory.keyAmount + " Rusty Keys</u></br> </br>";
                }
            }
            else
                document.getElementById("KeysInventory").innerHTML = "";



            if (Armor != 0) {
                playerStatsMemory.playerDefense = 6 + playerInventoryMemory.armorLevel - playerStatsMemory.playerDefenseDebuff;
                if (playerStatsMemory.playerDefense > 11) {
                    playerStatsMemory.playerDefense = 11;
                }
                document.getElementById("ArmorInventory").innerHTML = "<u>Tough Armor</u> - +" + playerInventoryMemory.armorLevel + " defense bonus. </br> </br>";

            }
            else
                document.getElementById("ArmorInventory").innerHTML = "<u>Cloak</u> - No bonuses. </br> </br>";


            if (Shield != 0) {
                document.getElementById("ShieldInventory").innerHTML = "<u>Solid Shield</u> - " + playerInventoryMemory.shieldLevel + "0% enemy damage reduction. </br> </br>";

            }
            else
                document.getElementById("ShieldInventory").innerHTML = "";

            if (Gloves != 0) {
                document.getElementById("GlovesInventory").innerHTML = "<u>Spiked Gloves</u> - " + playerInventoryMemory.glovesLevel + "0% additional damage. </br> </br>";

            }
            else
                document.getElementById("GlovesInventory").innerHTML = "<u>Leather Gloves</u> - No bonuses. </br> </br>";




            if (Helmet != 0) {
                playerStatsMemory.playerStrength = 6 + playerInventoryMemory.helmetLevel - playerStatsMemory.playerStrengthDebuff;
                if (playerStatsMemory.playerStrength > 11) {
                    playerStatsMemory.playerStrength = 11;
                }
                document.getElementById("HelmetInventory").innerHTML = "<u>Steel Helmet</u> - +" + playerInventoryMemory.helmetLevel + " strength bonus. </br> </br>";
            }
            else
                document.getElementById("HelmetInventory").innerHTML = "<u>Cloth Hood</u> - No bonuses. </br> </br>";


            if (Ring != 0) {
                playerStatsMemory.playerDexterity = 6 + playerInventoryMemory.ringLevel - playerStatsMemory.playerDexterityDebuff;
                if (playerStatsMemory.playerDexterity > 11) {
                    playerStatsMemory.playerDexterity = 11;
                }
                document.getElementById("RingInventory").innerHTML = "<u>Shiny Ring</u> - +" + playerInventoryMemory.ringLevel + " dexterity bonus. </br> </br>";

            }
            else
                document.getElementById("RingInventory").innerHTML = "";


            if (Weapon != 0) {
                document.getElementById("WeaponInventory").innerHTML = "<u>Sharp Sword</u> - " + playerInventoryMemory.weaponLevel + " attack power. </br> </br>";

            }
            else
                document.getElementById("WeaponInventory").innerHTML = "<u>Fists</u> - 1 attack power.</br> </br>";


        }


    }

     //Inventory Status:

    //let playerInventoryMemory = new playerInventory(1, 0, 0, 0, 10, 5, 0, 10, 10, 0, 0);
    new inventory(playerInventoryMemory.hasMirror, playerInventoryMemory.armorLevel, playerInventoryMemory.helmetLevel, playerInventoryMemory.glovesLevel, playerInventoryMemory.keyAmount, playerInventoryMemory.weaponLevel, playerInventoryMemory.healthPotionAmount, playerInventoryMemory.soulAmount, playerInventoryMemory.sanityPotionAmount, playerInventoryMemory.ringLevel, playerInventoryMemory.shieldLevel);

