//_________________________________________________________
//Class responsible for item usage (including weapon)

import { enemyStatsMemory, floorBuilderMemory, playerStatsMemory, combatControllerMemory, promptControllerMemory, showDialogue } from "./index";
import { showGraphics } from "./showGraphics";
import { showInfo } from "./showInfo";
import { playerInventoryMemory } from "./inventory";
import * as settings from "./settings";

export class useItem {
    constructor() {
    }

    whichItemToUse(whichItem: string): void {
        switch (whichItem) {
            case settings.useHealthPotion:
                if (playerInventoryMemory.healthPotionAmount >= settings.itemSingular) {
                    enemyStatsMemory.enemyOnScreen = false;
                    new showGraphics(settings.noGraphics, settings.noGraphics, floorBuilderMemory.floor, settings.potionAnimation);
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
                new showGraphics(floorBuilderMemory.enemy + settings.enemyAnimationOffset, settings.noGraphics, floorBuilderMemory.floor, settings.playerAttackAnimation);
                if (enemyStatsMemory.enemyHealth >= settings.enemyDead) {
                    combatControllerMemory.attackStrength = Math.round(playerInventoryMemory.weaponLevel + playerStatsMemory.playerStrength - enemyStatsMemory.enemyDefense - enemyStatsMemory.enemyDexterity + (settings.modifierMultiplier * playerInventoryMemory.glovesLevel));
                    if (combatControllerMemory.attackStrength < settings.minimumAttack) {
                        combatControllerMemory.attackStrength = settings.minimumAttack;
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

                        combatControllerMemory.enemyAttackStrength = Math.round(enemyStatsMemory.enemyStrength - (playerStatsMemory.playerDefense / settings.modifierDivider) - (playerStatsMemory.playerDexterity / settings.modifierDivider) - (settings.modifierMultiplier * playerInventoryMemory.shieldLevel));

                        console.log("Enemy power" + combatControllerMemory.enemyAttackStrength);

                        if (combatControllerMemory.enemyAttackStrength < settings.harmlessAttack) {
                            combatControllerMemory.enemyAttackStrength = settings.harmlessAttack;
                        }

                        playerStatsMemory.playerHealth = playerStatsMemory.playerHealth - combatControllerMemory.enemyAttackStrength;

                        if (playerStatsMemory.playerHealth < settings.playerIsDead) {
                            if (playerStatsMemory.playerSanity > settings.sanityDrain) {
                                playerStatsMemory.playerHealth = settings.sanityShield;
                                playerStatsMemory.playerSanity = playerStatsMemory.playerSanity - settings.sanityDrain;
                                console.log("Sanity Hit: Taken, current Sanity:" + playerStatsMemory.playerSanity);
                            }
                            else {
                                playerStatsMemory.playerHealth = settings.playerMinimumHealth;
                            }
                        }

                        new showGraphics(floorBuilderMemory.enemy + settings.enemyAnimationOffset, settings.noGraphics, floorBuilderMemory.floor, settings.enemyAttackAnimation);
                        showDialogue.showInfo_isEnemyAttacking();
                        promptControllerMemory.waitForAttack = false;
                    }
                }, settings.attackDelay);





                break;


            case settings.useSanityPotion:
                if (playerInventoryMemory.sanityPotionAmount >= settings.itemSingular) {
                    enemyStatsMemory.enemyOnScreen = false;
                    new showGraphics(settings.noGraphics, settings.noGraphics, floorBuilderMemory.floor, settings.potionAnimation);
                    showDialogue.showInfo_isItemUsed();
                    if (playerStatsMemory.playerSanity < settings.startingPlayerSanity) {
                        playerStatsMemory.playerSanity = settings.startingPlayerSanity;
                    }

                    if (playerStatsMemory.playerSanity >= settings.startingPlayerSanity) {
                        playerStatsMemory.playerSanity = playerStatsMemory.playerSanity + settings.sanityPotionBuff;
                    }

                    playerInventoryMemory.sanityPotionAmount = playerInventoryMemory.sanityPotionAmount - settings.itemSingular;
                }
                else {
                    showDialogue.showInfo_isItemUnavailable();
                }
                break;
            case settings.useSoul:
                if (playerInventoryMemory.soulAmount >= settings.itemSingular) {
                    enemyStatsMemory.enemyOnScreen = true;
                    new showGraphics(floorBuilderMemory.enemy + settings.enemyAnimationOffset, settings.noGraphics, floorBuilderMemory.floor, settings.criticalHitAnimation);
                    showDialogue.showInfo_isItemUsed();
                    if (enemyStatsMemory.enemyHealth >= settings.enemyDead) {
                        enemyStatsMemory.enemyHealth = enemyStatsMemory.enemyHealth - settings.criticalHit;
                        if (enemyStatsMemory.enemyHealth < settings.enemyDying) {
                            enemyStatsMemory.enemyHealth = settings.enemyDead;
                        }
                    }

                    playerInventoryMemory.soulAmount = playerInventoryMemory.soulAmount - settings.itemSingular;
                }
                else {
                    showDialogue.showInfo_isItemUnavailable();
                }
                break;
        }
    }
}