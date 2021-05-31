import {useState} from 'react';
import Style from 'styled-components';
import ClassSelect from './components/ClassSelect.js';
import RaceSelect from './components/RaceSelect.js'; 

function App() {

  const [selection, setSelection] = useState([])
  if (selection.length == 0) {
    return <ClassSelect onConfirm={val => setSelection(selection + [val])}/>
  }
  else if (selection.length === 1) {
    return <RaceSelect onConfirm={val => setSelection(selection + [val])}/>
  }
}

export default App;
