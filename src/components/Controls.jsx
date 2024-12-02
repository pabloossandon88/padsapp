import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faGauge, faUpload, faX, faPlay } from '@fortawesome/free-solid-svg-icons';



const Controls = ({ padName, fileName }) => {
  const [showVolumenTooltip, setShowVolumenTooltip] = useState(false);
  const [playbackVolumen, setPlaybackVolumen] = useState(1);

  const [showSpeedTooltip, setShowSpeedTooltip] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const handleVolumenChange = (e) => {
    const newVolumen = parseFloat(e.target.value);
    
    setPlaybackVolumen(newVolumen);
    //setShowVolumenTooltip(false);
    
    const audioElement = document.querySelector(`#audio-${padName}`);
    if (audioElement) {
      audioElement.playbackRate = newVolumen;
      console.log(`Cambiando volumen de ${fileName} en pad ${padName} a ${newVolumen}x`);
    }
  };

  const handleSpeedChange = (e) => {
    const newSpeed = parseFloat(e.target.value);
    
    setPlaybackSpeed(newSpeed);
    //setShowSpeedTooltip(false);
    
    const audioElement = document.querySelector(`#audio-${padName}`);
    if (audioElement) {
      audioElement.playbackRate = newSpeed;
      console.log(`Cambiando velocidad de ${fileName} en pad ${padName} a ${newSpeed}x`);
    }
  };

  return (
    <>
       <div className='controls'>
          <div className='btn circle' onClick={() => setShowVolumenTooltip(!showVolumenTooltip)}>
            <FontAwesomeIcon icon={faVolumeHigh} />
            {showVolumenTooltip && (
              <div className="tooltip tooltip-volumen" onClick={() => setShowVolumenTooltip(!showVolumenTooltip)}>
                <FontAwesomeIcon icon={faX} className='btn-close'/>
                <p className='tooltip-title'>Volumen : {playbackVolumen} %</p>
                <div className='tooltip-content'>
                  <span className='tooltip-icon'><FontAwesomeIcon icon={faVolumeHigh} /></span>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="1" 
                    value={playbackVolumen}
                    onChange={handleVolumenChange}
                  />
                </div>              
              </div>
            )}
          </div>
          
          <div className='btn circle' onClick={() => setShowSpeedTooltip(!showSpeedTooltip)}>
            <FontAwesomeIcon icon={faGauge} />
            {showSpeedTooltip && (
              <div className="tooltip tooltip-speed">
                <FontAwesomeIcon icon={faX} className='btn-close' onClick={() => setShowSpeedTooltip(!showSpeedTooltip)}/>
                <p className='tooltip-title'>Velocidad : {playbackSpeed}</p>
                <div className='tooltip-content'>
                  <span className='tooltip-icon'>
                    <FontAwesomeIcon icon={faPlay} />
                  </span>
                  <input 
                    type="range" 
                    min="0.00" 
                    max="2.00" 
                    step="0.01" 
                    value={playbackSpeed}
                    onChange={handleSpeedChange}
                  />
                </div>
              </div>
            )}
          </div>
          <div className='btn'></div>
          <div className='btn circle'>
            <FontAwesomeIcon icon={faUpload} />
          </div>
          <div className='btn circle'></div>
          <div className='btn '></div>
          <div className='btn circle'></div>
          <div className='btn circle' style={{background: "#d50000"}}></div>
       </div>
    </>
  )
}


export default Controls

