import {useState} from 'react';
import Style from 'styled-components';

const classList = [
    "Barbarian",
    "Rogue",
    "Warlock",
    "Wizard"
]

const classDescriptions = {
    "Barbarian": "For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.",
    "Rogue": "Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.",
    "Warlock": "Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular.",
    "Wizard": "Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, brute-force mind control, and much more."
}

const options = [];
classList.forEach((option) => {
    options.push(<option value={option} key={option}>{option}</option>)
});

function ClassSelect(props) {

    const [value, setValue] = useState("Barbarian")

    return (
        <div>
        <label htmlFor="class">Choose a Class:
            <Select name="class" value={value} onChange={e => (setValue(e.target.value))}>
                {options}
            </Select>
            <div>{classDescriptions[value]}</div>
        </label>
        <button onClick={e => props.onConfirm(value)}>Confirm</button>
        </div>
    )
}

const Select = Style.select`
    font-size: 1em;
`

export default ClassSelect;
