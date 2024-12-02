import kick1 from './../assets/sounds/KICK-1.wav';
import kick2 from './../assets/sounds/KICK-2.wav';
import kick3 from './../assets/sounds/KICK-3.wav';
import perc1 from './../assets/sounds/PERC-1.wav';
import snare1 from './../assets/sounds/SNARE-1.wav';
import snare2 from './../assets/sounds/SNARE-2.wav';
import snare3 from './../assets/sounds/SNARE-3.wav';
import perc2 from './../assets/sounds/PERC-2.wav';
import hat1 from './../assets/sounds/HAT-1.wav';
import hat2 from './../assets/sounds/HAT-2.wav';
import perc3 from './../assets/sounds/PERC-3.wav';
import oh1 from './../assets/sounds/OH-4.wav';
import oh2 from './../assets/sounds/OH-9.wav';
import piano1 from './../assets/sounds/Piano-1.wav';
import piano2 from './../assets/sounds/Piano-2.wav';
import piano3 from './../assets/sounds/Piano-3.wav';

// Función para limpiar el nombre del archivo
const getCleanFileName = (fullPath) => {
    // Extrae solo el nombre base (ejemplo: "KICK-1.wav")
    return fullPath.split('/').pop().split('.')[0] + '.wav';
};

export const PADS_CONFIG = [
    {
        padNumber: 13, 
        padFile: getCleanFileName(kick1), // Esto mostrará "KICK-1.wav"
        sound: kick1,
        props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }
    },
    {padNumber: 14, padFile: getCleanFileName(kick2), sound: kick2, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }},
    {padNumber: 15, padFile: getCleanFileName(kick3), sound: kick3, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }},
    {padNumber: 16, padFile: getCleanFileName(perc1), sound: perc1, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }},
    {padNumber: 9,  padFile: getCleanFileName(snare1), sound: snare1, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }},
    {padNumber: 10, padFile: getCleanFileName(snare2), sound: snare2, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }},
    {padNumber: 11, padFile: getCleanFileName(snare3), sound: snare3, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }},
    {padNumber: 12, padFile: getCleanFileName(perc2), sound: perc2, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }},
    {padNumber: 5,  padFile: getCleanFileName(hat1), sound: hat1, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }},
    {padNumber: 6,  padFile: getCleanFileName(hat2), sound: hat2, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }},
    {padNumber: 7,  padFile: getCleanFileName(perc3), sound: perc3, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }},
    {padNumber: 8,  padFile: getCleanFileName(oh1), sound: oh1, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }},
    {padNumber: 1,  padFile: getCleanFileName(oh2), sound: oh2, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }},
    {padNumber: 2,  padFile: getCleanFileName(piano1), sound: piano1, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }},
    {padNumber: 3,  padFile: getCleanFileName(piano2), sound: piano2, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }},
    {padNumber: 4,  padFile: getCleanFileName(piano3), sound: piano3, props: { playbackRate: 1, interrupt: false, volumen: 0.99, soundEnabled: true }}
];

// También podemos mantener SOUNDS si lo necesitas en algún otro lugar
export const SOUNDS = {
    kick1, kick2, kick3,
    perc1, perc2, perc3,
    snare1, snare2, snare3,
    hat1, hat2,
    oh1, oh2,
    piano1, piano2, piano3
};

export default PADS_CONFIG;