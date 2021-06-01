// Skills dictionary
const skillsDict = {
    "Athletics": "STR",
    "Acrobatics": "DEX",
    "Sleight of Hand": "DEX",
    "Stealth": "DEX",
    "Arcana": "INT",
    "History": "INT",
    "Investigation": "INT",
    "Nature": "INT",
    "Religion": "INT",
    "Animal Handling": "WIS",
    "Insight": "WIS",
    "Medicine": "WIS",
    "Perception": "WIS",
    "Survival": "WIS",
    "Deception": "CHA",
    "Intimidation": "CHA",
    "Performance": "CHA",
    "Persuasion": "CHA",
}

//  All characters are LEVEL 6.
const data = {
    "HP": 0,
    "abilities": {
        "STR": 0,
        "DEX": 0,
        "CON": 0,
        "INT": 0,
        "WIS": 0,
        "CHA": 0,
    },
    "Saving": {
        "STR": 0,
        "DEX": 0,
        "CON": 0,
        "INT": 0,
        "WIS": 0,
        "CHA": 0,
    },
    "Skills": {
        "Athletics": 0,
        "Acrobatics": 0,
        "Sleight of Hand": 0,
        "Stealth": 0,
        "Arcana": 0,
        "History": 0,
        "Investigation": 0,
        "Nature": 0,
        "Religion": 0,
        "Animal Handling": 0,
        "Insight": 0,
        "Medicine": 0,
        "Perception": 0,
        "Survival": 0,
        "Deception": 0,
        "Intimidation": 0,
        "Performance": 0,
        "Persuasion": 0,
    },
    "AC": 0,
    "Speed": 0,
    "profBonus": 3,
    "Initiative": 0,
    "ProfSaving": [],
    "ProfSkills": [],
    "ExpertSkills": [],
    "Equipment": [],
    "Features": [],
    "Languages": []
}

function handleClass(charClass) {
    if (charClass === "Barbarian") {
        handleBarbarian()
    }  
    if (charClass === "Rogue") {
        handleRogue()
    }
}

function handleRogue() {
    // sneak attack damage
    data["sneak"] = "3d6"

    //abilities
    data["abilities"]["STR"] = 0
    data["abilities"]["DEX"] = 5
    data["abilities"]["CON"] = 2
    data["abilities"]["INT"] = 2
    data["abilities"]["WIS"] = -1
    data["abilities"]["CON"] = 1

    // AC and speed
    data["AC"] = 14
    data["Speed"] = "30ft"

    // Proficiencied Saving Throws
    data["ProfSaving"] = ["DEX", "INT"]
    // Proficiencied Skills
    data["ProfSkills"] = ["Deception", "Insight", "Persuasion", "Stealth"]
    // Expertise Skills
    data["ExpertSkills"] = ["Deception, Stealth", "Persuasion", "Insight"]

    // Setting HP
    data["HP"] = 8 + 5*5 + data["abilities"]["CON"]*6

    // Equipment
    data["Equipment"] = [
        {"Time's Arrow": "1 crossbow and 20 arrows, +4 to hit, 2d6 piercing damage"}, 
        {"Rapier": "+2 to hit, 1d6 slashing damage"}, 
        {"Daggers": "2"},
        {"Thieves' Tools": "A small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers"},
        {"Burglar's Pack": "Backpack, ball bearing (100), string, candle (5), crowbar, hammer, piton (5), hooded lantern, flask of oil (2), rations (5), tinderbox, waterskin, hempen rope"}
    ]

    // Features
    data["Features"] = [
        {"Sneak Attack": "Once per round, extra damage on attack."},
        {"Cunning Action": "On your bonus action, you can Dash, Disengage or Hide."},
        {"Uncanny Dodge": "You can use your reaction to half the damage dealt to you."},
        {"Assassinate": "Advantage on any creature that hasn't had their turn yet. If creature is surprised, critical hit."}
    ]

    // Language
    data["Languages"] = ["Thieves Cant"]

    // Setting Initiative
    data["Initiative"] = data["abilities"]["DEX"]

     // Setting Saving Throw Values
     Object.keys(data["Saving"]).forEach((save) => {
        const d = data["ProfSaving"].includes(save) ? data["profBonus"] : 0;
        data["Saving"][save] = Number(data["abilities"][save]) + Number(d)
    });

    // Setting Skills Values
    Object.keys(data["Skills"]).forEach((skill) => {
        const d = data["ProfSkills"].includes(skill) ? data["profBonus"] : 0;
        const e = data["ExpertSkills"].includes(skill) ? data["profBonus"] : 0;
        data["Skills"][skill] = Number(data["abilities"][skillsDict[skill]]) + Number(d) + Number(e)
    })
}

function handleBarbarian() {
    // additional data
    data["rages"] = 4
        
    // abilities
    data["abilities"]["STR"] = 5
    data["abilities"]["DEX"] = 1
    data["abilities"]["CON"] = 3
    data["abilities"]["INT"] = -1
    data["abilities"]["WIS"] = 1
    data["abilities"]["CON"] = 0

    // AC and speed
    data["AC"] = 16
    data["Speed"] = "40ft"

    // Proficiencied Saving Throws
    data["ProfSaving"] = ["STR", "CON"]
    // Proficiencied Skills
    data["ProfSkills"] = ["Athletics", "Intimidation", "Perception", "Nature"]
    // Expertise: None

    // Setting HP
    data["HP"] = 12 + 7*5 + data["abilities"]["CON"]*6

    // Equipment
    data["Equipment"] = [
                    {"Frost Reaver": "1. Battle Axe, +4 to hit, 2d6+3 cold damage"}, 
                    {"Javelins": "4."}, 
                    {"Truth's Edge": "1 Sword, +3 to hit, 1d6+3 slashing damage"},
                    {"Explorer's Pack": "Backpack, bedroll, mess kit, tinderbox, torch (10), rations (10), waterskin, hempen rope"}
                ]
    
   // Features
   data["Features"] = [
                    {"Rage": "Enter a rage as a Bonus Action in combat. You have advantage on Strength Checks + Saving Throws. +2 to attack rolls, resistance to damage."},
                    {"Reckless Attack": "Attack roll with advantage, but get attacked with advantage too"},
                    {"Extra Attack": "2 attacks per round"},
                    {"Frenzy": "Use your bonus action to attack."}
                ]
    // Setting Initiative
    data["Initiative"] = data["abilities"]["DEX"]


    // Setting Saving Throw Values
    Object.keys(data["Saving"]).forEach((save) => {
        const d = data["ProfSaving"].includes(save) ? data["profBonus"] : 0;
        data["Saving"][save] = Number(data["abilities"][save]) + Number(d)
    });

    // Setting Skills Values
    Object.keys(data["Skills"]).forEach((skill) => {
        const d = data["ProfSkills"].includes(skill) ? data["profBonus"] : 0;
        const e = data["ExpertSkills"].includes(skill) ? data["profBonus"] : 0;
        data["Skills"][skill] = Number(data["abilities"][skillsDict[skill]]) + Number(d) + Number(e)
    })
}


function charBuilder(sel) {
    handleClass(sel[0])
    return data
}


export default charBuilder