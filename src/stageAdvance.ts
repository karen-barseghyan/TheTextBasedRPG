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
        this.stage = this.stage + 1;
        //console.log("działa");
   }
   
}