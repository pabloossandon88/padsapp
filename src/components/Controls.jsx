import React, { useState } from 'react'

const Controls = ({ padName, fileName }) => {
  const [showSpeedTooltip, setShowSpeedTooltip] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const handleSpeedChange = (e) => {
    const newSpeed = parseFloat(e.target.value);
    setPlaybackSpeed(newSpeed);
    
    const audioElement = document.querySelector(`#audio-${padName}`);
    if (audioElement) {
      audioElement.playbackRate = newSpeed;
      console.log(`Cambiando velocidad de ${fileName} en pad ${padName} a ${newSpeed}x`);
    }
  };

  return (
    <>
       <div className='controls'>
          <div className='btn circle' onClick={() => setShowSpeedTooltip(!showSpeedTooltip)}>
            {showSpeedTooltip && (
              <div className="speed-tooltip">
                <input 
                  type="range" 
                  min="0.5" 
                  max="2" 
                  step="0.1" 
                  value={playbackSpeed}
                  onChange={handleSpeedChange}
                />
                <span>{playbackSpeed}x</span>
              </div>
            )}
          </div>
          <div className='btn circle'></div>
          <div className='btn'></div>
          <div className='btn circle'></div>
          <div className='btn circle'></div>
          <div className='btn '></div>
          <div className='btn circle'></div>
          <div className='btn circle' style={{background: "#d50000"}}></div>
       </div>
    </>
  )
}


export default Controls

