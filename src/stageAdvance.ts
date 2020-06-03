import * as settings from "./settings"

export class stageAdvance{

    stage: number;
    
    constructor(stage: number){
      this.stage = stage;
    }

    getCurrentStage(): number {
        return this.stage;
    }
    setCurrentStage(stage: number): void {
         this.stage = stage;
    }
    increaseCurrentStage(): void {
        this.stage = this.stage + settings.stageProgression;
        //console.log("działa");
   }
   
}