export class promptController{

allowPrompt : boolean;
waitForAttack : boolean;
textSpeed: number;

constructor(allowPrompt : boolean, waitForAttack : boolean, textSpeed: number){
this.allowPrompt = allowPrompt;
this.waitForAttack =  waitForAttack;
this.textSpeed = textSpeed;
    }
}