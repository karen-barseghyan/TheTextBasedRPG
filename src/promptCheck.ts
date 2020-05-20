import { stageAdvance } from "./stageAdvance";
import { promptControllerMemory, enemyStatsMemory, floorBuilderMemory, stage } from "./index";
import { setFloor } from "./setFloor";
import { showInfo } from "./showInfo";
import { showGraphics } from "./showGraphics";
import { inventory, playerInventoryMemory } from "./inventory";
import { useItem } from "./useItem";

    //_________________________________________________________
    //Class that checks what's written.



export class promptCheck {
    constructor(currentstage: stageAdvance, showDialogue: showInfo) {

        let prompt;
        let prompter;
        prompt = (<HTMLInputElement>document.getElementById('written')).value;
        prompter = (<HTMLInputElement>document.getElementById('written'));
        (<HTMLInputElement>document.getElementById('written')).value = null;
        (<HTMLInputElement>document.getElementById('written')).placeholder = "";
        console.log(prompt);

        if (promptControllerMemory.allowPrompt == 1 && promptControllerMemory.waitForAttack == 0) {
            switch (prompt.charAt(0).toLowerCase()) {
                case "d":
                    enemyStatsMemory.enemyOnScreen = 0;

                    if (currentstage.getCurrentStage() == 100) {
                        showDialogue.showInfo_isVictory();
                        promptControllerMemory.allowPrompt = 0;
                        promptControllerMemory.waitForAttack = 1;
                    }


                    if (floorBuilderMemory.enemyIsAlive == 1 && playerInventoryMemory.keyAmount < 1 && currentstage.getCurrentStage() != 0 && currentstage.getCurrentStage() != 100) {
                        showDialogue.showInfo_isBlocked();
                    }
                    if (floorBuilderMemory.enemyIsAlive == 1 && playerInventoryMemory.keyAmount > 0 && currentstage.getCurrentStage() != 100) {
                        playerInventoryMemory.keyAmount = playerInventoryMemory.keyAmount - 1;
                        new setFloor(1, 0, stage);
                        new showGraphics(0, 0, floorBuilderMemory.floor, 0);
                        showDialogue.showInfo_isFloorShown();
                    }
                    if (floorBuilderMemory.enemyIsAlive == 0 && currentstage.getCurrentStage() != 100) {
                        new setFloor(1, 0, stage);
                        new showGraphics(0, 0, floorBuilderMemory.floor, 0);
                      showDialogue.showInfo_isFloorShown();
                     
                      
                    }



                    break;
                case "i":
                
                if (floorBuilderMemory.enemyIsAlive==1){
                    if (enemyStatsMemory.enemyOnScreen == 0) {

                        new showGraphics(floorBuilderMemory.enemy, 0, floorBuilderMemory.floor, floorBuilderMemory.animation);
                        showDialogue.showInfo_isEnemyShown();
                    }

                    if (enemyStatsMemory.enemyOnScreen == 1) {
                        showDialogue.showInfo_isEnemyShown();
                    }
                    enemyStatsMemory.enemyOnScreen = 1;
                }

                if (floorBuilderMemory.enemyIsAlive==0){
                    showDialogue.showInfo_isEnemyShown();
                }



                  
                    break;
                case "r":
                    if (floorBuilderMemory.itemIsOnGround == 1) {
                        enemyStatsMemory.enemyOnScreen = 0;
                        enemyStatsMemory.rummageOpen = 1;
                        new showGraphics(0, floorBuilderMemory.item, floorBuilderMemory.floor, floorBuilderMemory.animation);
                        showDialogue.showInfo_isItemShown();
                    }
                    break;
                case "c":
                    showDialogue.showInfo_isPlayerStatShown();
                    break;
                case "m":
                    showDialogue.showInfo_isPlayerReflectionShown();
                    break;

                case "f":
                   // new UseItemClass("weapon");
                   new useItem("weapon");
                    break;


                case "e":
                    enemyStatsMemory.enemyOnScreen = 0;
                    if (floorBuilderMemory.itemIsOnGround == 1 && enemyStatsMemory.rummageOpen == 1) {
                        enemyStatsMemory.rummageOpen = 0;
                        floorBuilderMemory.itemIsOnGround = 0;
                        showDialogue.showInfo_isItemPickedUp();
                        new showGraphics(0, 0, floorBuilderMemory.floor, 0);
                        switch (floorBuilderMemory.item) {
                            case 1:
                                if (playerInventoryMemory.weaponLevel <= 10) {
                                    playerInventoryMemory.weaponLevel = Math.round((Math.floor(Math.random() * currentstage.getCurrentStage()) / 2 + 2));
                                    if (playerInventoryMemory.weaponLevel >= 10) {
                                        playerInventoryMemory.weaponLevel = 10;
                                    }
                                }
                                break;
                            case 2:
                                if (playerInventoryMemory.shieldLevel <= 5) {
                                    playerInventoryMemory.shieldLevel = Math.round((Math.floor(Math.random() * currentstage.getCurrentStage()) / 2 + 1));
                                    if (playerInventoryMemory.shieldLevel >= 5) {
                                        playerInventoryMemory.shieldLevel = 5;
                                    }
                                }
                                break;
                            case 3:
                                playerInventoryMemory.keyAmount = playerInventoryMemory.keyAmount + 1;
                                break;
                            case 4:
                                if (playerInventoryMemory.ringLevel <= 4) {
                                    playerInventoryMemory.ringLevel = Math.round((Math.floor(Math.random() * currentstage.getCurrentStage()) / 2 + 1));
                                    if (playerInventoryMemory.ringLevel >= 4) {
                                        playerInventoryMemory.ringLevel = 4;
                                    }
                                }
                                break;
                            case 5:
                                playerInventoryMemory.healthPotionAmount = playerInventoryMemory.healthPotionAmount + 1;
                                break;
                            case 6:
                                playerInventoryMemory.soulAmount = playerInventoryMemory.soulAmount + 1;
                                break;
                            case 7:
                                playerInventoryMemory.sanityPotionAmount = playerInventoryMemory.sanityPotionAmount + 1;
                                break;
                            case 8:

                                if (playerInventoryMemory.armorLevel <= 4) {
                                    playerInventoryMemory.armorLevel = Math.round((Math.floor(Math.random() * currentstage.getCurrentStage()) / 2 + 1));
                                    if (playerInventoryMemory.armorLevel >= 4) {
                                        playerInventoryMemory.armorLevel = 4;
                                    }
                                }
                                break;
                            case 9:
                                if (playerInventoryMemory.glovesLevel <= 5) {
                                    playerInventoryMemory.glovesLevel = Math.round((Math.floor(Math.random() * currentstage.getCurrentStage()) / 2 + 1));
                                    if (playerInventoryMemory.glovesLevel >= 5) {
                                        playerInventoryMemory.glovesLevel = 5;
                                    }
                                }

                                break;
                            case 10:
                                if (playerInventoryMemory.helmetLevel <= 4) {
                                    playerInventoryMemory.helmetLevel = Math.round((Math.floor(Math.random() * currentstage.getCurrentStage()) / 2 + 1));
                                }

                                break;
                        }
                    }
                    break;

                case "p":
                    enemyStatsMemory.potionBackOpen = 1;
                    showDialogue.showInfo_readyForPotionUsage();
                    break;

                case "s":
                    if (enemyStatsMemory.potionBackOpen == 1) {
                        enemyStatsMemory.itemToUse = 7;
                        //new UseItemClass("sanity");
                        new useItem("sanity");
                        enemyStatsMemory.potionBackOpen = 0;
                    }
                    break;

                case "y":
                    if (enemyStatsMemory.potionBackOpen == 1) {
                        enemyStatsMemory.itemToUse = 6;
                        //new UseItemClass("soul");
                        new useItem("soul");
                        enemyStatsMemory.potionBackOpen = 0;
                    }
                    break;


                case "h":
                    if (enemyStatsMemory.potionBackOpen == 1) {
                        enemyStatsMemory.itemToUse = 5;
                        //new UseItemClass("health");
                        new useItem("health");
                        enemyStatsMemory.potionBackOpen = 0;
                    }
                    break;
            }
        }
        new inventory(playerInventoryMemory.hasMirror, playerInventoryMemory.armorLevel, playerInventoryMemory.helmetLevel, playerInventoryMemory.glovesLevel, playerInventoryMemory.keyAmount, playerInventoryMemory.weaponLevel, playerInventoryMemory.healthPotionAmount, playerInventoryMemory.soulAmount, playerInventoryMemory.sanityPotionAmount, playerInventoryMemory.ringLevel, playerInventoryMemory.shieldLevel);
        if (enemyStatsMemory.enemyHealth < 2) {
            enemyStatsMemory.enemyHealth = 1;
            floorBuilderMemory.enemyIsAlive = 0;
        }
        prompter.focus();
        return prompt;
    }
}