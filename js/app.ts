
window.onload = () => {
 
   
    let ambient = <HTMLVideoElement> document.getElementById("ambient"); 

    window.onmousedown = function(mouseEvent) {
        ambient.play();
    };

    const button = document.querySelector("button");
    button?.addEventListener("click", promptCheck);

    
    let movingQuotes =[
        "You are still here. ",
        "You have descended down. ",
        "You found a hatch down. ",
        "You fell through a hole you found. ",
        "You went downstairs. ",
        "You teleported down. ",
        "You blinked and found yourself in a new place. ",
        "You were knocked out and woke up somewhere else. ",
        "You woke up, was it just a nightmare? Whatever it was, you are now in an unfamiliar place. ",
        "You tripped on a rock and rolled downhill. ",
        "Suddenly a monster grabbed you and threw you down. ",
        "You wish upon a star to take you away from this nightmare, but it only took you further down. ",
        "You snap out of it. ",
    ]

    let movingPlace = [
        "You are in a dark void. ",
        "You are now in a dark cave. ",
        "You are now in a horrific dungeon. ",
        "You are now in a deep ravine. ",
        "You are now in damp catacombs. ",
        "You are surrounded by graves. ",
        "You are in deserted ruins. ",
        "You are in a dusty stronghold. ",
        "You see a dark castle. ",
        "You see an underground river. ",
     ]

    let actions =[
        "You see ",
        "You fight ",
        "You killed ",
        "You have spared ",
        "You were backstabbed by ",
        "You have been killed by ",
        "You pick up ",
        "You equip ",
        "You decided to ",
        "You also see ",
    ]

    let enemyForm =[
        "nobody. ",
        "a noble Knight. ",
        "a blood-covered Vampire. ",
        "a brave Adventurer. ",
        "a rotting Zombie. ",
        "an evil Demon. ",
        "a horrific Nightmare. ",
        "a huge Beast. ",
        "a beautiful Elf. ",
        "a spooky scary Skeleton. ",
    ]
    
    //To Do: enemy stats.

    let itemForm =[
        "nothing. ",
        "a sharp Sword. ",
        "a solid Shield. ",
        "a rusty Key. ",
        "a shiny Ring. ",
        "a Health Potion. ",
        "a stray Soul. ",
        "a Sanity Potion. ",
        "a tough Helmet. ",
        "durable Gloves. ",
        ]

    let defensePlayer = [
        "You are dead",
        "A slight breeze will knock you down.",
        "It doesn't take much to take you down.",
        "You are quite frail.",
        "You can't survive a lot.",
        "Your build is pretty average.",
        "You're pretty durable.",
        "You have a solid build.",
        "You are built like a tank.",
        "Pretty much nothing can even scratch you.",
        "You are indestructible.",
    ]

    //To Do: rest of the stats, not just defense.


      function promptCheck() {
          let prompt;
          let prompter;
          prompt = (<HTMLInputElement>document.getElementById('written')).value;
          prompter = (<HTMLInputElement>document.getElementById('written'));
          (<HTMLInputElement>document.getElementById('written')).value = null;
          (<HTMLInputElement>document.getElementById('written')).placeholder = "";
          console.log(prompt);

          if (prompt.toLowerCase()=="descend" || prompt.toLowerCase()=="d"){
            setFloor();
          }

          prompter.focus();
        return prompt;
      }

      function setFloor() {

        let floor = Math.floor(Math.random() * 9) + 1;
        let enemy = Math.floor(Math.random() * 9) + 1;
        let item = Math.floor(Math.random() * 9) + 1;
        let move = Math.floor(Math.random() * 12) + 1;
        (<HTMLInputElement>document.getElementById('floor')).src = "gfx/floors/"+floor+".png";
        (<HTMLInputElement>document.getElementById('enemy')).src = "gfx/enemies/"+enemy+".png";
        (<HTMLInputElement>document.getElementById('item')).src = "gfx/items/"+item+".png";
        (<HTMLInputElement>document.getElementById('info')).innerHTML = movingQuotes[move] + movingPlace[floor] + actions[0] + enemyForm[enemy] + actions[9] + itemForm[item];

    }


  
   }