import { stageAdvance } from "./stageAdvance";
import { promptControllerMemory, enemyStatsMemory, floorBuilderMemory, stage } from "./index";
import { setFloor } from "./setFloor";
import { showInfo } from "./showInfo";
import { showGraphics } from "./showGraphics";
import { inventory, playerInventoryMemory } from "./inventory";
import { useItem } from "./useItem";
import * as settings from "./settings";

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

        if (promptControllerMemory.allowPrompt == true && promptControllerMemory.waitForAttack == false) {
            switch (prompt.charAt(0).toLowerCase()) {
                case settings.goDown:
                    enemyStatsMemory.enemyOnScreen = false;
                    if (currentstage.getCurrentStage() == 100) {
                        //Sprawdź wygraną tylko raz
                        showDialogue.showInfo_isVictory();
                        promptControllerMemory.allowPrompt = false;
                        promptControllerMemory.waitForAttack = true;
                    }


                    if (floorBuilderMemory.enemyIsAlive == true && playerInventoryMemory.keyAmount < 1 && currentstage.getCurrentStage() != 0 && currentstage.getCurrentStage() != 100) {
                        showDialogue.showInfo_isBlocked();
                    }
                    if (floorBuilderMemory.enemyIsAlive == true && playerInventoryMemory.keyAmount > 0 && currentstage.getCurrentStage() != 100) {
                        playerInventoryMemory.keyAmount = playerInventoryMemory.keyAmount - 1;
                        new setFloor(1, 0, stage);
                        new showGraphics(0, 0, floorBuilderMemory.floor, 0);
                        showDialogue.showInfo_isFloorShown();
                    }
                    if (floorBuilderMemory.enemyIsAlive == false && currentstage.getCurrentStage() != 100) {
                        new setFloor(1, 0, stage);
                        new showGraphics(0, 0, floorBuilderMemory.floor, 0);
                      showDialogue.showInfo_isFloorShown();
                     
                      
                    }



                    break;
                case settings.checkEnemy:
                
                if (floorBuilderMemory.enemyIsAlive==true){
                    if (enemyStatsMemory.enemyOnScreen == false) {

                        new showGraphics(floorBuilderMemory.enemy, 0, floorBuilderMemory.floor, floorBuilderMemory.animation);
                        showDialogue.showInfo_isEnemyShown();
                    }

                    if (enemyStatsMemory.enemyOnScreen == true) {
                        showDialogue.showInfo_isEnemyShown();
                    }
                    enemyStatsMemory.enemyOnScreen = true;
                }

                if (floorBuilderMemory.enemyIsAlive==false){
                    showDialogue.showInfo_isEnemyShown();
                }



                  
                    break;
                case settings.checkItem:
                    if (floorBuilderMemory.itemIsOnGround == true) {
                        enemyStatsMemory.enemyOnScreen = false;
                        enemyStatsMemory.rummageOpen = true;
                        new showGraphics(0, floorBuilderMemory.item, floorBuilderMemory.floor, floorBuilderMemory.animation);
                        showDialogue.showInfo_isItemShown();
                    }
                    break;
                case settings.checkPlayer:
                    showDialogue.showInfo_isPlayerStatShown();
                    break;
                case settings.checkMirror:
                    showDialogue.showInfo_isPlayerReflectionShown();
                    break;

                case settings.attack:
                   // new UseItemClass("weapon");
                   new useItem(settings.attack);
                    break;


                case settings.pickUpItem:
                    enemyStatsMemory.enemyOnScreen = false;
                    if (floorBuilderMemory.itemIsOnGround == true && enemyStatsMemory.rummageOpen == true) {
                        enemyStatsMemory.rummageOpen = false;
                        floorBuilderMemory.itemIsOnGround = false;
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

                case settings.openPotionBag:
                    enemyStatsMemory.potionBackOpen = true;
                    showDialogue.showInfo_readyForPotionUsage();
                    break;

                case settings.useSanityPotion:
                    if (enemyStatsMemory.potionBackOpen == true) {
                        enemyStatsMemory.itemToUse = 7;
                        //new UseItemClass("sanity");
                        new useItem(settings.useSanityPotion);
                        enemyStatsMemory.potionBackOpen = false;
                    }
                    break;

                case settings.useSoul:
                    if (enemyStatsMemory.potionBackOpen == true) {
                        enemyStatsMemory.itemToUse = 6;
                        //new UseItemClass("soul");
                        new useItem(settings.useSoul);
                        enemyStatsMemory.potionBackOpen = false;
                    }
                    break;


                case settings.useHealthPotion:
                    if (enemyStatsMemory.potionBackOpen == true) {
                        enemyStatsMemory.itemToUse = 5;
                        //new UseItemClass("health");
                        new useItem(settings.useHealthPotion);
                        enemyStatsMemory.potionBackOpen = false;
                    }
                    break;
            }
        }
        new inventory(playerInventoryMemory.hasMirror, playerInventoryMemory.armorLevel, playerInventoryMemory.helmetLevel, playerInventoryMemory.glovesLevel, playerInventoryMemory.keyAmount, playerInventoryMemory.weaponLevel, playerInventoryMemory.healthPotionAmount, playerInventoryMemory.soulAmount, playerInventoryMemory.sanityPotionAmount, playerInventoryMemory.ringLevel, playerInventoryMemory.shieldLevel);
        if (enemyStatsMemory.enemyHealth < 2) {
            enemyStatsMemory.enemyHealth = 1;
            floorBuilderMemory.enemyIsAlive = false;
        }
        prompter.focus();
        return prompt;
    }
}