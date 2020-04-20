window.onload = function () {
    //_________________________________________________________
    //Soundtrack
    var ambient = document.getElementById("ambient");
    window.onmousedown = function (mouseEvent) {
        ambient.play();
    };
    //ToDo: enemy sounds, fight sounds, going down sounds, maybe different ambients for different locations...
    //_________________________________________________________
    //Statistics overall
    var floor = 0;
    var previousFloor = null;
    var enemy = 0;
    var previousEnemy = null;
    var item = 0;
    var previousItem = null;
    var move = 0;
    var previousMove = null;
    var stage = 0;
    var enemyHealth = 0;
    var enemyDefense = 0;
    var enemyStrength = 0;
    var enemyDexterity = 0;
    //ToDo:Add more stuff, player stats still lacking.
    //_________________________________________________________
    //Interaction with the game.
    var button = document.querySelector("button");
    button === null || button === void 0 ? void 0 : button.addEventListener("click", promptCheck);
    window.onkeydown = function (ev) {
        if (ev.keyCode == 13) {
            promptCheck();
        }
    };
    //ToDo: Perhaps a joystick on the right side of the screen, still not sure.
    //_________________________________________________________
    //All Text in the game.
    var movingQuotes = [
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
    ];
    var movingPlace = [
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
    ];
    var actions = [
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
    ];
    var enemyForm = [
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
    ];
    var itemForm = [
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
    ];
    var defenseFormEnemy = [
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
    ];
    var dexterityFormEnemy = [
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
    ];
    var strengthFormEnemy = [
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
    ];
    var healthFormEnemy = [
        "He is dead. ",
        "He has trouble keeping his eyes open, he feels himself drifting away into ether. ",
        "His life flashes before his eyes, the death is near. ",
        "He can barely move, he wonders why he even came here. ",
        "He is gravely injured, he suffers from blood loss. ",
        "He is bleeding profusely. ",
        "He is injured and bleeding from his cuts. ",
        "He has painful cuts on it. ",
        "He has bruises and scratches on it. ",
        "He is slightly bruised. ",
        "He doesn't look wounded. ",
    ];
    //ToDo: More text, it's a text based game, everything has to be described.
    //_________________________________________________________
    //Movement and actions.
    function promptCheck() {
        var prompt;
        var prompter;
        prompt = document.getElementById('written').value;
        prompter = document.getElementById('written');
        document.getElementById('written').value = null;
        document.getElementById('written').placeholder = "";
        console.log(prompt);
        if (prompt.toLowerCase() == "descend" || prompt.toLowerCase() == "d") {
            setFloor();
        }
        if (prompt.toLowerCase() == "investigate" || prompt.toLowerCase() == "i") {
            showEnemy();
        }
        if (prompt.toLowerCase() == "rummage" || prompt.toLowerCase() == "r") {
            showItem();
        }
        prompter.focus();
        return prompt;
    }
    //ToDo: Mirror, Fight, Check, Equip, Kill, Spare.
    //_________________________________________________________
    //Do the stated Action.
    function setFloor() {
        stage = stage + 1;
        floor = Math.floor(Math.random() * 9) + 1;
        if (floor == previousFloor) {
            floor = Math.floor(Math.random() * 9) + 1;
        }
        previousFloor = floor;
        enemy = Math.floor(Math.random() * 9) + 1;
        if (enemy == previousEnemy) {
            enemy = Math.floor(Math.random() * 9) + 1;
        }
        previousEnemy = enemy;
        item = Math.floor(Math.random() * 10) + 1;
        if (item == previousItem) {
            item = Math.floor(Math.random() * 10) + 1;
        }
        previousItem = item;
        move = Math.floor(Math.random() * 12) + 1;
        if (move == previousMove) {
            move = Math.floor(Math.random() * 12) + 1;
        }
        previousMove = move;
        enemyHealth = 10;
        enemyDefense = Math.floor(Math.random() * stage / 2) + 1;
        if (enemyDefense > 10) {
            enemyDefense = 10;
        }
        console.log("Defense" + enemyDefense);
        enemyStrength = Math.floor(Math.random() * stage / 2) + 1;
        if (enemyStrength > 10) {
            enemyStrength = 10;
        }
        console.log("Strength" + enemyStrength);
        enemyDexterity = Math.floor(Math.random() * stage / 2) + 1;
        if (enemyDexterity > 10) {
            enemyDexterity = 10;
        }
        console.log("Dexterity" + enemyDexterity);
        document.getElementById('floor').src = "gfx/floors/" + floor + ".png";
        document.getElementById('item').src = "gfx/items/0.png";
        document.getElementById('enemy').src = "gfx/enemies/0.png";
        document.getElementById('info').innerHTML = movingQuotes[move] + movingPlace[floor] + actions[0] + enemyForm[enemy] + actions[9] + itemForm[item];
    }
    function showEnemy() {
        document.getElementById('enemy').src = "gfx/enemies/" + enemy + ".gif";
        document.getElementById('item').src = "gfx/items/0.png";
        document.getElementById('info').innerHTML = actions[10] + enemyForm[enemy] + defenseFormEnemy[enemyDefense] + strengthFormEnemy[enemyStrength] + dexterityFormEnemy[enemyDexterity] + healthFormEnemy[enemyHealth];
    }
    function showItem() {
        document.getElementById('item').src = "gfx/items/" + item + ".png";
        document.getElementById('enemy').src = "gfx/enemies/0.png";
        document.getElementById('info').innerHTML = actions[11] + itemForm[item];
    }
};
//ToDo: Mirror, Fight, Check, Equip, Kill, Spare.
