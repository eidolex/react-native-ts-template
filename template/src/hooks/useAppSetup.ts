import {useEffect, useState} from 'react';

export default function useAppSetup() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    setAppIsReady(true);
  }, []);

  return {
    appIsReady,
  };
}
