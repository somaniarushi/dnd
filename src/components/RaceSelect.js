import {useState} from 'react';
import Style from 'styled-components';

const raceList = [
    "Elf",
    "Dwarf",
    "Hobbit",
    "Human",
    "Orc"
]

const raceDescriptions = {
    "Elf": "Elves are a magical people of otherworldly grace, living in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze.",
    "Dwarf": "Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs – these common threads unite all dwarves.",
    "Hobbit": "The comforts of home are the goals of most hobbits' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies. Hobbits work readily with others, and they are loyal to their friends. They can display remarkable ferocity when their friends, families, or communities are threatened.",
    "Human": "In the reckoning of Middle Earth, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Humans are the innovators, the achievers, and the pioneers of the worlds",
    "Orc": "Savage and fearless, orc tribes are ever in search of elves, dwarves, and humans to destroy. They are motivated by their hatred of the civilized races of the world and their need to satisfy the demands of their deities."
}

const options = [];
raceList.forEach((option) => {
    options.push(<span><input type="radio" name="class" value={option} key={option}/> {option} </span>)
});

function RaceSelect(props) {
    const [value, setValue] = useState("Elf")
    return (
        <div>
        <H2>Choose a Race:</H2>
        <div onChange={e => (setValue(e.target.value))} style={{display: "flex", flexDirection: "column", paddingBottom: "10px"}}>
                {options}
            </div>
            <div style={{paddingBottom: "20px"}}>
                <H2>What is a {value}?</H2>
                <div>{raceDescriptions[value]}</div>
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

export default RaceSelect;
