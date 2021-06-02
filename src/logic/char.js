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

function handleClass(charClass, data) {
    if (charClass === "Barbarian") {
        handleBarbarian(data)
    }  
    else if (charClass === "Rogue") {
        handleRogue(data)
    }
    else if (charClass === "Warlock") {
        handleWarlock(data)
    }
    else if (charClass === "Wizard") {
        handleWizard(data)
    }
    else {
        console.log("Ya done fucked up")
    }
}

function handleRogue(data) {
    // sneak attack damage
    data["sneak"] = "3d6"

    //Abilities
    data["Abilities"]["STR"] = 0
    data["Abilities"]["DEX"] = 5
    data["Abilities"]["CON"] = 2
    data["Abilities"]["INT"] = 2
    data["Abilities"]["WIS"] = -1
    data["Abilities"]["CHA"] = 1

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
    data["HP"] = 8 + 5*5 + data["Abilities"]["CON"]*6

    // Equipment
    data["Equipment"] = [
        "Time's Arrows: 1 crossbow and 20 arrows, +4 to hit, 2d6 piercing damage", 
        "Rapier: +2 to hit, 1d6 slashing damage", 
        "Daggers: 2",
        "Thieves' Tools: A small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers",
        "Burglar's Pack: Backpack, ball bearing (100), string, candle (5), crowbar, hammer, piton (5), hooded lantern, flask of oil (2), rations (5), tinderbox, waterskin, hempen rope"
    ]

    // Features
    data["Features"] = [
        "Sneak Attack: Once per round, extra damage on attack.",
        "Cunning Action: On your bonus action, you can Dash, Disengage or Hide.",
        "Uncanny Dodge: You can use your reaction to half the damage dealt to you.",
        "Assassinate: Advantage on any creature that hasn't had their turn yet. If creature is surprised, critical hit."
    ]

    // Language
    data["Languages"] = ["Thieves Cant"]

    // Setting Initiative
    data["Initiative"] = data["Abilities"]["DEX"]

     // Setting Saving Throw Values
     Object.keys(data["Saving"]).forEach((save) => {
        const d = data["ProfSaving"].includes(save) ? data["profBonus"] : 0;
        data["Saving"][save] = Number(data["Abilities"][save]) + Number(d)
    });

    // Setting Skills Values
    Object.keys(data["Skills"]).forEach((skill) => {
        const d = data["ProfSkills"].includes(skill) ? data["profBonus"] : 0;
        const e = data["ExpertSkills"].includes(skill) ? data["profBonus"] : 0;
        data["Skills"][skill] = Number(data["Abilities"][skillsDict[skill]]) + Number(d) + Number(e)
    })
}

function handleBarbarian(data) {
    // additional data
    data["rages"] = 4
        
    // Abilities
    data["Abilities"]["STR"] = 5
    data["Abilities"]["DEX"] = 1
    data["Abilities"]["CON"] = 3
    data["Abilities"]["INT"] = -1
    data["Abilities"]["WIS"] = 1
    data["Abilities"]["CHA"] = 0

    // AC and speed
    data["AC"] = 16
    data["Speed"] = "40ft"

    // Proficiencied Saving Throws
    data["ProfSaving"] = ["STR", "CON"]
    // Proficiencied Skills
    data["ProfSkills"] = ["Athletics", "Intimidation", "Perception", "Nature"]
    // Expertise: None

    // Setting HP
    data["HP"] = 12 + 7*5 + data["Abilities"]["CON"]*6

    // Equipment
    data["Equipment"] = [
                    "Frost Reaver: 1 Battle Axe, +4 to hit, 2d6+3 cold damage", 
                    "Javelins 4",
                    "Truth's Edge: 1 Sword, +3 to hit, 1d6+3 slashing damage",
                    "Explorer's Pack: Backpack, bedroll, mess kit, tinderbox, torch (10), rations (10), waterskin, hempen rope"
                ]
    
   // Features
   data["Features"] = [
                    "Rage: Enter a rage as a Bonus Action in combat. You have advantage on Strength Checks + Saving Throws. +2 to attack rolls, resistance to damage.",
                    "Reckless Attack: Attack roll with advantage, but get attacked with advantage too",
                    "Extra Attack: 2 attacks per round",
                    "Frenzy: Use your bonus action to attack."
                ]
    // Setting Initiative
    data["Initiative"] = data["Abilities"]["DEX"]


    // Setting Saving Throw Values
    Object.keys(data["Saving"]).forEach((save) => {
        const d = data["ProfSaving"].includes(save) ? data["profBonus"] : 0;
        data["Saving"][save] = Number(data["Abilities"][save]) + Number(d)
    });

    // Setting Skills Values
    Object.keys(data["Skills"]).forEach((skill) => {
        const d = data["ProfSkills"].includes(skill) ? data["profBonus"] : 0;
        const e = data["ExpertSkills"].includes(skill) ? data["profBonus"] : 0;
        data["Skills"][skill] = Number(data["Abilities"][skillsDict[skill]]) + Number(d) + Number(e)
    });

}

function handleWarlock(data) {
        // Abilities
        data["Abilities"]["STR"] = 0
        data["Abilities"]["DEX"] = 2
        data["Abilities"]["CON"] = 3
        data["Abilities"]["INT"] = 1
        data["Abilities"]["WIS"] = 1
        data["Abilities"]["CHA"] = 4
    
        // AC and speed
        data["AC"] = 15
        data["Speed"] = "40ft"
    
        // Proficiencied Saving Throws
        data["ProfSaving"] = ["WIS", "CHA"]
        // Proficiencied Skills
        data["ProfSkills"] = ["Deception", "Intimidation", "Nature", "Sleight of Hand"]
        // Expertise: None
    
        // Setting HP
        data["HP"] = 5 + 5*5 + data["Abilities"]["CON"]*6
    
        // Equipment
        data["Equipment"] = {
                        "Aberrant Judge": "1 Greatsword, +5 to hit, 1d8+3 slashing damage", 
                        "Dungeoneer's Pack": "Backpack, crowbar, hammer, piton (10), torch (10), tinderbox, rations (10), waterskin, hempen rope", 
                        "Daggers": "2"
        }
        
        // Features
        data["Features"] = {
            "Hexblade Curse": "As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. Details from DM!",
            "Accursed Spectre": "Starting at 6th level, you can curse the soul of a person you slay, temporarily binding it in your service. When you slay a humanoid, you can cause its spirit to rise from its corpse as a specter."
        }


        // Setting Initiative
        data["Initiative"] = data["Abilities"]["DEX"]
    
        // Setting Saving Throw Values
        Object.keys(data["Saving"]).forEach((save) => {
            const d = data["ProfSaving"].includes(save) ? data["profBonus"] : 0;
            data["Saving"][save] = Number(data["Abilities"][save]) + Number(d)
        });
    
        // Setting Skills Values
        Object.keys(data["Skills"]).forEach((skill) => {
            const d = data["ProfSkills"].includes(skill) ? data["profBonus"] : 0;
            const e = data["ExpertSkills"].includes(skill) ? data["profBonus"] : 0;
            data["Skills"][skill] = Number(data["Abilities"][skillsDict[skill]]) + Number(d) + Number(e)
        })

        // Spell Mods
        data["Spell Save DC"] = 8 + data["profBonus"] + data["Abilities"]["CHA"]
        data["Spell Attack Mod"] = data["profBonus"] + data["Abilities"]["CHA"]
        data["Spell Slots"] = {"Level 3" : 4}

        // Spells
        data["Spells"] = {
            "cantrips": {
                "Mage Hand": "A spectral, floating hand appears at a point you choose within range. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial.",
                "Minor Illusion": "You create a sound or an image of an object within range that lasts for the duration.",
                "Chill Touch": "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 2d8 necrotic damage",
            },
            "eldritch evocations": {
                "Eldritch Blast": "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.",
                "Frostbite": "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes",
                "Thunderclap": "You create a burst of thunderous sound, which can be heard 100 feet away. Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage."
            },
            "spells": {
                "Counterspell": "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a success, the creature’s spell fails and has no effect.",
                "Misty Step": "As a bonus action, Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.",
                "Sheild": "As a reaction, An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC.",
                "Wrathful Smite": "As a bonus action, The next time you hit with a melee weapon attack during this spell’s duration, your attack deals an extra 1d6 psychic damage.",
                "Blur": "Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you.",
                "Branding Smite": "As a bonus action, The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target.",
                "Blink": "Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of you next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from",
                "Shatter": "A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one."
            }
        }

}

function handleWizard(data) {
    // Abilities
    data["Abilities"]["STR"] = 0
    data["Abilities"]["DEX"] = 1
    data["Abilities"]["CON"] = 1
    data["Abilities"]["INT"] = 5
    data["Abilities"]["WIS"] = 2
    data["Abilities"]["CHA"] = 1

    // AC and speed
    data["AC"] = 13
    data["Speed"] = "40ft"

// Proficiencied Saving Throws
data["ProfSaving"] = ["WIS", "CHA"]
// Proficiencied Skills
data["ProfSkills"] = ["Deception", "Intimidation", "Nature", "Sleight of Hand"]
// Expertise: None

// Setting HP
data["HP"] = 5 + 5*5 + data["Abilities"]["CON"]*6

// Equipment
data["Equipment"] = [
                {"Aberrant Judge": "1 Greatsword, +5 to hit, 1d8+3 slashing damage"}, 
                {"Dungeoneer's Pack": "Backpack, crowbar, hammer, piton (10), torch (10), tinderbox, rations (10), waterskin, hempen rope"}, 
                {"Daggers": "2"}
            ]

// Features
data["Features"] = [
    {"Hexblade Curse": "As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. Details from DM!"},
    {"Accursed Spectre": "Starting at 6th level, you can curse the soul of a person you slay, temporarily binding it in your service. When you slay a humanoid, you can cause its spirit to rise from its corpse as a specter."}
]


// Setting Initiative
data["Initiative"] = data["Abilities"]["DEX"]

// Setting Saving Throw Values
Object.keys(data["Saving"]).forEach((save) => {
    const d = data["ProfSaving"].includes(save) ? data["profBonus"] : 0;
    data["Saving"][save] = Number(data["Abilities"][save]) + Number(d)
});

// Setting Skills Values
Object.keys(data["Skills"]).forEach((skill) => {
    const d = data["ProfSkills"].includes(skill) ? data["profBonus"] : 0;
    const e = data["ExpertSkills"].includes(skill) ? data["profBonus"] : 0;
    data["Skills"][skill] = Number(data["Abilities"][skillsDict[skill]]) + Number(d) + Number(e)
})

// Spell Mods
data["Spell Save DC"] = 8 + data["profBonus"] + data["Abilities"]["CHA"]
data["Spell Attack Mod"] = data["profBonus"] + data["Abilities"]["CHA"]
data["Spell Slots"] = {"Level 3" : 4}

// Spells
data["Spells"] = {
    "cantrips": [
        {"Mage Hand": "A spectral, floating hand appears at a point you choose within range. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial."},
        {"Minor Illusion": "You create a sound or an image of an object within range that lasts for the duration."},
        {"Chill Touch": "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 2d8 necrotic damage"}
    ],
    "eldritch evocations": [
        {"Eldritch Blast": "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage."},
        {"Frostbite": "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes"},
        {"Thunderclap": "You create a burst of thunderous sound, which can be heard 100 feet away. Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage."}
    ],
    "spells": [
        {"Counterspell": "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a success, the creature’s spell fails and has no effect."},
        {"Misty Step": "As a bonus action, Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see."},
        {"Sheild": "As a reaction, An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC."},
        {"Wrathful Smite": "As a bonus action, The next time you hit with a melee weapon attack during this spell’s duration, your attack deals an extra 1d6 psychic damage."},
        {"Blur": "Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you."},
        {"Branding Smite": "As a bonus action, The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target."},
        {"Blink": "Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of you next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from"},
        {"Shatter": "A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one."}
    ]
    }
}

function charBuilder(sel) {
    const data= {
        "HP": 0,
        "Abilities": {
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
        "Languages": [],
    }
    handleClass(sel[0], data);

    delete data["ProfSaving"]
    delete data["ProfSkills"]
    delete data["ExpertSkills"]

    return data
}


export default charBuilder