import {useState} from 'react';
import Style from 'styled-components';

const classList = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Monk",
    "Paladin",
    "Rogue",
    "Warlock",
    "Wizard"
]

const classDescriptions = {
    "Barbarian": "rawr rawr",
    "Bard": "music music",
    "Cleric": "heal heal",
    "Monk": "punchy punchy",
    "Paladin": "god champion",
    "Rogue": "hidey hidey",
    "Warlock": "deal deal",
    "Wizard": "spelly spelly"
}

const options = [<option value="Barbarian">Barbarian</option>];
classList.slice(1).forEach((option) => {
    options.push(<option value={option}>{option}</option>)
});

function ClassSelect(props) {

    const [value, setValue] = useState("Barbarian")

    return (
        <div>
        <label for="class">Choose a Class:
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
