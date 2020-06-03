 //_________________________________________________________

import { dialoguebank, floorBuilderMemory, playerStatsMemory, enemyStatsMemory, promptControllerMemory } from "./index";
import * as settings from "./settings"
    //Class showing the text for my text based game.
    export class showInfo {

        constructor() {
           let shownText = "";
            promptControllerMemory.allowPrompt = false;

            for (let i = 0; i < shownText.length; i++) {
                setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
            }


            setTimeout(() => {
                promptControllerMemory.allowPrompt = true; 
                 console.log("promptAllowed");
                 if (playerStatsMemory.playerHealth<settings.playerIsDead){
                    promptControllerMemory.allowPrompt = false;
                     (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
                 } 
            }, shownText.length * promptControllerMemory.textSpeed);

        }



        showInfo_isFloorShown(): void {
            (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
            let shownText = dialoguebank.movingQuotes[floorBuilderMemory.move] + dialoguebank.movingPlace[floorBuilderMemory.floor] + dialoguebank.actions[1] + dialoguebank.enemyForm[floorBuilderMemory.enemy] + dialoguebank.actions[10] + dialoguebank.itemForm[floorBuilderMemory.item];         
 
            for (let i = 0; i < shownText.length; i++) {
                setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
            }
            promptControllerMemory.allowPrompt = false;
            console.log("no prompt");
            console.log(promptControllerMemory.textSpeed);
            setTimeout(() => {
                promptControllerMemory.allowPrompt = true; 
                console.log("promptAllowed");
                 if (playerStatsMemory.playerHealth<settings.playerIsDead){
                    promptControllerMemory.allowPrompt = false;
                     (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
                 } 
                 
            }, shownText.length * promptControllerMemory.textSpeed);

       }


        showInfo_isPlayerReflectionShown(): void {
            (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
            let shownText = dialoguebank.actions[13] + dialoguebank.sanityFormPlayer[playerStatsMemory.playerSanity];         
            for (let i = 0; i < shownText.length; i++) {
                setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
            }
            
            setTimeout(() => {
                promptControllerMemory.allowPrompt = true; 
                 console.log("promptAllowed");
                 if (playerStatsMemory.playerHealth<settings.playerIsDead){
                    promptControllerMemory.allowPrompt = false;
                     (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
                 } 
            }, shownText.length * promptControllerMemory.textSpeed);

       }



       showInfo_isPlayerStatShown(): void {
        (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
        let shownText = dialoguebank.defenseFormPlayer[playerStatsMemory.playerDefense] + dialoguebank.strengthFormPlayer[playerStatsMemory.playerStrength] + dialoguebank.dexterityFormPlayer[playerStatsMemory.playerDexterity] + dialoguebank.healthFormPlayer[playerStatsMemory.playerHealth];         
        for (let i = 0; i < shownText.length; i++) {
            setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
        }

        setTimeout(() => {
            promptControllerMemory.allowPrompt = true; 
             console.log("promptAllowed");
             if (playerStatsMemory.playerHealth<settings.playerIsDead){
                promptControllerMemory.allowPrompt = false;
                 (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
             } 
        }, shownText.length * promptControllerMemory.textSpeed);

   }


   showInfo_isItemShown(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[12] + dialoguebank.itemForm[floorBuilderMemory.item];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = true; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<settings.playerIsDead){
            promptControllerMemory.allowPrompt = false;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isEnemyShown(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[11] + dialoguebank.enemyForm[floorBuilderMemory.enemy] + dialoguebank.defenseFormEnemy[enemyStatsMemory.enemyDefense] + dialoguebank.strengthFormEnemy[enemyStatsMemory.enemyStrength] + dialoguebank.dexterityFormEnemy[enemyStatsMemory.enemyDexterity] + dialoguebank.healthFormEnemy[enemyStatsMemory.enemyHealth];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = true; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<settings.playerIsDead){
            promptControllerMemory.allowPrompt = false;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isItemUsed(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[14] + dialoguebank.itemUsage[enemyStatsMemory.itemToUse] ;         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = true; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<settings.playerIsDead){
            promptControllerMemory.allowPrompt = false;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isItemUnavailable(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[16] + dialoguebank.itemForm[enemyStatsMemory.itemToUse];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = true; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<settings.playerIsDead){
            promptControllerMemory.allowPrompt = false;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_readyForPotionUsage(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.itemChoicePresented[1];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = true; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<settings.playerIsDead){
            promptControllerMemory.allowPrompt = false;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isItemPickedUp(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[7] + dialoguebank.itemForm[floorBuilderMemory.item];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = true; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<settings.playerIsDead){
            promptControllerMemory.allowPrompt = false;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isBlocked(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[17];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = true; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<settings.playerIsDead){
            promptControllerMemory.allowPrompt = false;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isSwordUsed(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[18] + dialoguebank.enemyForm[floorBuilderMemory.enemy] + dialoguebank.healthFormEnemy[enemyStatsMemory.enemyHealth];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = true; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<settings.playerIsDead){
            promptControllerMemory.allowPrompt = false;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isEnemyAttacking(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[19] + dialoguebank.healthFormPlayer[playerStatsMemory.playerHealth];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = true; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<settings.playerIsDead){
            promptControllerMemory.allowPrompt = false;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isPlayerDead(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[20];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = true; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<settings.playerIsDead){
            promptControllerMemory.allowPrompt = false;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isVictory(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[21];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * promptControllerMemory.textSpeed);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = true; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<settings.playerIsDead){
            promptControllerMemory.allowPrompt = false;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
    }, shownText.length * promptControllerMemory.textSpeed);

}




    }

