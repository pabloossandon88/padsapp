import React, {useState}  from 'react'
import './App.css';
import './App.scss';
import Nav from './components/Nav';
import Screen from './components/Screen'
import Controls from './components/Controls'
import PadsPanel from './components/pads/PadsPanel'

const App = () => {
  const [padName, setPadName] = useState("Welcome to PadsAPP");
  const [fileName, setFileName] = useState("by TNR Beats Lab");

  return (
    <div className="App">    
      <Nav></Nav>
      <div className='content'>
        <Screen padName={padName} fileName={fileName} ></Screen>
        <Controls></Controls>
        <PadsPanel 
          onClickPad={(pad, fileName) => {
            setPadName(`${pad}`);
            setFileName(fileName);
            
          }} 
        />
      </div>
    </div>
  );
}

export default App;