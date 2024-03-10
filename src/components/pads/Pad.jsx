import React from 'react'
import PropTypes from 'prop-types'
import useSound from 'use-sound'

const Pad = ({ padNumber, padFile, clickHandler, padSound, padProps})  => {
  const [playSound] = useSound( padSound, padProps );

  return (
    <>
      <div className={"pad"}
        onClick={() => {
            clickHandler( "Pad " + padNumber, padFile )
            if( padSound )  playSound()
          } 
        }
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