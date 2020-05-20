 //_________________________________________________________

import { dialoguebank, floorBuilderMemory, playerStatsMemory, enemyStatsMemory, promptControllerMemory } from "./index";

    //Class showing the text for my text based game.
    export class showInfo {

        constructor() {
/*
            (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
            let shownText = dialoguebank.movingQuotes[floorBuilderMemory.move * isFloorShown] + dialoguebank.movingPlace[floorBuilderMemory.floor * isFloorShown] + dialoguebank.actions[1 * isFloorShown] + dialoguebank.enemyForm[floorBuilderMemory.enemy * isFloorShown] + dialoguebank.actions[10 * isFloorShown] + dialoguebank.itemForm[floorBuilderMemory.item * isFloorShown] + 
            dialoguebank.defenseFormPlayer[playerStatsMemory.playerDefense * isPlayerStatShown] + dialoguebank.strengthFormPlayer[playerStatsMemory.playerStrength * isPlayerStatShown] + dialoguebank.dexterityFormPlayer[playerStatsMemory.playerDexterity * isPlayerStatShown] + dialoguebank.healthFormPlayer[playerStatsMemory.playerHealth * isPlayerStatShown] + 
            dialoguebank.actions[13 * isPlayerReflectionShown] + dialoguebank.sanityFormPlayer[playerStatsMemory.playerSanity * isPlayerReflectionShown] + dialoguebank.moralityFormPlayer[playerStatsMemory.playerMorality * isPlayerReflectionShown] +
            dialoguebank.actions[12 * isItemShown] + dialoguebank.itemForm[floorBuilderMemory.item * isItemShown] + 
            dialoguebank.actions[11 * isEnemyShown] + dialoguebank.enemyForm[floorBuilderMemory.enemy * isEnemyShown] + dialoguebank.defenseFormEnemy[enemyStatsMemory.enemyDefense * isEnemyShown] + dialoguebank.strengthFormEnemy[enemyStatsMemory.enemyStrength * isEnemyShown] + dialoguebank.dexterityFormEnemy[enemyStatsMemory.enemyDexterity * isEnemyShown] + dialoguebank.healthFormEnemy[enemyStatsMemory.enemyHealth * isEnemyShown] + 
            dialoguebank.actions[14 * isItemUsed] + dialoguebank.itemUsage[enemyStatsMemory.itemToUse * isItemUsed] +
            dialoguebank.actions[16 * isItemUnavailable] + dialoguebank.itemForm[enemyStatsMemory.itemToUse * isItemUnavailable] + 
            dialoguebank.itemChoicePresented[1 * readyForPotionUsage] + 
            dialoguebank.actions[7 * isItemPickedUp] + dialoguebank.itemForm[floorBuilderMemory.item * isItemPickedUp] + 
            dialoguebank.actions[17 * isBlocked] + 
            dialoguebank.actions[18 * isSwordUsed] + dialoguebank.enemyForm[floorBuilderMemory.enemy * isSwordUsed] + dialoguebank.healthFormEnemy[enemyStatsMemory.enemyHealth * isSwordUsed] + 
            dialoguebank.actions[19 * isEnemyAttacking] + dialoguebank.healthFormPlayer[playerStatsMemory.playerHealth * isEnemyAttacking] + 
            dialoguebank.actions[20*isPlayerDead] + 
            dialoguebank.actions[21*isVictory];
            */
           let shownText = "";
            promptControllerMemory.allowPrompt = 0;

            for (let i = 0; i < shownText.length; i++) {
                setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
            }


            setTimeout(() => {
                promptControllerMemory.allowPrompt = 1; 
                 console.log("promptAllowed");
                 if (playerStatsMemory.playerHealth<2){
                    promptControllerMemory.allowPrompt = 0;
                     (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
                 } 
                 promptControllerMemory.textSpeed = 3;
            }, shownText.length * promptControllerMemory.textSpeed);

        }



        showInfo_isFloorShown(): void {
            (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
            let shownText = dialoguebank.movingQuotes[floorBuilderMemory.move] + dialoguebank.movingPlace[floorBuilderMemory.floor] + dialoguebank.actions[1] + dialoguebank.enemyForm[floorBuilderMemory.enemy] + dialoguebank.actions[10] + dialoguebank.itemForm[floorBuilderMemory.item];         
            for (let i = 0; i < shownText.length; i++) {
                setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
            }

            setTimeout(() => {
                promptControllerMemory.allowPrompt = 1; 
                 console.log("promptAllowed");
                 if (playerStatsMemory.playerHealth<2){
                    promptControllerMemory.allowPrompt = 0;
                     (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
                 } 
                 promptControllerMemory.textSpeed = 3;
            }, shownText.length * promptControllerMemory.textSpeed);

       }


                             // new showInfo(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                            // showDialogue.showInfo_isFloorShown();

        showInfo_isPlayerReflectionShown(): void {
            (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
            let shownText = dialoguebank.actions[13] + dialoguebank.sanityFormPlayer[playerStatsMemory.playerSanity] + dialoguebank.moralityFormPlayer[playerStatsMemory.playerMorality];         
            for (let i = 0; i < shownText.length; i++) {
                setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
            }
            
            setTimeout(() => {
                promptControllerMemory.allowPrompt = 1; 
                 console.log("promptAllowed");
                 if (playerStatsMemory.playerHealth<2){
                    promptControllerMemory.allowPrompt = 0;
                     (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
                 } 
                 promptControllerMemory.textSpeed = 3;
            }, shownText.length * promptControllerMemory.textSpeed);

       }



       showInfo_isPlayerStatShown(): void {
        (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
        let shownText = dialoguebank.defenseFormPlayer[playerStatsMemory.playerDefense] + dialoguebank.strengthFormPlayer[playerStatsMemory.playerStrength] + dialoguebank.dexterityFormPlayer[playerStatsMemory.playerDexterity] + dialoguebank.healthFormPlayer[playerStatsMemory.playerHealth];         
        for (let i = 0; i < shownText.length; i++) {
            setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
        }

        setTimeout(() => {
            promptControllerMemory.allowPrompt = 1; 
             console.log("promptAllowed");
             if (playerStatsMemory.playerHealth<2){
                promptControllerMemory.allowPrompt = 0;
                 (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
             } 
             promptControllerMemory.textSpeed = 3;
        }, shownText.length * promptControllerMemory.textSpeed);

   }


   showInfo_isItemShown(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[12] + dialoguebank.itemForm[floorBuilderMemory.item];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = 1; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<2){
            promptControllerMemory.allowPrompt = 0;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
         promptControllerMemory.textSpeed = 3;
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isEnemyShown(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[11] + dialoguebank.enemyForm[floorBuilderMemory.enemy] + dialoguebank.defenseFormEnemy[enemyStatsMemory.enemyDefense] + dialoguebank.strengthFormEnemy[enemyStatsMemory.enemyStrength] + dialoguebank.dexterityFormEnemy[enemyStatsMemory.enemyDexterity] + dialoguebank.healthFormEnemy[enemyStatsMemory.enemyHealth];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = 1; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<2){
            promptControllerMemory.allowPrompt = 0;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
         promptControllerMemory.textSpeed = 3;
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isItemUsed(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[14] + dialoguebank.itemUsage[enemyStatsMemory.itemToUse] ;         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = 1; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<2){
            promptControllerMemory.allowPrompt = 0;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
         promptControllerMemory.textSpeed = 3;
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isItemUnavailable(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[16] + dialoguebank.itemForm[enemyStatsMemory.itemToUse];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = 1; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<2){
            promptControllerMemory.allowPrompt = 0;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
         promptControllerMemory.textSpeed = 3;
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_readyForPotionUsage(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.itemChoicePresented[1];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = 1; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<2){
            promptControllerMemory.allowPrompt = 0;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
         promptControllerMemory.textSpeed = 3;
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isItemPickedUp(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[7] + dialoguebank.itemForm[floorBuilderMemory.item];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = 1; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<2){
            promptControllerMemory.allowPrompt = 0;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
         promptControllerMemory.textSpeed = 3;
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isBlocked(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[17];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = 1; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<2){
            promptControllerMemory.allowPrompt = 0;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
         promptControllerMemory.textSpeed = 3;
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isSwordUsed(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[18] + dialoguebank.enemyForm[floorBuilderMemory.enemy] + dialoguebank.healthFormEnemy[enemyStatsMemory.enemyHealth];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = 1; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<2){
            promptControllerMemory.allowPrompt = 0;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
         promptControllerMemory.textSpeed = 3;
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isEnemyAttacking(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[19] + dialoguebank.healthFormPlayer[playerStatsMemory.playerHealth];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = 1; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<2){
            promptControllerMemory.allowPrompt = 0;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
         promptControllerMemory.textSpeed = 3;
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isPlayerDead(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[20];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = 1; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<2){
            promptControllerMemory.allowPrompt = 0;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
         promptControllerMemory.textSpeed = 3;
    }, shownText.length * promptControllerMemory.textSpeed);

}


showInfo_isVictory(): void {
    (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
    let shownText = dialoguebank.actions[21];         
    for (let i = 0; i < shownText.length; i++) {
        setTimeout(() => { (<HTMLInputElement>document.getElementById('info')).innerHTML += shownText[i] }, i * 10);
    }

    setTimeout(() => {
        promptControllerMemory.allowPrompt = 1; 
         console.log("promptAllowed");
         if (playerStatsMemory.playerHealth<2){
            promptControllerMemory.allowPrompt = 0;
             (<HTMLInputElement>document.getElementById('info')).innerHTML = dialoguebank.actions[20];
         } 
         promptControllerMemory.textSpeed = 3;
    }, shownText.length * promptControllerMemory.textSpeed);

}




    }

