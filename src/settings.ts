import { enemyStatsMemory, floorBuilderMemory, playerStatsMemory, combatControllerMemory, promptControllerMemory, showDialogue } from "./index";

//settings for promptCheck - change the variables here to change the first word of a letter prompt reacts to
export let goDown = "d";
export let checkEnemy = "i";
export let checkItem = "r";
export let checkPlayer = "c";
export let checkMirror = "m";
export let attack = "f";
export let pickUpItem = "e";
export let openPotionBag = "p";
export let useSanityPotion = "s";
export let useSoul = "y";
export let useHealthPotion = "h";

//settings for player stats - change variables here to change the starting and max value of the player stats.
export let startingPlayerHealth = 11;
export let startingPlayerDefense = 6;
export let startingPlayerStrength = 6;
export let startingPlayerDexterity = 6;
export let startingPlayerDefenseDebuff = 0;
export let startingPlayerStrengthDebuff = 0;
export let startingPlayerDexterityDebuff = 0;
export let startingPlayerSanity = 6;
export let startingPlayerMorality = 6;
export let harmlessAttack = 0;
export let minimumAttack = 1;
export let basePlayerStats = 6;
export let maxPlayerStats = 11;
export let playerIsDead = 2;
export let playerMinimumHealth = 1;
export let sanityShield = 3;
export let sanityDrain = 1;
export let criticalHit = 5;

//settings for player stats - change variables here to change the starting value of the enemy stats.
export let maxEnemyStats = 11;
export let minimumEnemyStats = 1;
export let enemyHealthBase = 9;
export let enemyHealthVariation = 3;
export let enemyStatBase = 2;
export let enemyDying = 2;
export let enemyDead = 1;
export let dialogueBase = 1;


//settings stage start and progression - change these variables to change which stage player starts on, and how much he moves per step, higher stage means higher difficulty
export let startingStage = 1;
export let stageProgression = 1;
export let noFloor = 0;
export let whenVictory = 100;

//settings for prompt - change these variables to change text speed.
export let textSpeedPrompt = 10;
export let attackDelay = 2000;
export let whichLetterCheck = 0;

//settings for starting player equipment - change these variables to modify starting gear.
export let startingHasMirror = 1;
export let startingArmorLevel = 0;
export let startingHelmetLevel = 0;
export let startingGlovesLevel = 0;
export let startingSoulAmount = 10;
export let startingKeyAmount = 5;
export let startingWeaponLevel = 0;
export let startingHealthPotionAmount = 10;
export let startingSanityPotionAmount = 10;
export let startingRingLevel = 0;
export let startingShieldLevel = 0;
export let itemNoDisplay = 0;
export let itemSingular = 1;
export let sanityPotionBuff = 1;


//settings for image display - change these variables to modify what's displaying, those are names of png/gif files.
export let noGraphics = 0;
export let playerAttackAnimation = 1;
export let enemyAttackAnimation = 2;
export let enemyAnimationOffset = 10;
export let potionAnimation = 5;
export let potionGraphic = 5;
export let soulGraphic = 6;
export let sanityGraphic = 7;

//settings responsible for bonus calculation - change these variables to modify bonus gear
export let modifierDivider = 5;
export let modifierMultiplier = 0.5;
export let criticalHitAnimation = 6;

//settings responsible for controls
export let promptAccept = 13;


//settings responsible for max bonuses for equipments - change these variables to modify how strong equipment can be at it's best.
export let equipmentLevelDivider = 2;
export let equipmentLevelBase = 1;
export let weaponLevelBase = 2;
export let maxGlovesLevel = 5;
export let maxArmorLevel = 4;
export let maxHelmetLevel = 4;
export let maxWeaponLevel = 10;
export let maxRingLevel = 4;
export let maxShieldLevel = 5;