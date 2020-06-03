export class combatController {
    enemyAttackStrength: number;
    attackStrength: number;

    constructor(enemyAttackStrength: number, attackStrength: number) {
        this.enemyAttackStrength = enemyAttackStrength;
        this.attackStrength = attackStrength;
    }
}