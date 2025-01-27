import { useState } from 'react';

/**
 *
 * @param key | localStorage에 저장될 key값
 * @param initialValue | localStorage에 저장될 초기값
 * @returns | [storedValue, setValue]을 반환
 *
 * @example |
 * const [themeColor, setThemeColor] = useLocalStorage('theme', 'light');
 *
 * const toggleHandler = () => {
 *  setThemeColor(prev => (prev === 'dark' ? 'light' : 'dark'));
 * };
 *
 * return (
 *  <button onClick={toggleHandler}>테마 변경</button>
 * )
 */
export default function useLocalStorage(key: string) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item;
  });

  const setValue = (value: string) => {
    const valueToStore = value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, valueToStore);
  };

  return [storedValue, setValue] as const;
}
