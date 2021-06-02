import {useState} from 'react';
// import Style from 'styled-components';
import ClassSelect from './components/ClassSelect.js';
import RaceSelect from './components/RaceSelect.js'; 
import BgSelect from './components/BackgroundSelect.js';
import charBuilder from './logic/char.js';

import {JsonTable} from 'react-json-to-html';
import ReactJson from 'react-json-view'


function App() {

  const [selection, setSelection] = useState([])

  if (selection.length === 0) {
    return <ClassSelect onConfirm={val => setSelection(selection.concat(val))}/>
  }
  else if (selection.length === 1){
    return (
      <div>
        <div>You have chosen: {selection.join(" ")}</div>
        <RaceSelect onConfirm={val => setSelection(selection.concat(val))}/>
    </div>
    )
  }
  else if (selection.length === 2) {
    return (
      <div>
        <div>You have chosen: {selection.join(" ")}</div>
        <BgSelect onConfirm={val => setSelection(selection.concat(val))}/>
    </div>
    )
  }
  else {
    return (
      <div>
        <ReactJson src={charBuilder(selection)} name="Character Sheet" indentWidth={8} displayDataTypes={false} displayObjectSize={false} collapseStringsAfterLength={50} style={{fontSize: "1.5em"}}/>
    </div>
    );
  }
}

export default App;
