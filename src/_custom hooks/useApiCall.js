import {useState, useEffect} from 'reactn';
import useDebounce from './useDebounce';

const defaultOptions = {};
const defaultDebounceMiliseconds = {};

const useApiCall = (apiFunction, options = defaultOptions, debounceMiliseconds = defaultDebounceMiliseconds) => {
  let debouncedOptions = useDebounce(options, debounceMiliseconds);

  return useApiCallDebounced(apiFunction, debouncedOptions, debounceMiliseconds);
};

const useApiCallDebounced = (apiFunction, debouncedOptions, debounceMiliseconds) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      
      setLoading(true);
      
      try {
        let data = await apiFunction(debouncedOptions);
        setData(data);
      } catch (e) {
        setError(e);
      }

      setLoading(false);

    })();
  }, [apiFunction, debouncedOptions, debounceMiliseconds]);

  return [ error, loading, data ];
}

export default useApiCall;