 import * as _ from 'lodash';
 import {stageAdvance} from './stageAdvance';
 import {playerStats} from './playerStats';
 import {playerInventory} from './playerInventory';
 import {promptController} from './promptController';
 import {combatController} from './combatController';
import {enemyStats} from './enemyStats';
import {floorBuilder} from './floorBuilder';
import {dialogue} from './dialogue';
import { setFloor } from './setFloor';
import { promptCheck } from './promptCheck';
import { showInfo } from './showInfo';


    //Floor Building and progression
   export let floorBuilderMemory = new floorBuilder(0,null,0,null,0,null,0,null, 0, 0, 0);

    //let stage = 1;
    export let stage = new stageAdvance(1);

    //Enemy Stats
    export  let enemyStatsMemory = new enemyStats(1,1,1,1,0,0,0,0);

    //Player Stats:
    export  let playerStatsMemory = new playerStats(11, 6, 6, 6, 0, 0, 0, 6, 6);

    //Prompt Controllers
    export let promptControllerMemory = new promptController(1, 0, 10);

    //Combat Controllers 
    export let combatControllerMemory = new combatController(0,0);

    //All Dialogues
    export  let dialoguebank = new dialogue();

    //Showing the dialogue
    export let showDialogue = new showInfo();

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
    proceed?.addEventListener("click", function () { new promptCheck(stage, showDialogue) });

    window.onkeydown = (ev: KeyboardEvent): any => {
        if (ev.keyCode == 13) {
            new promptCheck(stage, showDialogue);
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