import {useState, useEffect} from 'reactn';
import useDebounce from './useDebounce';

const defaultOptions = {};
const defaultDebounceMiliseconds = {};

const useApiCall = (apiFunction, options = defaultOptions, debounceMiliseconds = defaultDebounceMiliseconds) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  let debouncedOptions = useDebounce(options, debounceMiliseconds);

  useEffect(() => {
    (async () => {
      
      setLoading(true);
      
      try {
        let data = await apiFunction(options);
        setData(data);
      } catch (e) {
        setError(e);
      }

      setLoading(false);

    })();
  }, [apiFunction, debouncedOptions]);

  return { error, loading, data };
};

export default useApiCall;