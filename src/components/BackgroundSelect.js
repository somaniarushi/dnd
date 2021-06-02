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
    options.push(<span><input type="radio" name="class" value={option} key={option}/> {option} </span>)
});

function BgSelect(props) {

    const [value, setValue] = useState("Noble")

    return (
        <div>
        <H2>Choose a Background:</H2>
        <div onChange={e => (setValue(e.target.value))} style={{display: "flex", flexDirection: "column", paddingBottom: "10px"}}>
                {options}
            </div>
            <div style={{paddingBottom: "20px"}}>
                <H2>What is a {value}?</H2>
                <div>{bgDescriptions[value]}</div>
            </div>
        <Button onClick={e => props.onConfirm(value)}>Confirm</Button>
        </div>
    )
}

const Button = Style.button`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: #f7f7f7;
    border: 1px solid #111;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
`

const H2 = Style.h2`
    color: #00AAFF;
`

export default BgSelect;
