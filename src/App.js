import {useState} from 'react';
// import Style from 'styled-components';
import ClassSelect from './components/ClassSelect.js';
import RaceSelect from './components/RaceSelect.js'; 
import BgSelect from './components/BackgroundSelect.js';
import charBuilder from './logic/char.js';

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
        <div>You have chosen: {selection.join(" ")}</div>
        <div>Details: <pre>{JSON.stringify(charBuilder(selection), null, 2)}</pre></div>
        <div>Retreived!</div>
    </div>
    );
  }
}

export default App;
