
//__________________________________________________________________________________________________________________
//All Text in the game.




export class dialogue {

    movingQuotes: string[];
    movingPlace: string[];
    actions: string[];
    enemyForm: string[];
    itemForm: string[];
    itemUsage: string[];
    sanityPotionUsage: string[];
    itemChoicePresented: string[];
    defenseFormEnemy: string[];
    defenseFormPlayer: string[];
    dexterityFormEnemy: string[];
    dexterityFormPlayer: string[];
    strengthFormEnemy: string[];
    strengthFormPlayer: string[];
    healthFormEnemy: string[];
    healthFormPlayer: string[];
    sanityFormPlayer: string[];
    moralityFormPlayer: string[];


    constructor() {

        this.movingQuotes = [
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
            "You prey nothing else will hurt you as you go down, your prayers remain unanswered.",
            "Hope? You forgot what this word means. ",
        ]
        this.movingPlace = [
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
        ]
        this.actions = [
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
            "You got hit! ",
            "You are dead, GAME OVER. ",
            "The door didn't even require a key... the monster didn't even want to fight you... You have not descended into madness, you escaped this hell, you see an open field with sunshine, a rainbow and pleasant breeze, you survived, YOU WON!"
        ]
        this.enemyForm = [
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
        ]
        this.itemForm = [
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
        ]

        this.itemUsage = [
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
        ]


        this.sanityPotionUsage = [
            "",
            "a Sanity Potion, you feel happier. Attached to the bottle there is a hand-drawn picture of a girl with a red ribbon taking her own life, with the words Happy Thoughts next to her, it seems the potion couldn't help her. ",
            "a Sanity Potion, you began to smile again. ",
            "a Sanity Potion, there is a poem attached to the label, the poem is about sunshine and rainclouds. ",
            "a Sanity Potion, you cry tears of happiness. ",
            "a Sanity Potion, i was half full... the stains on the label are tear stains, you hope those were tears of happiness. ",
        ]

        this.itemChoicePresented = [
            "",
            "What do you want to use? a [H]ealth Potion, a [S]anity Potion or the Stra[Y] Soul?",
            "Are you sure you want to use the Rusty Key? It seems like you can just open the next extrance and escape without fighting the enemy. ",
            "Are you sure you want to drink the Sanity Potion? The label says it will bring you back to your senses, but won't have much effect on a sane person. ",
            "Are you sure you want to release the abandoned soul? It looks vengeful. ",
            "Are you sure you want to drink the Health Potion? Are you desperate enough to use it now?"
        ]


        this.defenseFormEnemy = [
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
        ]
        this.defenseFormPlayer = [
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
        ]
        this.dexterityFormEnemy = [
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
        ]
        this.dexterityFormPlayer = [
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
        ]
        this.strengthFormEnemy = [
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
        ]
        this.strengthFormPlayer = [
            "",
            "You are dead, GAME OVER. ",
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
        this.healthFormEnemy = [
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
        ]

        this.healthFormPlayer = [
            "",
            "You are dead, GAME OVER. ",
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
        ]

        this.sanityFormPlayer = [
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
        ]

        this.moralityFormPlayer = [
            "",
            "You take a glance at the mirror and quickly look away, but the image is seared into your eyes, it is your tortured soul in hell, you can no longer hold back your true self. ",
            "Your face is dripping with blood, you look down and so are your hands, you can't accept the reality of it, no matter how hard you claw at your own hand the blood does not go away, no matter how hard you rub your eyes it just makes your eyesight more and more red. ",
            "Your face is covered in blood, you look down and see your hands are dripping as well, you don't know why, but you just know it's not your blood, as soon as you blink your hands go back to normal. ",
            "There is no question about it, the red stains on your face are blood, you try to rub your eyes with your hand, but it does not help. ",
            "Your face seems to have red stains on it, but they disappear as soon as you blink. ",
            "There is nothing else out of ordinary about your reflection. ",
            "You take a peak at the mirror and you could've swore you saw a faint halo above your head, for split second, was it a delusion? Regardless, it fuels you with joy. ",
            "The halo above your head is bright, the glow feels your heart with determination. ",
            "The halo is clearly visible, you can even see a pair of wings behind your back. ",
            "You can barely see yourself, the holy glow in the mirror is overwhelming you. ",
            "You take a glance at the mirror and it almost blinds you, but you clearly saw the image of yourself in heaven, you are no longer afraid of death. ",
        ]
    }

}
