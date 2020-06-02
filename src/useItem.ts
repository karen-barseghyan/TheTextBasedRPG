    //_________________________________________________________
    //Class responsible for item usage (including weapon)

import { enemyStatsMemory, floorBuilderMemory, playerStatsMemory, combatControllerMemory, promptControllerMemory, showDialogue } from "./index";
import { showGraphics } from "./showGraphics";
import { showInfo } from "./showInfo";
import { playerInventoryMemory } from "./inventory";
import * as settings from "./settings";
    
    export class useItem {
        constructor(whichItem: string) {

            switch (whichItem) {
                case settings.useHealthPotion:
                    if (playerInventoryMemory.healthPotionAmount >= settings.itemSingular) {
                        enemyStatsMemory.enemyOnScreen = false;
                        new showGraphics(0, 0, floorBuilderMemory.floor, 5);
                        showDialogue.showInfo_isItemUsed();
                        playerStatsMemory.playerHealth = settings.maxPlayerStats;
                        playerInventoryMemory.healthPotionAmount = playerInventoryMemory.healthPotionAmount - settings.itemSingular;
                    }
                    else {
                        showDialogue.showInfo_isItemUnavailable();
                    }
                    break;

                case settings.attack:
                    enemyStatsMemory.enemyOnScreen = true;
                    new showGraphics(floorBuilderMemory.enemy + 10, 0, floorBuilderMemory.floor, 1);
                    if (enemyStatsMemory.enemyHealth >= settings.enemyDead) {
                        combatControllerMemory.attackStrength = Math.round(playerInventoryMemory.weaponLevel + playerStatsMemory.playerStrength - enemyStatsMemory.enemyDefense - enemyStatsMemory.enemyDexterity + (0.5 * playerInventoryMemory.glovesLevel));
                        if (combatControllerMemory.attackStrength < 1) {
                            combatControllerMemory.attackStrength = 1;
                        }
                        console.log("Your power" + combatControllerMemory.attackStrength);
                        enemyStatsMemory.enemyHealth = enemyStatsMemory.enemyHealth - combatControllerMemory.attackStrength;

                        if (enemyStatsMemory.enemyHealth < settings.enemyDying) {
                            enemyStatsMemory.enemyHealth = settings.enemyDead;
                        }
                    }

                    showDialogue.showInfo_isSwordUsed();
                    promptControllerMemory.waitForAttack = true;



                    setTimeout(() => {

                        if (floorBuilderMemory.enemyIsAlive == false) {
                            promptControllerMemory.waitForAttack = false;
                        };

                        if (floorBuilderMemory.enemyIsAlive == true) {

                            combatControllerMemory.enemyAttackStrength = Math.round(enemyStatsMemory.enemyStrength - (playerStatsMemory.playerDefense / 5) - (playerStatsMemory.playerDexterity / 5) - (0.5 * playerInventoryMemory.shieldLevel));

                            console.log("Enemy power" + combatControllerMemory.enemyAttackStrength);

                            if (combatControllerMemory.enemyAttackStrength < 0) {
                                combatControllerMemory.enemyAttackStrength = 0;
                            }

                            playerStatsMemory.playerHealth = playerStatsMemory.playerHealth - combatControllerMemory.enemyAttackStrength;
                            
                            if (playerStatsMemory.playerHealth < settings.playerIsDead) {
                                if (playerStatsMemory.playerSanity > 1){
                                    playerStatsMemory.playerHealth = settings.sanityShield;
                                    playerStatsMemory.playerSanity = playerStatsMemory.playerSanity - settings.sanityDrain;
                                    console.log("Sanity Hit: Taken, current Sanity:" + playerStatsMemory.playerSanity);
                                }
                                else{
                                playerStatsMemory.playerHealth = 1;
                                }
                            }

                            new showGraphics(floorBuilderMemory.enemy + 10, 0, floorBuilderMemory.floor, 2);
                            showDialogue.showInfo_isEnemyAttacking();
                            promptControllerMemory.waitForAttack = false;
                        }
                    }, 2000);





                    break;


                case settings.useSanityPotion:
                    if (playerInventoryMemory.sanityPotionAmount >= 1) {
                        enemyStatsMemory.enemyOnScreen = false;
                        new showGraphics(0, 0, floorBuilderMemory.floor, 5);
                        showDialogue.showInfo_isItemUsed();
                        if (playerStatsMemory.playerSanity < 6) {
                            playerStatsMemory.playerSanity = 6;
                        }

                        if (playerStatsMemory.playerSanity >= 6) {
                            playerStatsMemory.playerSanity = playerStatsMemory.playerSanity + 1;
                        }

                        playerInventoryMemory.sanityPotionAmount = playerInventoryMemory.sanityPotionAmount - 1;
                    }
                    else {
                        showDialogue.showInfo_isItemUnavailable();
                    }
                    break;
                case settings.useSoul:
                    if (playerInventoryMemory.soulAmount >= 1) {
                        enemyStatsMemory.enemyOnScreen = true;
                        new showGraphics(floorBuilderMemory.enemy + 10, 0, floorBuilderMemory.floor, 6);
                        showDialogue.showInfo_isItemUsed();
                        if (enemyStatsMemory.enemyHealth > 0) {
                            enemyStatsMemory.enemyHealth = enemyStatsMemory.enemyHealth - 5;
                            if (enemyStatsMemory.enemyHealth < 2) {
                                enemyStatsMemory.enemyHealth = 1;
                            }
                        }

                        playerInventoryMemory.soulAmount = playerInventoryMemory.soulAmount - 1;
                    }
                    else {
                        showDialogue.showInfo_isItemUnavailable();
                    }
                    break;
            }

        }
    }