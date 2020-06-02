
    //_________________________________________________________

import { playerStatsMemory } from "./index";
import { playerInventory } from "./playerInventory";
import * as settings from "./settings";
export let playerInventoryMemory = new playerInventory(settings.startingHasMirror, settings.startingArmorLevel, settings.startingHelmetLevel, settings.startingGlovesLevel, settings.startingSoulAmount, settings.startingKeyAmount, settings.startingWeaponLevel, settings.startingHealthPotionAmount, settings.startingSanityPotionAmount, settings.startingRingLevel, settings.startingShieldLevel);
    //Class updating the inventory on right side of the screen.
    export class inventory {
        constructor(Mirror: number, Armor: number, Helmet: number, Gloves: number, Keys: number, Weapon: number, Health: string | number, Souls: number, Sanity: string | number, Ring: number, Shield: number) {

            if (Health != settings.itemNoDisplay) {
                if (Health == settings.itemSingular) {
                    document.getElementById("HealthInventory").innerHTML = "<u>" + Health + " Health Potion</u></br> </br>";
                }
                else {
                    document.getElementById("HealthInventory").innerHTML = "<u>" + Health + " Health Potions</u></br> </br>";
                }
            }
            else
                document.getElementById("HealthInventory").innerHTML = "";


            if (Sanity != settings.itemNoDisplay) {
                if (Sanity == settings.itemSingular) {
                    document.getElementById("SanityInventory").innerHTML = "<u>" + Sanity + " Sanity Potion</u></br> </br>";
                }
                else {
                    document.getElementById("SanityInventory").innerHTML = "<u>" + Sanity + " Sanity Potions</u></br> </br>";
                }
            }
            else
                document.getElementById("SanityInventory").innerHTML = "";


            if (Souls != settings.itemNoDisplay) {
                if (Souls == settings.itemSingular) {
                    document.getElementById("SoulInventory").innerHTML = "<u>" + Souls + " Stray Soul</u></br> </br>";
                }
                else {
                    document.getElementById("SoulInventory").innerHTML = "<u>" + Souls + " Stray Souls</u></br> </br>";
                }
            }
            else
                document.getElementById("SoulInventory").innerHTML = "";



            if (Keys != settings.itemNoDisplay) {
                if (Keys == settings.itemSingular) {
                    document.getElementById("KeysInventory").innerHTML = "<u>" + playerInventoryMemory.keyAmount + " Rusty Key</u></br> </br>";
                }
                else {
                    document.getElementById("KeysInventory").innerHTML = "<u>" + playerInventoryMemory.keyAmount + " Rusty Keys</u></br> </br>";
                }
            }
            else
                document.getElementById("KeysInventory").innerHTML = "";



            if (Armor != settings.itemNoDisplay) {
                playerStatsMemory.playerDefense = settings.basePlayerStats + playerInventoryMemory.armorLevel - playerStatsMemory.playerDefenseDebuff;
                if (playerStatsMemory.playerDefense > settings.maxPlayerStats) {
                    playerStatsMemory.playerDefense = settings.maxPlayerStats;
                }
                document.getElementById("ArmorInventory").innerHTML = "<u>Tough Armor</u> - +" + playerInventoryMemory.armorLevel + " defense bonus. </br> </br>";

            }
            else
                document.getElementById("ArmorInventory").innerHTML = "<u>Cloak</u> - No bonuses. </br> </br>";


            if (Shield != settings.itemNoDisplay) {
                document.getElementById("ShieldInventory").innerHTML = "<u>Solid Shield</u> - " + playerInventoryMemory.shieldLevel + "0% enemy damage reduction. </br> </br>";

            }
            else
                document.getElementById("ShieldInventory").innerHTML = "";

            if (Gloves != settings.itemNoDisplay) {
                document.getElementById("GlovesInventory").innerHTML = "<u>Spiked Gloves</u> - " + playerInventoryMemory.glovesLevel + "0% additional damage. </br> </br>";

            }
            else
                document.getElementById("GlovesInventory").innerHTML = "<u>Leather Gloves</u> - No bonuses. </br> </br>";




            if (Helmet != settings.itemNoDisplay) {
                playerStatsMemory.playerStrength = settings.basePlayerStats + playerInventoryMemory.helmetLevel - playerStatsMemory.playerStrengthDebuff;
                if (playerStatsMemory.playerStrength > settings.maxPlayerStats) {
                    playerStatsMemory.playerStrength = settings.maxPlayerStats;
                }
                document.getElementById("HelmetInventory").innerHTML = "<u>Steel Helmet</u> - +" + playerInventoryMemory.helmetLevel + " strength bonus. </br> </br>";
            }
            else
                document.getElementById("HelmetInventory").innerHTML = "<u>Cloth Hood</u> - No bonuses. </br> </br>";


            if (Ring != settings.itemNoDisplay) {
                playerStatsMemory.playerDexterity = settings.basePlayerStats + playerInventoryMemory.ringLevel - playerStatsMemory.playerDexterityDebuff;
                if (playerStatsMemory.playerDexterity > settings.maxPlayerStats) {
                    playerStatsMemory.playerDexterity = settings.maxPlayerStats;
                }
                document.getElementById("RingInventory").innerHTML = "<u>Shiny Ring</u> - +" + playerInventoryMemory.ringLevel + " dexterity bonus. </br> </br>";

            }
            else
                document.getElementById("RingInventory").innerHTML = "";


            if (Weapon != settings.itemNoDisplay) {
                document.getElementById("WeaponInventory").innerHTML = "<u>Sharp Sword</u> - " + playerInventoryMemory.weaponLevel + " attack power. </br> </br>";

            }
            else
                document.getElementById("WeaponInventory").innerHTML = "<u>Fists</u> - 1 attack power.</br> </br>";


        }


    }

    new inventory(playerInventoryMemory.hasMirror, playerInventoryMemory.armorLevel, playerInventoryMemory.helmetLevel, playerInventoryMemory.glovesLevel, playerInventoryMemory.keyAmount, playerInventoryMemory.weaponLevel, playerInventoryMemory.healthPotionAmount, playerInventoryMemory.soulAmount, playerInventoryMemory.sanityPotionAmount, playerInventoryMemory.ringLevel, playerInventoryMemory.shieldLevel);

