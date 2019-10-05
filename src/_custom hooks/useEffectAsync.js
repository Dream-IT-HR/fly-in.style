import {useState, useEffect} from 'reactn';
import useDebounce from './useDebounce';

const defaultOptions = {};
const defaultDebounceMiliseconds = 0;

const useEffectAsync = (apiFunction, options = defaultOptions, debounceMiliseconds = defaultDebounceMiliseconds) => {
  let debouncedOptions = useDebounce(options, debounceMiliseconds);

  return useEffectAsyncDebounced(apiFunction, debouncedOptions, debounceMiliseconds);
};

const useEffectAsyncDebounced = (apiFunction, debouncedOptions, debounceMiliseconds) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  // let error = null;
  // let loading = null;
  // let data = null;

  useEffect(() => {
    let cancel = false;

    const runEffect = (async () => {
      setLoading(true);
      //loading = true;

      try {
        let response = await apiFunction(debouncedOptions);
        
        if (cancel) {
          return;
        }

        setData(response);
        //data = response;

      } catch (e) {
        setError(e);
        //error = e;
      }
      
      setLoading(false);
      //loading = false;
    });
    
    runEffect();

    return () => {
      cancel = true;
    }
  }, [apiFunction, debouncedOptions, debounceMiliseconds]
  );

  return [ error, loading, data ];
}

export default useEffectAsync;