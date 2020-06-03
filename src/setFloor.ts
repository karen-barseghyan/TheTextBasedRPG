
import {floorBuilderMemory} from './index';
import {enemyStatsMemory} from './index';
import {stageAdvance} from './stageAdvance';
import * as settings from "./settings";
import { dialoguebank, playerStatsMemory, promptControllerMemory } from "./index";

export class setFloor {
    constructor() {
    }

    setTheFloor(difficulty: number, horror: number, currentstage: stageAdvance) : void  {
        floorBuilderMemory.enemyIsAlive = true;
        floorBuilderMemory.itemIsOnGround = true;
        currentstage.increaseCurrentStage();
        floorBuilderMemory.floor = Math.floor(Math.random() * (dialoguebank.movingPlace.length - settings.dialogueBase)) + settings.dialogueBase;
        if (floorBuilderMemory.floor == floorBuilderMemory.previousFloor) {
            floorBuilderMemory.floor = Math.floor(Math.random() * (dialoguebank.movingPlace.length - settings.dialogueBase)) + settings.dialogueBase;
        }
        floorBuilderMemory.previousFloor = floorBuilderMemory.floor;

        floorBuilderMemory.enemy = Math.floor(Math.random() * (dialoguebank.enemyForm.length - settings.dialogueBase)) + settings.dialogueBase;
        if (floorBuilderMemory.enemy == floorBuilderMemory.previousEnemy) {
            floorBuilderMemory.enemy = Math.floor(Math.random() * (dialoguebank.enemyForm.length - settings.dialogueBase)) + settings.dialogueBase;
        }
        floorBuilderMemory.previousEnemy = floorBuilderMemory.enemy;

        floorBuilderMemory.item = Math.floor(Math.random() * (dialoguebank.itemForm.length - settings.dialogueBase)) + settings.dialogueBase;
        if (floorBuilderMemory.item == floorBuilderMemory.previousItem) {
            floorBuilderMemory.item = Math.floor(Math.random() * (dialoguebank.itemForm.length - settings.dialogueBase)) + settings.dialogueBase;
        }
        floorBuilderMemory.previousItem = floorBuilderMemory.item;

        floorBuilderMemory.move = Math.floor(Math.random() * (dialoguebank.movingQuotes.length - settings.dialogueBase)) + settings.dialogueBase;
        if (floorBuilderMemory.move == floorBuilderMemory.previousMove) {
            floorBuilderMemory.move = Math.floor(Math.random() * (dialoguebank.movingQuotes.length - settings.dialogueBase)) + settings.dialogueBase;
        }
        floorBuilderMemory.previousMove = floorBuilderMemory.move;

        enemyStatsMemory.enemyHealth = settings.maxEnemyStats;
        enemyStatsMemory.enemyDefense = Math.floor(Math.random() * currentstage.getCurrentStage() * difficulty) + settings.enemyStatBase;
        if (enemyStatsMemory.enemyDefense > settings.maxEnemyStats) {
            enemyStatsMemory.enemyDefense = settings.maxEnemyStats;
        }

        enemyStatsMemory.enemyStrength = Math.floor(Math.random() * currentstage.getCurrentStage() * difficulty) + settings.enemyStatBase;
        if (enemyStatsMemory.enemyStrength > settings.maxEnemyStats) {
            enemyStatsMemory.enemyStrength = settings.maxEnemyStats;
        }

        enemyStatsMemory.enemyDexterity = Math.floor(Math.random() * currentstage.getCurrentStage() * difficulty) + settings.enemyStatBase;
        if (enemyStatsMemory.enemyDexterity > settings.maxEnemyStats) {
            enemyStatsMemory.enemyDexterity = settings.maxEnemyStats;
        }
        enemyStatsMemory.enemyHealth = Math.floor(Math.random() * settings.enemyHealthVariation) + settings.enemyHealthBase;
        if (enemyStatsMemory.enemyHealth > settings.maxEnemyStats) {
            enemyStatsMemory.enemyHealth = settings.maxEnemyStats;
        }
    }
}
