import {useState, useEffect, useRef} from 'reactn';
import useDebounce from './useDebounce';

const defaultOptions = {};
const defaultDebounceMiliseconds = 0;
const defaultSkipOnMount = false;

const useEffectAsync = (apiFunction, options = defaultOptions, debounceMiliseconds = defaultDebounceMiliseconds, skipOnMount = defaultSkipOnMount) => {
  let debouncedOptions = useDebounce(options, debounceMiliseconds);

  return useEffectAsyncDebounced(apiFunction, debouncedOptions, debounceMiliseconds, skipOnMount);
};

const useEffectAsyncDebounced = (apiFunction, debouncedOptions, debounceMiliseconds, skipOnMount) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const didMountRef = useRef(false);  
  // let error = null;
  // let loading = null;
  // let data = null;

  useEffect(() => {
    let cancel = false;

    const runEffect = (async () => {
      setLoading(true);

      try {
        let response = await apiFunction(debouncedOptions);
        
        if (cancel) {
          return;
        }

        setData(response);

      } catch (e) {
        setError(e);
      }
      
      setLoading(false);
    });
    
    let runIt = true;
    
    if (skipOnMount) {
      if (didMountRef.current) {
        runIt = true;
      } 
      else {
        didMountRef.current = true;
        runIt = false;
      }
    }

    if (runIt) {
      runEffect();
    }
    
    return () => {
      cancel = true;
    }
  }, [apiFunction, debouncedOptions, debounceMiliseconds]
  );

  return [ error, loading, data ];
}

export default useEffectAsync;