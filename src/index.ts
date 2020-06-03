import * as _ from 'lodash';
import { stageAdvance } from './stageAdvance';
import { playerStats } from './playerStats';
import { playerInventory } from './playerInventory';
import { promptController } from './promptController';
import { combatController } from './combatController';
import { enemyStats } from './enemyStats';
import { floorBuilder } from './floorBuilder';
import { dialogue } from './dialogue';
import { setFloor } from './setFloor';
import { promptCheck } from './promptCheck';
import { showInfo } from './showInfo';
import { useItem } from './useItem';
import * as settings from "./settings";


//Floor Building and progression
export let floorBuilderMemory = new floorBuilder(settings.noGraphics, null, settings.noGraphics, null, settings.noGraphics, null, settings.noGraphics, null, false, false, settings.noGraphics);

//let stage = 1;
export let stage = new stageAdvance(settings.startingStage);

//Enemy Stats
export let enemyStatsMemory = new enemyStats(settings.minimumEnemyStats, settings.minimumEnemyStats, settings.minimumEnemyStats, settings.minimumEnemyStats, false, settings.noGraphics, false, false);

//Starting Player Stats - changable via settings.ts:
export let playerStatsMemory = new playerStats(settings.startingPlayerHealth, settings.startingPlayerDefense, settings.startingPlayerStrength, settings.startingPlayerDexterity, settings.startingPlayerDefenseDebuff, settings.startingPlayerStrengthDebuff, settings.startingPlayerDexterityDebuff, settings.startingPlayerSanity, settings.startingPlayerMorality);

//Prompt Controllers
export let promptControllerMemory = new promptController(true, false, settings.textSpeedPrompt);
export let checkThePrompt = new promptCheck();

//Combat Controllers 
export let combatControllerMemory = new combatController(settings.harmlessAttack, settings.harmlessAttack);

//All Dialogues
export let dialoguebank = new dialogue();

//Showing the dialogue
export let showDialogue = new showInfo();

//Using Items
export let useItems = new useItem();

//Setting Floor
export let setMyFloor = new setFloor();

window.onload = () => {

    //__________________________________________________________________________________________________________________
    //Soundtrack
    let ambient = <HTMLVideoElement>document.getElementById("ambient");
    window.onmousedown = function (mouseEvent: any) {
        ambient.play();
    };

    //__________________________________________________________________________________________________________________
    //Interaction with the game.

    const proceed = document.getElementById("proceed");
    proceed?.addEventListener("click", function () { checkThePrompt.checkPrompt(stage, showDialogue, useItems, setMyFloor) });

    window.onkeydown = (ev: KeyboardEvent): any => {
        if (ev.keyCode == settings.promptAccept) {
            checkThePrompt.checkPrompt(stage, showDialogue, useItems, setMyFloor);
        }
    }

}
//ToDo, what's needed:
//Random non-enemy encounters.
//Random non-enemy events.
//Combat system. - Done.
//Equip system. (equipping armor and weapons) - Done.
//Potion system. - Done.
//Accessory System. - Done.

//ToDo, extra features:
//A way to speak to enemies. (?)
//Sanity Effects. (?)
//Easter Eggs. (?)
//Moral choices. (?)
//Saving the previous locations(?)
//A way to return to previous locations.(?)


//Do zrobienia (maj 7)
//1.System walki - zrobione :)
//2.System przedmiotów - zrobione :)
//3.Zrobienie obiektowo - zrobione :)


//Do zrobienia (maj 21):
//1.Klase w różnych plikach. - zrobione :)
//2.Podpięcie webpacka - automatycznie wieldowanie. https://webpack.js.org/guides/typescript/ - zrobione :)
//3.W showInfo - rozdzielić i zrobić nowe klasy. - zrobione :)
//4.Możliwośc wygrania gry.- Victory Screen. - zrobione :)


//Do zrobienia (28/maja / 4 czerwca)
//1.Zera jedynki = True/False - zrobione :)
    //Zmienne do zmiany:
    //allowPrompt - zrobione
    //waitForAttack - zrobione
    //enemyOnScreen - zrobione
    //enemyIsAlive - zrobione
    //itemIsOnGround - zrobione
    //rummageOpen - zrobione
    //potionBackOpen - zrobione
    //
//2.Nie używać stałych liczbowych.
//3.Case zmiennymi - nie literkami. - zrobione :)
//4.Rozdzielić klasy na konstruktor i metody. - zrobione :)
//5.Add Sanity/Morality mechanics. - zrobione :)