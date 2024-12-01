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
  const [padVolumen, setPadVolumen] = useState();
  const [padSpeed, setPadSpeed] = useState();

  const handleSpeedChange = (speed) => {
    const audioElement = document.querySelector('audio');
    if (audioElement) {
      audioElement.playbackRate = speed;
    }
  };

  return (
    <div className="App">    
      <Nav></Nav>
      <div className='content'>
        <Screen padName={padName} fileName={fileName} padVolumen={padVolumen} padSpeed={padSpeed} ></Screen>
        <Controls onSpeedChange={handleSpeedChange} />
        <PadsPanel 
          onClickPad={(pad, fileName) => {
            setPadName(`${pad}`);
            setFileName(fileName);
            setPadVolumen(100);
            setPadSpeed(1.0);
            
          }} 
        />
      </div>
    </div>
  );
}

export default App;