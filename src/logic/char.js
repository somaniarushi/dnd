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
    data["Equipment"] = {
        "Time's Arrows": "1 crossbow and 20 arrows, +4 to hit, 2d6 piercing damage", 
        "Rapier": "+2 to hit, 1d6 slashing damage", 
        "Daggers": 2,
        "Thieves' Tools": "A small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers",
        "Burglar's Pack": "Backpack, ball bearing (100), string, candle (5), crowbar, hammer, piton (5), hooded lantern, flask of oil (2), rations (5), tinderbox, waterskin, hempen rope"
    }

    // Features
    data["Features"] = {
        "Sneak Attack": "Once per round, extra damage on attack.",
        "Cunning Action": "On your bonus action, you can Dash, Disengage or Hide.",
        "Uncanny Dodge": "You can use your reaction to half the damage dealt to you.",
        "Assassinate": "Advantage on any creature that hasn't had their turn yet. If creature is surprised, critical hit."
    }

    // Language
    data["Languages"] = ["Thieves Cant"]


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
    data["Equipment"] = {
                    "Frost Reaver": "1 Battle Axe, +4 to hit, 2d6+3 cold damage", 
                    "Javelins": 4,
                    "Truth's Edge": "1 Sword, +3 to hit, 1d6+3 slashing damage",
                    "Explorer's Pack": "Backpack, bedroll, mess kit, tinderbox, torch (10), rations (10), waterskin, hempen rope"
                }
    
   // Features
   data["Features"] = {
                    "Rage": "Enter a rage as a Bonus Action in combat. You have advantage on Strength Checks + Saving Throws. +2 to attack rolls, resistance to damage.",
                    "Reckless Attack": "Attack roll with advantage, but get attacked with advantage too",
                    "Extra Attack": "2 attacks per round",
                    "Frenzy": "Use your bonus action to attack."
                }
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

        // Spell Mods
        data["Spell Save DC"] = 8 + data["profBonus"] + data["Abilities"]["CHA"]
        data["Spell Attack Mod"] = data["profBonus"] + data["Abilities"]["CHA"]
        data["Spell Slots"] = 3

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
    data["Abilities"]["CHA"] = -1

    // AC and speed
    data["AC"] = 13
    data["Speed"] = "30ft"

    // Proficiencied Saving Throws
    data["ProfSaving"] = ["WIS", "INT"]
    // Proficiencied Skills
    data["ProfSkills"] = ["Arcana", "Athletics", "Insight", "Perception", "History"]
    // Expertise: None

    // Setting HP
    data["HP"] = 5 + 4*5 + data["Abilities"]["CON"]*6

    // Equipment
    data["Equipment"] = {
                    "Quarterstaff": "+4 to hit, 1d6+1 bludgeoning damage.", 
                    "Scholars Pack": "Backpack, book of lore, ink, ink pen, parchment (10), little bag of sand, small knife",
                    "Daggers": "2"
                }

    // Features
    data["Features"] = {
                    "Hypnotic Gaze": "As an action, choose one creature that you can see within 5 feet of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. The charmed creature's speed drops to 0, and the creature is incapacitated and visibly dazed.",
                    "Instinctive Charm": "when a creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack's range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature that is closest to it, not including you or itself."
                }

    // Spell Mods
    data["Spell Save DC"] = 8 + data["profBonus"] + data["Abilities"]["INT"]
    data["Spell Attack Mod"] = data["profBonus"] + data["Abilities"]["INT"]
    data["Spell Slots"] = {"Level 1": 4, "Level 2": 3, "Level 3" : 3}

    // Spells
    data["Spells"] = {
        "cantrips": {
            "Mage Hand": "A spectral, floating hand appears at a point you choose within range. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial.",
            "Light": "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet.",
            "Message": "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.",
            "Mending": "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin.",
            "Firebolt": "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage."
        },
        "level 1": {
            "Mage Armor": "You touch a willing creature who isn’t wearing armor, and a protective magical force surrounds it until the spell ends. The target’s base AC becomes 13 + its Dexterity modifier.",
            "Identify": "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any",
            "Find Familiar": "You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel.",
            "Tasha's Hideous Laughter": "A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration.",
            "Magic Missile": "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target.",
            "Expeditious Retreat": "As a bonus action, you can take the Dash action",
            "Feather Fall": "As a reaction,  falling creature’s rate of descent slows to 60 feet per round until the spell ends"
        },
        "level 2": {
            "Locate Object": "Describe or name an object that is familiar to you. You sense the direction to the object’s location, as long as that object is within 1,000 feet of you",
            "Misty Step": "As a bonus action, Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.",
            "Scorching Ray": "You create three rays of fire and hurl them at targets within range. On a hit, the target takes 2d6 fire damage.",
            "Shatter": "A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one",
        },
        "level 3": {
            "Counterspell": "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a success, the creature’s spell fails",
            "Dispel Magic": "Choose any creature, object, or magical effect within range.",
            "Fly": "You touch a willing creature. The target gains a flying speed of 60 feet for the duration.",
            "Lightning Bolt": "A stroke of lightning forming a line of 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one."
        }
    }
}

function handleRace(charRace, data) {
    if (charRace === "Elf") {
        data["Abilities"]["DEX"]+=1
        data["Features"]["Darkvision"]="Can see 60ft in darkness."
        data["ProfSkills"].push("Perception")
        data["Languages"].push("Common", "Elven", "Sylvan")
    }
    else if (charRace === "Dwarf") {
        data["Abilities"]["CON"]+=1
        data["ProfSkills"].push("History")
        data["Features"]["Darkvision"]="Can see 60ft in darkness."
        data["Languages"].push("Common", "Dwarvish")
    }
    else if (charRace === "Hobbit") {
        data["Abilities"]["DEX"]+=1
        data["Features"]["Lucky"]="When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die. You must use the new result."
        data["Features"]["Brave"]="You have advantage on saving throws against being frightened."
        data["Languages"].push("Common", "Halfling")
    }
    else if (charRace === "Human") {
        data["Languages"].push("Common", "Undercommon")
        data["Abilities"]["INT"]+=1
    }
    else if (charRace === "Orc") {
        data["Abilities"]["STR"]+=1
        data["Features"]["Darkvision"]="Can see 60ft in darkness."
        data["Features"]["Aggressive"]="As a bonus action, move closer to your enemy by your speed."
        data["Languages"].push("Common", "Orc")
    }
    else {
        console.log("You done fucked up")
    }
}

function handleBackground(bg, data) {
    if (bg === "Noble") {
        data["ProfSkills"].push("History", "Persuasion");
        data["Languages"].push("Elvish")
        data["Equipment"]["Nobleman's Pack"] = "A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25gp"
    }
    else if (bg === "Soldier") {
        data["ProfSkills"].push("Athletics", "Intimidation")
        data["Equipment"]["Soldier's Kit"] = "An insignia of rank, a trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner), a set of bone dice or a deck of cards, a set of common clothes, and a pouch containing 10gp"
    }
    else if (bg === "Charlatan") {
        data["ProfSkills"].push("Deception", "Sleight of Hand")
        data["Equipment"]["Deception Kit"] = "A set of fine clothes, a disguise kit, tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke), and a pouch containing 15gp"
    }
    else if (bg === "Criminal") {
        data["ProfSkills"].push("Deception", "Stealth")
        data["Equipment"]["Thieves Kit"] = "A crowbar, a set of dark common clothes including a hood, and a pouch containing 15gp"
    }
    else {
        console.log("You done fucked up.")
    }
}

function setValues(data) {

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
        "Equipment": {},
        "Features": {},
        "Languages": [],
    }
    handleClass(sel[0], data);
    handleRace(sel[1], data);
    handleBackground(sel[2], data);
    setValues(data)

    delete data["ProfSaving"]
    delete data["ProfSkills"]
    delete data["ExpertSkills"]

    return data
}


export default charBuilder