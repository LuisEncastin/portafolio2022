import React, {useEffect, useRef, useState} from 'react';

//hooks
import useIntersectionObserver from '../Hooks/useIntersectionObserver/useIntersectionObserver';

// createContext
const ObserverContext = React.createContext();

function ObserversProvider(props){
    
    // generalOffset

    const [generalYOffset, setGeneralYOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => 
        setGeneralYOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
      }, [generalYOffset]);

    //ABOUT US
    //useIntersection hook

    const mapsRef = useRef(); 

    const [mapsSectionVisibility, setMapsSectionVisibility] = useState(false);
    const {
        observerState: mapsObserverState
    } = useIntersectionObserver(mapsRef, mapsSectionVisibility, setMapsSectionVisibility);

    return(
        <ObserverContext.Provider value={{
            mapsRef,
            mapsObserverState,
            generalYOffset
        }}>
            {props.children}
        </ObserverContext.Provider>
    )
};

export {ObserverContext, ObserversProvider}