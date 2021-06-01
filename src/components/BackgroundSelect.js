import {useState} from 'react';
import Style from 'styled-components';

const bgList = [
    "Noble",
    "Soldier",
    "Entertainer",
    "Criminal"
]

const bgDescriptions = {
    "Noble": "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence.",
    "Soldier": "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield.",
    "Entertainer": "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger.",
    "Criminal": "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld.",
}

const options = [];
bgList.forEach((option) => {
    options.push(<option value={option} key={option}>{option}</option>)
});

function BgSelect(props) {

    const [value, setValue] = useState("Noble")

    return (
        <div>
        <label htmlFor="class">Choose a Background:
            <Select name="class" value={value} onChange={e => (setValue(e.target.value))}>
                {options}
            </Select>
            <div>{bgDescriptions[value]}</div>
        </label>
        <button onClick={e => props.onConfirm(value)}>Confirm</button>
        </div>
    )
}

const Select = Style.select`
    font-size: 1em;
`

export default BgSelect;
