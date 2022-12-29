import { useEffect, useState } from 'react';
import axios from '../api/axios';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState(0);

  useEffect(() => {
    const fetchResult = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(url);
        setResult(res.data);
        isLoading(false);
      } catch (err) {
        setErrorMessage(err?.response?.data?.error?.message);
        setIsLoading(false);
      }
    };
    fetchResult();
  }, [url]);

  return {
    isLoading,
    result,
    errorMessage,
  };
};

export default useFetch;
