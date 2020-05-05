window.onload = function () {
    //__________________________________________________________________________________________________________________
    //Soundtrack
    var ambient = document.getElementById("ambient");
    window.onmousedown = function (mouseEvent) {
        ambient.play();
    };
    //ToDo: enemy sounds, fight sounds, going down sounds, maybe different ambients for different locations...
    //__________________________________________________________________________________________________________________
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
    var itemIsOnGround = 0;
    var animation = 0;
    var enemyHealth = 1;
    var enemyDefense = 1;
    var enemyStrength = 1;
    var enemyDexterity = 1;
    var waitForAttack = 0;
    var enemyOnScreen = 0;
    var itemToUse = 0;
    var potionBackOpen = 0;
    var rummageOpen = 0;
    var enemyIsAlive = 0;
    var enemyAttackStrength = 0;
    //Player Stats:
    var playerHealth = 11;
    var playerDefense = 6;
    var playerStrength = 6;
    var playerDexterity = 6;
    var attackStrength = 0;
    var playerDefenseDebuff = 0;
    var playerStrengthDebuff = 0;
    var playerDexterityDebuff = 0;
    var playerSanity = 6;
    var playerMorality = 6;
    //Inventory Status:
    var hasMirror = 0;
    var armorLevel = 0;
    var helmetLevel = 0;
    var glovesLevel = 0;
    var soulAmount = 10;
    var keyAmount = 5;
    var weaponLevel = 0;
    var healthPotionAmount = 10;
    var sanityPotionAmount = 10;
    var ringLevel = 0;
    var shieldLevel = 0;
    ///////////////////////
    var allowPrompt = 1;
    //ToDo:Add more stuff, player stats still lacking, add fundamentals for character creation.
    //__________________________________________________________________________________________________________________
    //Interaction with the game.
    var proceed = document.getElementById("proceed");
    proceed === null || proceed === void 0 ? void 0 : proceed.addEventListener("click", function () { new promptCheck(); });
    window.onkeydown = function (ev) {
        if (ev.keyCode == 13) {
            new promptCheck();
        }
    };
    //ToDo: Perhaps a joystick on the right side of the screen, still not sure.
    //__________________________________________________________________________________________________________________
    //All Text in the game.
    var movingQuotes = [
        "",
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
        "The worst is still in front of you. ",
        "You feel your mind detoriating as you move further down. ",
        "Have you seen this place before? No, can't be... ",
        "You pray nothing else will hurt you as you go down, your prayers remain unanswered.",
        "Hope? You forgot what this word means. ",
    ];
    var movingPlace = [
        "",
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
        "",
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
        "You look in the mirror. ",
        "You used ",
        "You threw ",
        "You don't have ",
        "The hatch to the next level is locked, you need to defeat the enemy or possess a key to proceed. ",
        "You attacked ",
        "You got hit! "
    ];
    var enemyForm = [
        "",
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
        "",
        "a sharp Sword. ",
        "a solid Shield. ",
        "a rusty Key. ",
        "a shiny Ring. ",
        "a Health Potion. ",
        "a stray Soul. ",
        "a Sanity Potion. ",
        "a tough set of Armor. ",
        "a pair of spiked Gloves. ",
        "a steel Helmet. ",
    ];
    var itemUsage = [
        "",
        "a sharp Sword, you hope it's stronger than your previous sword. ",
        "a solid Shield, it seems good enough to keep you alive. ",
        "a rusty Key, looks barely sturdy enough to open something. ",
        "a shiny Ring, you feel prettier. ",
        "a Health Potion, you feel rejuvenated. ",
        "a stray Soul at your enemy, the soul tore through them. ",
        "a Sanity Potion, you feel happier. Attached to the bottle there is a hand-drawn picture of a girl with a red ribbon taking her own life, with the words Happy Thoughts next to her, it seems the potion couldn't help her. ",
        "a tough set of Armor, much better than the old rags you used to wear. ",
        "a pair of spiked Gloves, these really pack a punch. ",
        "a steel Helmet, it fills your with power! ",
    ];
    var sanityPotionUsage = [
        "",
        "a Sanity Potion, you feel happier. Attached to the bottle there is a hand-drawn picture of a girl with a red ribbon taking her own life, with the words Happy Thoughts next to her, it seems the potion couldn't help her. ",
        "a Sanity Potion, you began to smile again. ",
        "a Sanity Potion, there is a poem attached to the label, the poem is about sunshine and rainclouds. ",
        "a Sanity Potion, you cry tears of happiness. ",
        "a Sanity Potion, i was half full... the stains on the label are tear stains, you hope those were tears of happiness. ",
    ];
    var itemChoicePresented = [
        "",
        "What do you want to use? a [H]ealth Potion, a [S]anity Potion or the Stra[Y] Soul?",
        "Are you sure you want to use the Rusty Key? It seems like you can just open the next extrance and escape without fighting the enemy. ",
        "Are you sure you want to drink the Sanity Potion? The label says it will bring you back to your senses, but won't have much effect on a sane person. ",
        "Are you sure you want to release the abandoned soul? It looks vengeful. ",
        "Are you sure you want to drink the Health Potion? Are you desperate enough to use it now?"
    ];
    var defenseFormEnemy = [
        "",
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
    var defenseFormPlayer = [
        "",
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
    ];
    var dexterityFormEnemy = [
        "",
        "He cannot move. ",
        "He can barely move. ",
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
    var dexterityFormPlayer = [
        "",
        "You cannot move. ",
        "You can barely move. ",
        "You are slow. ",
        "You lack aristry. ",
        "You aren't very fast. ",
        "You have mediocre speed. ",
        "Your dexterity is above average. ",
        "You are quite nimble. ",
        "Nimble doesn't even begin to describe you. ",
        "You are the definition of finesse. ",
        "You are like the wind. ",
    ];
    var strengthFormEnemy = [
        "",
        "He has ceased to be. ",
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
    var strengthFormPlayer = [
        "",
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
    ];
    var healthFormEnemy = [
        "",
        "He is dead. ",
        "He has trouble keeping his eyes open, he feels himself drifting away into ether. ",
        "His life flashes before his eyes, the death is near. ",
        "He can barely move, he wonders why he even came here. ",
        "He is gravely injured, he suffers from deep wounds. ",
        "He has several broken bones. ",
        "He is injured and limping. ",
        "He has painful cuts on himself. ",
        "He has bruises and scratches. ",
        "He is slightly bruised. ",
        "He doesn't look wounded. ",
    ];
    var healthFormPlayer = [
        "",
        "You are dead. ",
        "You have trouble keeping his eyes open, you feel yourself drifting away into ether. ",
        "Your life flashes before your eyes, the death is near. ",
        "You can barely move, you wonder why you even came here. ",
        "You are gravely injured, you suffer from blood loss. ",
        "You are bleeding profusely. ",
        "You are injured and bleeding from your cuts. ",
        "You have painful cuts on yourself. ",
        "You have bruises and scratches. ",
        "You are slightly bruised. ",
        "You don't look wounded. ",
    ];
    var sanityFormPlayer = [
        "",
        "You have lost the will to live, you are dead inside and desire to be dead outside as well. ",
        "You look at your reflection then burst into tears, you know you'll die here. ",
        "You look like you have given up on life. ",
        "The thousand-yard stare on your face is haunting. ",
        "Your eyes are bloodshot, you are tired of this place. ",
        "You are frowning. ",
        "There is a smile on your face. ",
        "You look confident. ",
        "Despite being in this situation, you look like you are having fun. ",
        "You look excited to go to the next room. ",
        "Even if you die, you know you'll die happy, the journey was the destination for you. ",
    ];
    var moralityFormPlayer = [
        "",
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
    ];
    //ToDo: More text, it's a text based game, everything has to be described.
    //_________________________________________________________
    //Movement and actions.
    var promptCheck = /** @class */ (function () {
        function promptCheck() {
            var prompt;
            var prompter;
            prompt = document.getElementById('written').value;
            prompter = document.getElementById('written');
            document.getElementById('written').value = null;
            document.getElementById('written').placeholder = "";
            console.log(prompt);
            if (allowPrompt == 1 && waitForAttack == 0) {
                switch (prompt.charAt(0).toLowerCase()) {
                    case "d":
                        enemyOnScreen = 0;
                        if (enemyIsAlive == 1 && keyAmount < 1 && stage != 0) {
                            new showInfo(0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
                        }
                        if (enemyIsAlive == 1 && keyAmount > 0) {
                            keyAmount = keyAmount - 1;
                            new setFloor(1, 0);
                            new showGraphics(0, 0, floor, 0);
                            new showInfo(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                        }
                        if (enemyIsAlive == 0) {
                            new setFloor(1, 0);
                            new showGraphics(0, 0, floor, 0);
                            new showInfo(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                        }
                        break;
                    case "i":
                        if (enemyOnScreen == 0) {
                            new showGraphics(enemy, 0, floor, animation);
                            new showInfo(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
                        }
                        if (enemyOnScreen == 1) {
                            new showInfo(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
                        }
                        enemyOnScreen = 1;
                        break;
                    case "r":
                        if (itemIsOnGround == 1) {
                            enemyOnScreen = 0;
                            rummageOpen = 1;
                            new showGraphics(0, item, floor, animation);
                            new showInfo(0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
                        }
                        break;
                    case "c":
                        new showInfo(0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                        break;
                    case "m":
                        new showInfo(0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                        break;
                    case "f":
                        new useItem("weapon");
                        break;
                    case "e":
                        enemyOnScreen = 0;
                        if (itemIsOnGround == 1 && rummageOpen == 1) {
                            rummageOpen = 0;
                            itemIsOnGround = 0;
                            new showInfo(0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
                            new showGraphics(0, 0, floor, 0);
                            switch (item) {
                                case 1:
                                    if (weaponLevel <= 10) {
                                        weaponLevel = Math.round((Math.floor(Math.random() * stage) / 2 + 2));
                                        if (weaponLevel >= 10) {
                                            weaponLevel = 10;
                                        }
                                    }
                                    break;
                                case 2:
                                    if (shieldLevel <= 5) {
                                        shieldLevel = Math.round((Math.floor(Math.random() * stage) / 2 + 1));
                                        if (shieldLevel >= 5) {
                                            shieldLevel = 5;
                                        }
                                    }
                                    break;
                                case 3:
                                    keyAmount = keyAmount + 1;
                                    break;
                                case 4:
                                    if (ringLevel <= 4) {
                                        ringLevel = Math.round((Math.floor(Math.random() * stage) / 2 + 1));
                                        if (ringLevel >= 4) {
                                            ringLevel = 4;
                                        }
                                    }
                                    break;
                                case 5:
                                    healthPotionAmount = healthPotionAmount + 1;
                                    break;
                                case 6:
                                    soulAmount = soulAmount + 1;
                                    break;
                                case 7:
                                    sanityPotionAmount = sanityPotionAmount + 1;
                                    break;
                                case 8:
                                    if (armorLevel <= 4) {
                                        armorLevel = Math.round((Math.floor(Math.random() * stage) / 2 + 1));
                                        if (armorLevel >= 4) {
                                            armorLevel = 4;
                                        }
                                    }
                                    //  console.log(playerDefense);
                                    break;
                                case 9:
                                    if (glovesLevel <= 5) {
                                        glovesLevel = Math.round((Math.floor(Math.random() * stage) / 2 + 1));
                                        if (glovesLevel >= 5) {
                                            glovesLevel = 5;
                                        }
                                    }
                                    break;
                                case 10:
                                    if (helmetLevel <= 4) {
                                        helmetLevel = Math.round((Math.floor(Math.random() * stage) / 2 + 1));
                                    }
                                    break;
                            }
                        }
                        break;
                    case "p":
                        potionBackOpen = 1;
                        new showInfo(0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
                        break;
                    case "s":
                        if (potionBackOpen == 1) {
                            itemToUse = 7;
                            new useItem("sanity");
                            potionBackOpen = 0;
                        }
                        break;
                    case "y":
                        if (potionBackOpen == 1) {
                            itemToUse = 6;
                            new useItem("soul");
                            potionBackOpen = 0;
                        }
                        break;
                    case "h":
                        if (potionBackOpen == 1) {
                            itemToUse = 5;
                            new useItem("health");
                            potionBackOpen = 0;
                        }
                        break;
                }
            }
            new inventory(hasMirror, armorLevel, helmetLevel, glovesLevel, keyAmount, weaponLevel, healthPotionAmount, soulAmount, sanityPotionAmount, ringLevel, shieldLevel);
            if (enemyHealth < 2) {
                enemyHealth = 1;
                enemyIsAlive = 0;
            }
            prompter.focus();
            return prompt;
        }
        return promptCheck;
    }());
    var setFloor = /** @class */ (function () {
        function setFloor(difficulty, horror) {
            enemyIsAlive = 1;
            itemIsOnGround = 1;
            stage = stage + 1 + horror;
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
            move = Math.floor(Math.random() * 18) + 1;
            if (move == previousMove) {
                move = Math.floor(Math.random() * 13) + 2;
            }
            previousMove = move;
            enemyHealth = 11;
            enemyDefense = Math.floor(Math.random() * stage * difficulty) + 2;
            if (enemyDefense > 11) {
                enemyDefense = 11;
            }
            enemyStrength = Math.floor(Math.random() * stage * difficulty) + 2;
            if (enemyStrength > 11) {
                enemyStrength = 11;
            }
            enemyDexterity = Math.floor(Math.random() * stage * difficulty) + 2;
            if (enemyDexterity > 11) {
                enemyDexterity = 11;
            }
            enemyHealth = Math.floor(Math.random() * 3) + 9;
            if (enemyHealth > 11) {
                enemyHealth = 11;
            }
        }
        return setFloor;
    }());
    var showInfo = /** @class */ (function () {
        function showInfo(isFloorShown, isPlayerStatShown, isPlayerReflectionShown, isItemShown, isEnemyShown, isItemUsed, isItemUnavailable, readyForPotionUsage, isItemPickedUp, isBlocked, isSwordUsed, isEnemyAttacking) {
            /*Debug Checkers
            console.log("_______________________________________________");
            console.log("Floor: " + stage);
            console.log("Enemy: "+ enemyForm[enemy]);
            console.log("Defense: "+ enemyDefense);
            console.log("Strength: "+ enemyStrength);
            console.log("Dexterity: "+ enemyDexterity);
            console.log("Health: "+ enemyHealth);
            console.log("item: "+ itemForm[item]);
            console.log("_______________________________________________");
            */
            document.getElementById('info').innerHTML = null;
            var shownText = movingQuotes[move * isFloorShown] + movingPlace[floor * isFloorShown] + actions[1 * isFloorShown] + enemyForm[enemy * isFloorShown] + actions[10 * isFloorShown] + itemForm[item * isFloorShown] + defenseFormPlayer[playerDefense * isPlayerStatShown] + strengthFormPlayer[playerStrength * isPlayerStatShown] + dexterityFormPlayer[playerDexterity * isPlayerStatShown] + healthFormPlayer[playerHealth * isPlayerStatShown] + actions[13 * isPlayerReflectionShown] + sanityFormPlayer[playerSanity * isPlayerReflectionShown] + moralityFormPlayer[playerMorality * isPlayerReflectionShown] + actions[12 * isItemShown] + itemForm[item * isItemShown] + actions[11 * isEnemyShown] + enemyForm[enemy * isEnemyShown] + defenseFormEnemy[enemyDefense * isEnemyShown] + strengthFormEnemy[enemyStrength * isEnemyShown] + dexterityFormEnemy[enemyDexterity * isEnemyShown] + healthFormEnemy[enemyHealth * isEnemyShown] + actions[14 * isItemUsed] + itemUsage[itemToUse * isItemUsed] + actions[16 * isItemUnavailable] + itemForm[itemToUse * isItemUnavailable] + itemChoicePresented[1 * readyForPotionUsage] + actions[7 * isItemPickedUp] + itemForm[item * isItemPickedUp] + actions[17 * isBlocked] + actions[18 * isSwordUsed] + enemyForm[enemy * isSwordUsed] + healthFormEnemy[enemyHealth * isSwordUsed] + actions[19 * isEnemyAttacking] + healthFormPlayer[playerHealth * isEnemyAttacking];
            allowPrompt = 0;
            var _loop_1 = function (i) {
                setTimeout(function () { document.getElementById('info').innerHTML += shownText[i]; }, i * 10);
            };
            for (var i = 0; i < shownText.length; i++) {
                _loop_1(i);
            }
            setTimeout(function () { allowPrompt = 1; console.log("promptAllowed"); }, shownText.length * 10);
        }
        return showInfo;
    }());
    var showGraphics = /** @class */ (function () {
        function showGraphics(shownEnemy, shownItem, shownFloor, shownAnimation) {
            document.getElementById('enemy').src = "gfx/enemies/" + shownEnemy + ".gif";
            document.getElementById('item').src = "gfx/items/" + shownItem + ".png";
            document.getElementById('floor').src = "gfx/floors/" + shownFloor + ".png";
            document.getElementById('animation').src = "gfx/animations/" + shownAnimation + ".gif";
        }
        return showGraphics;
    }());
    var useItem = /** @class */ (function () {
        function useItem(whichItem) {
            switch (whichItem) {
                case "health":
                    if (healthPotionAmount >= 1) {
                        enemyOnScreen = 0;
                        new showGraphics(0, 0, floor, 5);
                        new showInfo(0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
                        playerHealth = 11;
                        healthPotionAmount = healthPotionAmount - 1;
                    }
                    else {
                        new showInfo(0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
                    }
                    break;
                case "weapon":
                    enemyOnScreen = 1;
                    new showGraphics(enemy + 10, 0, floor, 1);
                    if (enemyHealth > 0) {
                        attackStrength = Math.round(weaponLevel + playerStrength - enemyDefense - enemyDexterity + (0.5 * glovesLevel));
                        if (attackStrength < 1) {
                            attackStrength = 1;
                        }
                        console.log("Your power" + attackStrength);
                        enemyHealth = enemyHealth - attackStrength;
                        if (enemyHealth < 2) {
                            enemyHealth = 1;
                        }
                    }
                    new showInfo(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
                    waitForAttack = 1;
                    setTimeout(function () {
                        if (enemyIsAlive == 0) {
                            waitForAttack = 0;
                        }
                        ;
                        if (enemyIsAlive == 1) {
                            enemyAttackStrength = Math.round(enemyStrength - (playerDefense / 5) - (playerDexterity / 5) - (0.5 * shieldLevel));
                            console.log("Enemy power" + enemyAttackStrength);
                            if (enemyAttackStrength < 0) {
                                enemyAttackStrength = 0;
                            }
                            playerHealth = playerHealth - enemyAttackStrength;
                            if (playerHealth < 2) {
                                playerHealth = 1;
                            }
                            new showGraphics(enemy + 10, 0, floor, 2);
                            new showInfo(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
                            waitForAttack = 0;
                        }
                    }, 3000);
                    break;
                case "sanity":
                    if (sanityPotionAmount >= 1) {
                        enemyOnScreen = 0;
                        new showGraphics(0, 0, floor, 5);
                        new showInfo(0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
                        if (playerSanity < 6) {
                            playerSanity = 6;
                        }
                        if (playerSanity >= 6) {
                            playerSanity = playerSanity + 1;
                        }
                        sanityPotionAmount = sanityPotionAmount - 1;
                    }
                    else {
                        new showInfo(0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
                    }
                    break;
                case "soul":
                    if (soulAmount >= 1) {
                        enemyOnScreen = 1;
                        new showGraphics(enemy + 10, 0, floor, 6);
                        new showInfo(0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
                        if (enemyHealth > 0) {
                            enemyHealth = enemyHealth - 5;
                            if (enemyHealth < 2) {
                                enemyHealth = 1;
                            }
                        }
                        soulAmount = soulAmount - 1;
                    }
                    else {
                        new showInfo(0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
                    }
                    break;
            }
        }
        return useItem;
    }());
    var inventory = /** @class */ (function () {
        function inventory(Mirror, Armor, Helmet, Gloves, Keys, Weapon, Health, Souls, Sanity, Ring, Shield) {
            if (Health != 0) {
                if (Health == 1) {
                    document.getElementById("HealthInventory").innerHTML = "<u>" + Health + " Health Potion</u></br> </br>";
                }
                else {
                    document.getElementById("HealthInventory").innerHTML = "<u>" + Health + " Health Potions</u></br> </br>";
                }
            }
            else
                document.getElementById("HealthInventory").innerHTML = "";
            if (Sanity != 0) {
                if (Sanity == 1) {
                    document.getElementById("SanityInventory").innerHTML = "<u>" + Sanity + " Sanity Potion</u></br> </br>";
                }
                else {
                    document.getElementById("SanityInventory").innerHTML = "<u>" + Sanity + " Sanity Potions</u></br> </br>";
                }
            }
            else
                document.getElementById("SanityInventory").innerHTML = "";
            if (Souls != 0) {
                if (Souls == 1) {
                    document.getElementById("SoulInventory").innerHTML = "<u>" + soulAmount + " Stray Soul</u></br> </br>";
                }
                else {
                    document.getElementById("SoulInventory").innerHTML = "<u>" + soulAmount + " Stray Souls</u></br> </br>";
                }
            }
            else
                document.getElementById("SoulInventory").innerHTML = "";
            if (Keys != 0) {
                if (Keys == 1) {
                    document.getElementById("KeysInventory").innerHTML = "<u>" + keyAmount + " Rusty Key</u></br> </br>";
                }
                else {
                    document.getElementById("KeysInventory").innerHTML = "<u>" + keyAmount + " Rusty Keys</u></br> </br>";
                }
            }
            else
                document.getElementById("KeysInventory").innerHTML = "";
            if (Armor != 0) {
                playerDefense = 6 + armorLevel - playerDefenseDebuff;
                if (playerDefense > 11) {
                    playerDefense = 11;
                }
                document.getElementById("ArmorInventory").innerHTML = "<u>Tough Armor</u> - +" + armorLevel + " defense bonus. </br> </br>";
            }
            else
                document.getElementById("ArmorInventory").innerHTML = "<u>Cloak</u> - No bonuses. </br> </br>";
            if (Shield != 0) {
                document.getElementById("ShieldInventory").innerHTML = "<u>Solid Shield</u> - " + shieldLevel + "0% enemy damage reduction. </br> </br>";
            }
            else
                document.getElementById("ShieldInventory").innerHTML = "";
            if (Gloves != 0) {
                document.getElementById("GlovesInventory").innerHTML = "<u>Spiked Gloves</u> - " + glovesLevel + "0% additional damage. </br> </br>";
            }
            else
                document.getElementById("GlovesInventory").innerHTML = "<u>Leather Gloves</u> - No bonuses. </br> </br>";
            if (Helmet != 0) {
                playerStrength = 6 + helmetLevel - playerStrengthDebuff;
                if (playerStrength > 11) {
                    playerStrength = 11;
                }
                document.getElementById("HelmetInventory").innerHTML = "<u>Steel Helmet</u> - +" + helmetLevel + " strength bonus. </br> </br>";
            }
            else
                document.getElementById("HelmetInventory").innerHTML = "<u>Cloth Hood</u> - No bonuses. </br> </br>";
            if (Ring != 0) {
                playerDexterity = 6 + ringLevel - playerDexterityDebuff;
                if (playerDexterity > 11) {
                    playerDexterity = 11;
                }
                document.getElementById("RingInventory").innerHTML = "<u>Shiny Ring</u> - +" + ringLevel + " dexterity bonus. </br> </br>";
            }
            else
                document.getElementById("RingInventory").innerHTML = "";
            if (Weapon != 0) {
                document.getElementById("WeaponInventory").innerHTML = "<u>Sharp Sword</u> - " + weaponLevel + " attack power. </br> </br>";
            }
            else
                document.getElementById("WeaponInventory").innerHTML = "<u>Fists</u> - 1 attack power.</br> </br>";
        }
        return inventory;
    }());
    new inventory(hasMirror, armorLevel, helmetLevel, glovesLevel, keyAmount, weaponLevel, healthPotionAmount, soulAmount, sanityPotionAmount, ringLevel, shieldLevel);
};
//ToDo, what's needed:
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
//1.System walki
//2.System przedmiotów - zrobione :)
//3.Zrobienie obiektowo - zrobione :)
