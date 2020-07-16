import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
  const [modeValue, setModeValue] = useLocalStorage(initialValue);
  const body = document.querySelector('body');
  useEffect(() => {
    if (modeValue) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [modeValue, body.classList]);
  return [modeValue, setModeValue];
};
