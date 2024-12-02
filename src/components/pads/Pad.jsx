import React, {useState} from 'react'
import PropTypes from 'prop-types'
import useSound from 'use-sound'


const Pad = ({ padNumber, padFile, clickHandler, padSound, padProps})  => {
  const [playSound] = useSound( padSound, padProps );
  padProps.playbackRate = 0.2;
  const [padClassName, setPadClassName] = useState("pad");
  
  return (
    <>
      <div className={padClassName}

        onTouchStart={() => {
          clickHandler( "Pad " + padNumber, padFile )
          if( padSound ) {
            playSound()
            setPadClassName( "pad active")
            setTimeout(() => {
              setPadClassName( "pad")
            }, 100);

            
          }

        } }
      >
        <span className={"pad-touchable"}>{padFile}</span>
      </div>
    </>
  )
}

Pad.propTypes = {
  padNumber: PropTypes.string.isRequired,
  padFile: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  padSound: PropTypes.string
}

export default Pad