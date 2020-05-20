
import {floorBuilderMemory} from './index';
import {enemyStatsMemory} from './index';
import {stageAdvance} from './stageAdvance';


export class setFloor {
    constructor(difficulty: number, horror: number, currentstage: stageAdvance) {
        floorBuilderMemory.enemyIsAlive = 1;
        floorBuilderMemory.itemIsOnGround = 1;
        currentstage.increaseCurrentStage();
        floorBuilderMemory.floor = Math.floor(Math.random() * 9) + 1;
        if (floorBuilderMemory.floor == floorBuilderMemory.previousFloor) {
            floorBuilderMemory.floor = Math.floor(Math.random() * 9) + 1;
        }
        floorBuilderMemory.previousFloor = floorBuilderMemory.floor;

        floorBuilderMemory.enemy = Math.floor(Math.random() * 9) + 1;
        if (floorBuilderMemory.enemy == floorBuilderMemory.previousEnemy) {
            floorBuilderMemory.enemy = Math.floor(Math.random() * 9) + 1;
        }
        floorBuilderMemory.previousEnemy = floorBuilderMemory.enemy;

        floorBuilderMemory.item = Math.floor(Math.random() * 10) + 1;
        if (floorBuilderMemory.item == floorBuilderMemory.previousItem) {
            floorBuilderMemory.item = Math.floor(Math.random() * 10) + 1;
        }
        floorBuilderMemory.previousItem = floorBuilderMemory.item;

        floorBuilderMemory.move = Math.floor(Math.random() * 18) + 1;
        if (floorBuilderMemory.move == floorBuilderMemory.previousMove) {
            floorBuilderMemory.move = Math.floor(Math.random() * 13) + 2;
        }
        floorBuilderMemory.previousMove = floorBuilderMemory.move;

        enemyStatsMemory.enemyHealth = 11;
        enemyStatsMemory.enemyDefense = Math.floor(Math.random() * currentstage.getCurrentStage() * difficulty) + 2;
        if (enemyStatsMemory.enemyDefense > 11) {
            enemyStatsMemory.enemyDefense = 11;
        }

        enemyStatsMemory.enemyStrength = Math.floor(Math.random() * currentstage.getCurrentStage() * difficulty) + 2;
        if (enemyStatsMemory.enemyStrength > 11) {
            enemyStatsMemory.enemyStrength = 11;
        }

        enemyStatsMemory.enemyDexterity = Math.floor(Math.random() * currentstage.getCurrentStage() * difficulty) + 2;
        if (enemyStatsMemory.enemyDexterity > 11) {
            enemyStatsMemory.enemyDexterity = 11;
        }
        enemyStatsMemory.enemyHealth = Math.floor(Math.random() * 3) + 9;
        if (enemyStatsMemory.enemyHealth > 11) {
            enemyStatsMemory.enemyHealth = 11;
        }
    }
}
