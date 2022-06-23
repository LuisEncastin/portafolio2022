import {useEffect} from 'react'

function OffsetObserver(offset, setOffset){

  useEffect(() => {
    const onScroll = () => 
    setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset, setOffset]);

};

export default OffsetObserver;