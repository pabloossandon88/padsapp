import React from 'react'
import Pad from './Pad'
//import useSound from 'use-sound'
import kick1 from '../../assets/sounds/KICK-1.wav'
import kick2 from '../../assets/sounds/KICK-2.wav'
import kick3 from '../../assets/sounds/KICK-3.wav'
import snare1 from '../../assets/sounds/SNARE-1.wav'
import snare2 from '../../assets/sounds/SNARE-2.wav'
import snare3 from '../../assets/sounds/SNARE-3.wav'
import hat1 from '../../assets/sounds/HAT-1.wav'
import hat2 from '../../assets/sounds/HAT-2.wav'
import oh1 from '../../assets/sounds/OH-4.wav'
import oh2 from '../../assets/sounds/OH-9.wav'
import perc1 from '../../assets/sounds/PERC-1.wav'
import perc2 from '../../assets/sounds/PERC-2.wav'
import perc3 from '../../assets/sounds/PERC-1.wav'
import piano1 from '../../assets/sounds/Piano-1.wav'
import piano2 from '../../assets/sounds/Piano-2.wav'
import piano3 from '../../assets/sounds/Piano-3.wav'

const pads =    [
                    {padNumber: 13, padFile: "KICK-1.wav", sound: kick1, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 14, padFile: "KICK-2.wav", sound: kick2, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 15, padFile: "KICK-3.wav", sound: kick3, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 16, padFile: "PERC-1.wav", sound: perc1, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 9,  padFile: "SNARE-1.wav", sound: snare1, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 10, padFile: "SNARE-2.wav", sound: snare2, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 11, padFile: "SNARE-3.wav", sound: snare3, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 12, padFile: "PERC-2.wav", sound: perc2, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 5,  padFile: "HAT-1.wav", sound: hat1, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 6,  padFile: "HAT-2.wav", sound: hat2, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 7,  padFile: "PERC-3.wav", sound: perc3, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 8,  padFile: "OH-1.wav", sound: oh1, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 1,  padFile: "OH-2.wav", sound: oh2, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 2,  padFile: "Piano-1.wav", sound: piano1, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 3,  padFile: "Piano-2.wav", sound: piano2, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } },
                    {padNumber: 4,  padFile: "Piano-3.wav", sound: piano3, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true } }
                ]

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