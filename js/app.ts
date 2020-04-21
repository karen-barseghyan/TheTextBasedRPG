
window.onload = () => {
 
//__________________________________________________________________________________________________________________
//Soundtrack
    let ambient = <HTMLVideoElement> document.getElementById("ambient"); 
    window.onmousedown = function(mouseEvent) {
        ambient.play();
    };
//ToDo: enemy sounds, fight sounds, going down sounds, maybe different ambients for different locations...

//__________________________________________________________________________________________________________________
//Statistics overall
    let floor = 0;
    let previousFloor = null;
    let enemy = 0;
    let previousEnemy = null;
    let item = 0;
    let previousItem = null;
    let move = 0;
    let previousMove = null;
    let stage = 0;
    let enemyHealth = 0;
    let enemyDefense = 0;
    let enemyStrength = 0;
    let enemyDexterity = 0;

    let playerHealth = 10;
    let playerDefense = 5;
    let playerStrength = 5;
    let playerDexterity = 5;
    let playerSanity = 5;
    let playerMorality = 5;

    let allowPrompt = 1;

//ToDo:Add more stuff, player stats still lacking, add fundamentals for character creation.



//__________________________________________________________________________________________________________________
//Interaction with the game.
    const button = document.querySelector("button");
    button?.addEventListener("click", promptCheck);

    window.onkeydown = (ev: KeyboardEvent): any => {
        if (ev.keyCode == 13) {
            promptCheck();
         }
   }
//ToDo: Perhaps a joystick on the right side of the screen, still not sure.
    
//__________________________________________________________________________________________________________________
//All Text in the game.
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
        "You are next to a dark castle. ",
        "You are near an underground river. ",
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
        "You are in front of ",
        "On the ground there is ",
        "You look in the mirror. "
    ]
    let enemyForm =[
        "nobody. ",
        "a noble Knight. ",
        "a blood-covered Vampire. ",
        "a brave Mercenary. ",
        "a rotting Zombie. ",
        "an evil Demon. ",
        "a horrific Nightmare. ",
        "a feral Beast. ",
        "a beautiful Elf. ",
        "a rattling Skeleton. ",
    ]
    let itemForm =[
        "nothing. ",
        "a sharp Sword. ",
        "a solid Shield. ",
        "a rusty Key. ",
        "a shiny Ring. ",
        "a Health Potion. ",
        "a stray Soul. ",
        "a Sanity Potion. ",
        "a tough set of Armor. ",
        "a pair of durable Gloves. ",
        "a sturdy Helmet. ",
        ]
    let defenseFormEnemy = [
        "He fell apart. ",
        "A slight breeze would topple him over. ",
        "It doesn't take much to take him down. ",
        "He is quite frail. ",
        "He can't survive a lot. ",
        "His build is pretty average. ",
        "He is pretty durable. ",
        "He has a solid build. ",
        "He is built like a tank. ",
        "Pretty much nothing can even scratch him. ",
        "He is indestructible. ",
    ]
    let defenseFormPlayer = [
        "You fell apart. ",
        "A slight breeze would topple you over. ",
        "It doesn't take much to take you down. ",
        "You are quite frail. ",
        "You can't survive a lot. ",
        "Your build is pretty average. ",
        "You are pretty durable. ",
        "You have a solid build. ",
        "You are built like a tank. ",
        "Pretty much nothing can even scratch you. ",
        "You are indestructible. ",
    ]
    let dexterityFormEnemy = [
        "He cannot move. ",
        "He might as well be in a wheelchair. ",
        "He is slow. ",
        "He lacks aristry. ",
        "He isn't very fast. ",
        "He has mediocre speed. ",
        "His dexterity is above average. ",
        "He is quite nimble. ",
        "Nimble doesn't even begin to describe him. ",
        "He is the definition of finesse. ",
        "He is like the wind. ",
    ]
    let dexterityFormPlayer = [
        "You cannot move. ",
        "You might as well be in a wheelchair. ",
        "You are slow. ",
        "You lack aristry. ",
        "You aren't very fast. ",
        "You have mediocre speed. ",
        "Your dexterity is above average. ",
        "You are quite nimble. ",
        "Nimble doesn't even begin to describe you. ",
        "You are the definition of finesse. ",
        "You are like the wind. ",
    ]
    let strengthFormEnemy = [
        "He is dead. ",
        "He is anemic. ",
        "He is obviously weak. ",
        "He is very skinny. ",
        "He is slightly weak. ",
        "He isn't especially strong. ",
        "He has decent power. ",
        "He has huge muscles. ",
        "He can destroy anyone. ",
        "He has the power of Hercules. ",
        "He has the power of God. ",
    ]
    let strengthFormPlayer = [
        "You are dead. ",
        "You are anemic. ",
        "You are obviously weak. ",
        "You are very skinny. ",
        "You are slightly weak. ",
        "You aren't especially strong. ",
        "You have decent power. ",
        "You have huge muscles. ",
        "You can destroy anyone. ",
        "You have the power of Hercules. ",
        "You have the power of God. ",
    ]
    let healthFormEnemy = [
        "He is dead. ",
        "He has trouble keeping his eyes open, he feels himself drifting away into ether. ",
        "His life flashes before his eyes, the death is near. ",
        "He can barely move, he wonders why he even came here. ",
        "He is gravely injured, he suffers from deep wounds. ",
        "He has several broken bones. ",
        "He is injured and limping. ",
        "He has painful cuts on it. ",
        "He has bruises and scratches. ",
        "He is slightly bruised. ",
        "He doesn't look wounded. ",
    ]

    let healthFormPlayer = [
        "You are dead. ",
        "You have trouble keeping his eyes open, you feel yourself drifting away into ether. ",
        "Your life flashes before your eyes, the death is near. ",
        "You can barely move, you wonder why you even came here. ",
        "You are gravely injured, you suffer from blood loss. ",
        "You are bleeding profusely. ",
        "You are injured and bleeding from your cuts. ",
        "You have painful cuts on it. ",
        "You have bruises and scratches. ",
        "You are slightly bruised. ",
        "You don't look wounded. ",
    ]

    let sanityFormPlayer = [
       "You are completely insane, the shadows are aggressive towards you and will attack you if you don't escape rooms quick enough, the mirror is cracked. ",
       "Your face is no longer human, it feels human in touch but the reflection says otherwise, the shadows have materialized and are visible outside of the mirror as well. ",
       "You see shadows in the corner of your vision, your face has a twisted grimace. ",
       "Your eyes are pure black, black ooze is pouring out of them. ",
       "It's you... with black hollow eyes, your reflection goes back to normal after you blink. ",
       "You are frowning. ",
       "There is a smile on your face. ",
       "You look confident. ",
       "Despite being in this situation, you look genuinely happy. ",
       "You look like you can take on the entire world. ",
       "Your smile is so smug, it's almost like you like being here. ",
    ]

    let moralityFormPlayer = [    
        "You take a glance at the mirror and quickly look away, but the image is seared into your eyes, it is your tortured soul in hell, you can no longer hold back your true self. ",
        "Your face is dripping with blood, you look down and so are your hands, you can't accept the reality of it, no matter how hard you claw at your own hand the blood does not go away, no matter how hard you rub your eyes it just makes your eyesight more and more red. ",
        "Your face is covered in blood, you look down and see your hands are dripping as well, you don't know why, but you just know it's not your blood, as soon as you blink your hands go back to normal. ",
        "There is no question about it, the red stains on your face are blood, you try to rub your eyes with your hand, but it does not help. ",
        "Your face seems to have red stains on it, but they disappear as soon as you blink. ",
        "There is nothing else out of ordinary about your reflection. ",
        "You take a peak at the mirror and you could've swore you saw a faint halo above your head, for split second, was it a delusion? Regardless, it fuels you with joy. INCREASES SANITY BY 20%. ",
        "The halo above your head is bright, the glow feels your heart with determination. ",
        "The halo is clearly visible, you can even see a pair of wings behind your back. ",
        "You can barely see yourself, the holy glow in the mirror is overwhelming you. ",
        "You take a glance at the mirror and it almost blinds you, but you clearly saw the image of yourself in heaven, you are no longer afraid of death. ",
     ]



//ToDo: More text, it's a text based game, everything has to be described.


//_________________________________________________________
//Movement and actions.
      function promptCheck() {
          let prompt;
          let prompter;
          prompt = (<HTMLInputElement>document.getElementById('written')).value;
          prompter = (<HTMLInputElement>document.getElementById('written'));
          (<HTMLInputElement>document.getElementById('written')).value = null;
          (<HTMLInputElement>document.getElementById('written')).placeholder = "";
          console.log(prompt);

          if (prompt.charAt(0).toLowerCase()=="d" && allowPrompt == 1){
            setFloor();
          }

          if (prompt.charAt(0).toLowerCase()=="i" && allowPrompt == 1){
            showEnemy()
          }

          if (prompt.charAt(0).toLowerCase()=="r" && allowPrompt == 1){
            showItem()
          }

          if (prompt.charAt(0).toLowerCase()=="c" && allowPrompt == 1){
            showPlayerStats()
          }
          
          if (prompt.charAt(0).toLowerCase()=="m" && allowPrompt == 1){
            showPlayerReflection()
          }


          prompter.focus();
        return prompt;
      }
//ToDo: Mirror, Fight, Check, Equip, Kill, Spare.

//_________________________________________________________
//Delay
//function delay(ms: number) {
 //   return new Promise( resolve => setTimeout(resolve, ms) );
//}

//_________________________________________________________
//Do the stated Action.
      function setFloor() {

        stage = stage+1;

        floor = Math.floor(Math.random() * 9) + 1;
        if(floor==previousFloor){
            floor = Math.floor(Math.random() * 9) + 1;
        }
        previousFloor = floor;

        enemy = Math.floor(Math.random() * 9) + 1;
        if(enemy==previousEnemy){
            enemy = Math.floor(Math.random() * 9) + 1;
        }
        previousEnemy = enemy;

        item = Math.floor(Math.random() * 10) + 1;
        if(item==previousItem){
            item = Math.floor(Math.random() * 10) + 1;
        }
        previousItem = item;

        move = Math.floor(Math.random() * 12) + 1;
        if(move==previousMove){
            move = Math.floor(Math.random() * 12) + 1;
        }
        previousMove = move;
        
        enemyHealth = 10;
        enemyDefense = Math.floor(Math.random() * stage/2) + 1;
        if(enemyDefense>10){
            enemyDefense=10;
        }

        enemyStrength = Math.floor(Math.random() * stage/2) + 1;
        if(enemyStrength>10){
            enemyStrength=10;
        }

        enemyDexterity = Math.floor(Math.random() * stage/2) + 1;
        if(enemyDexterity>10){
            enemyDexterity=10;
        }


        (<HTMLInputElement>document.getElementById('floor')).src = "gfx/floors/"+floor+".png";
        (<HTMLInputElement>document.getElementById('item')).src = "gfx/items/0.png";
        (<HTMLInputElement>document.getElementById('enemy')).src = "gfx/enemies/0.png";
        (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
        let shownFloorText = movingQuotes[move] + movingPlace[floor] + actions[0] + enemyForm[enemy] + actions[9] + itemForm[item];
        allowPrompt = 0;
        for (let i=0; i<shownFloorText.length ; i++){
            setTimeout( () => {(<HTMLInputElement>document.getElementById('info')).innerHTML += shownFloorText[i] }, i*10 );
        }
        setTimeout( () => {allowPrompt = 1; console.log("promptAllowed") }, shownFloorText.length*10 );
      }


        function showEnemy() {
            (<HTMLInputElement>document.getElementById('enemy')).src = "gfx/enemies/"+enemy+".gif";
            (<HTMLInputElement>document.getElementById('item')).src = "gfx/items/0.png";
            (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
            let shownEnemyText = actions[10] + enemyForm[enemy]  + defenseFormEnemy[enemyDefense] + strengthFormEnemy[enemyStrength] + dexterityFormEnemy[enemyDexterity] + healthFormEnemy[enemyHealth]; 
            allowPrompt = 0;
            for (let i=0; i<shownEnemyText.length ; i++){
                setTimeout( () => {(<HTMLInputElement>document.getElementById('info')).innerHTML += shownEnemyText[i] }, i*10 );
            }
            setTimeout( () => {allowPrompt = 1; console.log("promptAllowed") }, shownEnemyText.length*10 );
          }
        

        function showItem() {
            (<HTMLInputElement>document.getElementById('item')).src = "gfx/items/"+item+".png";
            (<HTMLInputElement>document.getElementById('enemy')).src = "gfx/enemies/0.png";
            (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
            let shownItemText = actions[11] + itemForm[item];  
            allowPrompt = 0;
            for (let i=0; i<shownItemText.length ; i++){
                setTimeout( () => {(<HTMLInputElement>document.getElementById('info')).innerHTML += shownItemText[i] }, i*10 );
            }
            setTimeout( () => {allowPrompt = 1; console.log("promptAllowed") }, shownItemText.length*10 );
        }

        function showPlayerStats() {
            (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
            let shownPlayerStatsText =  defenseFormPlayer[playerDefense] + strengthFormPlayer[playerStrength] + dexterityFormPlayer[playerDexterity] + healthFormPlayer[playerHealth];  
            allowPrompt = 0;
            for (let i=0; i<shownPlayerStatsText.length ; i++){
                setTimeout( () => {(<HTMLInputElement>document.getElementById('info')).innerHTML += shownPlayerStatsText[i] }, i*10 );
            }
            setTimeout( () => {allowPrompt = 1; console.log("promptAllowed") }, shownPlayerStatsText.length*10 );
        }

        function showPlayerReflection() {
            (<HTMLInputElement>document.getElementById('info')).innerHTML = null;
            let shownPlayerReflectionText =  actions[12] + sanityFormPlayer[playerSanity] + moralityFormPlayer[playerMorality];
            allowPrompt = 0;
            for (let i=0; i<shownPlayerReflectionText.length ; i++){
                setTimeout( () => {(<HTMLInputElement>document.getElementById('info')).innerHTML += shownPlayerReflectionText[i] }, i*10 );
            }
            setTimeout( () => {allowPrompt = 1; console.log("promptAllowed") }, shownPlayerReflectionText.length*10 );  
        }

    }
    //ToDo: Mirror, Fight, Check, Equip, Kill, Spare.


  
//ToDo, what's needed:
//Text that goes letter by letter, instead of at once.
//Random non-enemy encounters.
//Random non-enemy events.
//Combat system.
//Equip system. (equipping armor and weapons)
//Potion system.
//Accessory System.

//ToDo, extra features:
//A way to speak to enemies. (?)
//Sanity Effects. (?)
//Easter Eggs. (?)
//Moral choices. (?)
//Saving the previous locations(?)
//A way to return to previous locations.(?)