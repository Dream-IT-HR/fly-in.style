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
  // const [state, setState] = useState({
  //   error: null,
  //   loading: false,
  //   data: null
  // });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  // const error = state.error;
  // const loading = state.loading;
  // const data = state.data;
  
  const didMountRef = useRef(false);  
  // let error = null;
  // let loading = null;
  // let data = null;

  // const setLoading = (value) => 
  // {
  //   let newState = {...state, ...{ loading: value }};
  //   setState(newState);
  // }

  // const setData = (value) => 
  // {
  //   let newState = {...state, ...{ data: value }};
  //   setState(newState);
  // }

  // const setError = (value) => 
  // {
  //   let newState = {...state, ...{ error: value }};
  //   setState(newState);
  // }

  useEffect(() => {
    let cancel = false;
    
    const runEffect = (async () => {
      try {
        setLoading(true);
        
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
  }, [apiFunction, debouncedOptions, debounceMiliseconds, skipOnMount]
  );

  return [ error, loading, data ];
}

export default useEffectAsync;