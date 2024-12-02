import React from 'react'
import Pad from './Pad'
//import useSound from 'use-sound'
import { PADS_CONFIG } from '../Sounds'; //
const pads =  PADS_CONFIG;
console.log(pads);

const renderPads = (onClickPad) => {
    
    const renderPad = pad => (
        <div key={"contentPad-"+pad.padNumber}>
            <span className='pad-text'>Pad {pad.padNumber} </span>
            <Pad 
                padNumber={pad.padNumber.toString()}
                padFile={pad.padFile.toString()}
                clickHandler={onClickPad}
                padSound={pad.sound ? pad.sound : undefined}
                padProps={pad.props}
            />
        </div>
    )

    return pads.map(renderPad)

}

const PadsPanel = ({onClickPad}) => {
    return (
        <div className='pads-content'>
            {
                renderPads(onClickPad)
            }   
        </div>
    )
}

export default PadsPanel