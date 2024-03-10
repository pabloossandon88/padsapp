import React, {useState} from 'react'
import PropTypes from 'prop-types'
import useSound from 'use-sound'



const Pad = ({ padNumber, padFile, clickHandler, padSound, padProps})  => {
const [padClass, setpadClass] = useState('pad pushable');

const [playSound] = useSound( padSound, padProps );
  return (
    <>
      
      <div className={padClass}
        onClick={() => {
            clickHandler( "Pad " + padNumber, padFile )
            if( padSound )  playSound()

            setpadClass('pad active')
            setTimeout(() => {
              setpadClass('pad pushable')
            }, 100);
          } 
        }
      >
        <span class="front">{padFile}</span>
               
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