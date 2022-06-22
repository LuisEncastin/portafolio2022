import React, {useRef, useState} from 'react';

//hooks
import useIntersectionObserver from '../Hooks/useIntersectionObserver/useIntersectionObserver';

// createContext
const ObserverContext = React.createContext();

function ObserversProvider(props){


    // ejemplo de uso de hook useIntersectionObserver
    const ourServicesRef = useRef(); 

    const [ourServiceSectionVisibility, setOurServiceSectionVisibility] = useState(false);
    const {
        observerState
        } = useIntersectionObserver(ourServicesRef, ourServiceSectionVisibility, setOurServiceSectionVisibility);



    return(
        <ObserverContext.Provider value={{
            ourServicesRef,
            observerState
        }}>
            {props.children}
        </ObserverContext.Provider>
    )
};

export {ObserverContext, ObserversProvider}