import { useCallback, useSyncExternalStore } from 'react';

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
  const setStorage = useCallback(
    (newValue: string) => {
      localStorage.setItem(key, newValue);
      dispatchEvent(new StorageEvent('storage', { key: key, newValue }));
    },
    [key]
  );

  const removeStorage = useCallback(() => {
    localStorage.removeItem(key);
    dispatchEvent(new StorageEvent('storage', { key: key }));
  }, [key]);

  const getSnapshot = () => localStorage.getItem(key);

  const subscribe = (listener: () => void) => {
    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  };

  const store = useSyncExternalStore(subscribe, getSnapshot);

  return { value: store, set: setStorage, remove: removeStorage };
}
