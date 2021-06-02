import {useState} from 'react';
import Style from 'styled-components';

const bgList = [
    "Noble",
    "Soldier",
    "Charlatan",
    "Criminal"
]

const bgDescriptions = {
    "Noble": "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence.",
    "Soldier": "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield.",
    "Charlatan": "You have always had a way with people. You know what makes them tick, you can tease out their hearts' desires after a few minutes of conversation, and with a few leading questions you can read them like they were children's books. It's a useful talent, and one that you're perfectly willing to use for your advantage.",
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
