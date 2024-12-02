import { createContext, useContext, useState } from 'react';
import { PADS_CONFIG } from '../components/Sounds'; // Tu configuración inicial

const PadsContext = createContext();

export function PadsProvider({ children }) {
    // Estado para toda la configuración de pads
    const [padsConfig, setPadsConfig] = useState(PADS_CONFIG);
    // Estado para el pad actual
    const [currentPad, setCurrentPad] = useState(null);

    // Función para actualizar un pad específico
    const updatePad = (padNumber, newProps) => {
        setPadsConfig(pads => pads.map(pad => 
            pad.padNumber === padNumber 
                ? { ...pad, ...newProps }
                : pad
        ));
    };

    // Función para actualizar solo las props de un pad
    const updatePadProps = (padNumber, newProps) => {
        setPadsConfig(pads => pads.map(pad => 
            pad.padNumber === padNumber 
                ? { ...pad, props: { ...pad.props, ...newProps } }
                : pad
        ));
    };

    return (
        <PadsContext.Provider value={{
            padsConfig,
            setPadsConfig,
            currentPad,
            setCurrentPad,
            updatePad,
            updatePadProps
        }}>
            {children}
        </PadsContext.Provider>
    );
}

export function usePads() {
    return useContext(PadsContext);
}
