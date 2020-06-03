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


    constructor() {
    }

    checkPrompt(currentstage: stageAdvance, showDialogue: showInfo, useItems: useItem, setMyFloor: setFloor) {

        let prompt;
        let prompter;
        prompt = (<HTMLInputElement>document.getElementById('written')).value;
        prompter = (<HTMLInputElement>document.getElementById('written'));
        (<HTMLInputElement>document.getElementById('written')).value = null;
        (<HTMLInputElement>document.getElementById('written')).placeholder = "";
        console.log(prompt);

        if (promptControllerMemory.allowPrompt == true && promptControllerMemory.waitForAttack == false) {
            switch (prompt.charAt(settings.whichLetterCheck).toLowerCase()) {
                case settings.goDown:
                    enemyStatsMemory.enemyOnScreen = false;
                    if (currentstage.getCurrentStage() == settings.whenVictory) {
                        //Sprawdź wygraną tylko raz
                        showDialogue.showInfo_isVictory();
                        promptControllerMemory.allowPrompt = false;
                        promptControllerMemory.waitForAttack = true;
                    }


                    if (floorBuilderMemory.enemyIsAlive == true && playerInventoryMemory.keyAmount < 1 && currentstage.getCurrentStage() != settings.noFloor && currentstage.getCurrentStage() != settings.whenVictory) {
                        showDialogue.showInfo_isBlocked();
                    }
                    if (floorBuilderMemory.enemyIsAlive == true && playerInventoryMemory.keyAmount >= 1 && currentstage.getCurrentStage() != settings.whenVictory) {
                        playerInventoryMemory.keyAmount = playerInventoryMemory.keyAmount - 1;
                        setMyFloor.setTheFloor(1, 0, stage);
                        new showGraphics(settings.noGraphics, settings.noGraphics, floorBuilderMemory.floor, settings.noGraphics);
                        showDialogue.showInfo_isFloorShown();
                    }
                    if (floorBuilderMemory.enemyIsAlive == false && currentstage.getCurrentStage() != settings.whenVictory) {
                        setMyFloor.setTheFloor(1, 0, stage);
                        new showGraphics(settings.noGraphics, settings.noGraphics, floorBuilderMemory.floor, settings.noGraphics);
                        showDialogue.showInfo_isFloorShown();


                    }



                    break;
                case settings.checkEnemy:

                    if (floorBuilderMemory.enemyIsAlive == true) {
                        if (enemyStatsMemory.enemyOnScreen == false) {

                            new showGraphics(floorBuilderMemory.enemy, settings.noGraphics, floorBuilderMemory.floor, floorBuilderMemory.animation);
                            showDialogue.showInfo_isEnemyShown();
                        }

                        if (enemyStatsMemory.enemyOnScreen == true) {
                            showDialogue.showInfo_isEnemyShown();
                        }
                        enemyStatsMemory.enemyOnScreen = true;
                    }

                    if (floorBuilderMemory.enemyIsAlive == false) {
                        showDialogue.showInfo_isEnemyShown();
                    }




                    break;
                case settings.checkItem:
                    if (floorBuilderMemory.itemIsOnGround == true) {
                        enemyStatsMemory.enemyOnScreen = false;
                        enemyStatsMemory.rummageOpen = true;
                        new showGraphics(settings.noGraphics, floorBuilderMemory.item, floorBuilderMemory.floor, floorBuilderMemory.animation);
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
                    useItems.whichItemToUse(settings.attack);
                    break;


                case settings.pickUpItem:
                    enemyStatsMemory.enemyOnScreen = false;
                    if (floorBuilderMemory.itemIsOnGround == true && enemyStatsMemory.rummageOpen == true) {
                        enemyStatsMemory.rummageOpen = false;
                        floorBuilderMemory.itemIsOnGround = false;
                        showDialogue.showInfo_isItemPickedUp();
                        new showGraphics(settings.noGraphics, settings.noGraphics, floorBuilderMemory.floor, settings.noGraphics);
                        switch (floorBuilderMemory.item) {
                            case 1:
                                if (playerInventoryMemory.weaponLevel <= settings.maxWeaponLevel) {
                                    playerInventoryMemory.weaponLevel = Math.round((Math.floor(Math.random() * currentstage.getCurrentStage()) / settings.equipmentLevelDivider + settings.weaponLevelBase));
                                    if (playerInventoryMemory.weaponLevel >= settings.maxWeaponLevel) {
                                        playerInventoryMemory.weaponLevel = settings.maxWeaponLevel;
                                    }
                                }
                                break;
                            case 2:
                                if (playerInventoryMemory.shieldLevel <= settings.maxShieldLevel) {
                                    playerInventoryMemory.shieldLevel = Math.round((Math.floor(Math.random() * currentstage.getCurrentStage()) / settings.equipmentLevelDivider + settings.equipmentLevelBase));
                                    if (playerInventoryMemory.shieldLevel >= settings.maxShieldLevel) {
                                        playerInventoryMemory.shieldLevel = settings.maxShieldLevel;
                                    }
                                }
                                break;
                            case 3:
                                playerInventoryMemory.keyAmount = playerInventoryMemory.keyAmount + settings.itemSingular;
                                break;
                            case 4:
                                if (playerInventoryMemory.ringLevel <= settings.maxRingLevel) {
                                    playerInventoryMemory.ringLevel = Math.round((Math.floor(Math.random() * currentstage.getCurrentStage()) / settings.equipmentLevelDivider + settings.equipmentLevelBase));
                                    if (playerInventoryMemory.ringLevel >= settings.maxRingLevel) {
                                        playerInventoryMemory.ringLevel = settings.maxRingLevel;
                                    }
                                }
                                break;
                            case 5:
                                playerInventoryMemory.healthPotionAmount = playerInventoryMemory.healthPotionAmount + settings.itemSingular;
                                break;
                            case 6:
                                playerInventoryMemory.soulAmount = playerInventoryMemory.soulAmount + settings.itemSingular;
                                break;
                            case 7:
                                playerInventoryMemory.sanityPotionAmount = playerInventoryMemory.sanityPotionAmount + settings.itemSingular;
                                break;
                            case 8:

                                if (playerInventoryMemory.armorLevel <= settings.maxArmorLevel) {
                                    playerInventoryMemory.armorLevel = Math.round((Math.floor(Math.random() * currentstage.getCurrentStage()) / settings.equipmentLevelDivider + settings.equipmentLevelBase));
                                    if (playerInventoryMemory.armorLevel >= settings.maxArmorLevel) {
                                        playerInventoryMemory.armorLevel = settings.maxArmorLevel;
                                    }
                                }
                                break;
                            case 9:
                                if (playerInventoryMemory.glovesLevel <= settings.maxGlovesLevel) {
                                    playerInventoryMemory.glovesLevel = Math.round((Math.floor(Math.random() * currentstage.getCurrentStage()) / settings.equipmentLevelDivider + settings.equipmentLevelBase));
                                    if (playerInventoryMemory.glovesLevel >= settings.maxGlovesLevel) {
                                        playerInventoryMemory.glovesLevel = settings.maxGlovesLevel;
                                    }
                                }

                                break;
                            case 10:
                                if (playerInventoryMemory.helmetLevel <= settings.maxHelmetLevel) {
                                    playerInventoryMemory.helmetLevel = Math.round((Math.floor(Math.random() * currentstage.getCurrentStage()) / settings.equipmentLevelDivider + settings.equipmentLevelBase));
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
                        enemyStatsMemory.itemToUse = settings.sanityGraphic;
                        useItems.whichItemToUse(settings.useSanityPotion);
                        enemyStatsMemory.potionBackOpen = false;
                    }
                    break;

                case settings.useSoul:
                    if (enemyStatsMemory.potionBackOpen == true) {
                        enemyStatsMemory.itemToUse = settings.soulGraphic;
                        useItems.whichItemToUse(settings.useSoul);
                        enemyStatsMemory.potionBackOpen = false;
                    }
                    break;


                case settings.useHealthPotion:
                    if (enemyStatsMemory.potionBackOpen == true) {
                        enemyStatsMemory.itemToUse = settings.potionGraphic;
                        useItems.whichItemToUse(settings.useHealthPotion);
                        enemyStatsMemory.potionBackOpen = false;
                    }
                    break;
            }
        }
        new inventory(playerInventoryMemory.hasMirror, playerInventoryMemory.armorLevel, playerInventoryMemory.helmetLevel, playerInventoryMemory.glovesLevel, playerInventoryMemory.keyAmount, playerInventoryMemory.weaponLevel, playerInventoryMemory.healthPotionAmount, playerInventoryMemory.soulAmount, playerInventoryMemory.sanityPotionAmount, playerInventoryMemory.ringLevel, playerInventoryMemory.shieldLevel);
        if (enemyStatsMemory.enemyHealth < settings.enemyDying) {
            enemyStatsMemory.enemyHealth = settings.enemyDead;
            floorBuilderMemory.enemyIsAlive = false;
        }
        prompter.focus();
        return prompt;
    }
}