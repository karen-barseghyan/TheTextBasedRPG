    //_________________________________________________________
    //Class responsible for item usage (including weapon)

import { enemyStatsMemory, floorBuilderMemory, playerStatsMemory, combatControllerMemory, promptControllerMemory, showDialogue } from "./index";
import { showGraphics } from "./showGraphics";
import { showInfo } from "./showInfo";
import { playerInventoryMemory } from "./inventory";

    
    export class useItem {
        constructor(whichItem: string) {

            switch (whichItem) {
                case "health":
                    if (playerInventoryMemory.healthPotionAmount >= 1) {
                        enemyStatsMemory.enemyOnScreen = 0;
                        new showGraphics(0, 0, floorBuilderMemory.floor, 5);
                        //new showInfo(0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
                        showDialogue.showInfo_isItemUsed();
                        playerStatsMemory.playerHealth = 11;
                        playerInventoryMemory.healthPotionAmount = playerInventoryMemory.healthPotionAmount - 1;
                    }
                    else {
                        //new showInfo(0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
                        showDialogue.showInfo_isItemUnavailable();
                    }
                    break;

                case "weapon":
                    enemyStatsMemory.enemyOnScreen = 1;
                    new showGraphics(floorBuilderMemory.enemy + 10, 0, floorBuilderMemory.floor, 1);
                    if (enemyStatsMemory.enemyHealth > 0) {
                        combatControllerMemory.attackStrength = Math.round(playerInventoryMemory.weaponLevel + playerStatsMemory.playerStrength - enemyStatsMemory.enemyDefense - enemyStatsMemory.enemyDexterity + (0.5 * playerInventoryMemory.glovesLevel));
                        if (combatControllerMemory.attackStrength < 1) {
                            combatControllerMemory.attackStrength = 1;
                        }
                        console.log("Your power" + combatControllerMemory.attackStrength);
                        enemyStatsMemory.enemyHealth = enemyStatsMemory.enemyHealth - combatControllerMemory.attackStrength;

                        if (enemyStatsMemory.enemyHealth < 2) {
                            enemyStatsMemory.enemyHealth = 1;
                        }
                    }

                    //new showInfo(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
                    showDialogue.showInfo_isSwordUsed();
                    promptControllerMemory.waitForAttack = 1;



                    setTimeout(() => {

                        if (floorBuilderMemory.enemyIsAlive == 0) {
                            promptControllerMemory.waitForAttack = 0;
                        };

                        if (floorBuilderMemory.enemyIsAlive == 1) {

                            combatControllerMemory.enemyAttackStrength = Math.round(enemyStatsMemory.enemyStrength - (playerStatsMemory.playerDefense / 5) - (playerStatsMemory.playerDexterity / 5) - (0.5 * playerInventoryMemory.shieldLevel));

                            console.log("Enemy power" + combatControllerMemory.enemyAttackStrength);

                            if (combatControllerMemory.enemyAttackStrength < 0) {
                                combatControllerMemory.enemyAttackStrength = 0;
                            }

                            playerStatsMemory.playerHealth = playerStatsMemory.playerHealth - combatControllerMemory.enemyAttackStrength;

                            if (playerStatsMemory.playerHealth < 2) {
                                playerStatsMemory.playerHealth = 1;
                            }

                            new showGraphics(floorBuilderMemory.enemy + 10, 0, floorBuilderMemory.floor, 2);
                            //new showInfo(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
                            showDialogue.showInfo_isEnemyAttacking();
                            promptControllerMemory.waitForAttack = 0;
                        }
                    }, 2000);





                    break;


                case "sanity":
                    if (playerInventoryMemory.sanityPotionAmount >= 1) {
                        enemyStatsMemory.enemyOnScreen = 0;
                        new showGraphics(0, 0, floorBuilderMemory.floor, 5);
                        //new showInfo(0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
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
                        //new showInfo(0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
                        showDialogue.showInfo_isItemUnavailable();
                    }
                    break;
                case "soul":
                    if (playerInventoryMemory.soulAmount >= 1) {
                        enemyStatsMemory.enemyOnScreen = 1;
                        new showGraphics(floorBuilderMemory.enemy + 10, 0, floorBuilderMemory.floor, 6);
                        //new showInfo(0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
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
                        //new showInfo(0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
                        showDialogue.showInfo_isItemUnavailable();
                    }
                    break;
            }

        }
    }