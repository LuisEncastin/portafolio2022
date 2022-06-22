import {useEffect} from 'react'


function useIntersectionObserver(nameRef, observerState, setObserverState){

    useEffect(()=>{
      const observer = new IntersectionObserver((entries)=>{
        const entry = entries[0];
        setObserverState(entry.isIntersecting)
      });
      observer.observe(nameRef.current)
    }, [nameRef, setObserverState]);

    return {
        observerState
    }
 
}

export default useIntersectionObserver;