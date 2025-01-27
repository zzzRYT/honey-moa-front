import { useCallback, useSyncExternalStore } from 'react';

/**
 *
 * @param key 스토리지에 저장될 키 값
 *
 * @returns value: 스토리지에 저장된 값
 * @returns set: 스토리지에 값을 저장하는 함수
 * @returns remove: 스토리지에 값을 삭제하는 함수
 *
 * @example
 * //별명 지정 가능
 * //const { value: theme, set: setTheme, remove: removeTheme } = useLocalStorage('theme');
 * const { value, set, remove } = useLocalStorage('key');
 *
 * const onClick = () => {
 *    set('value');
 * }
 *
 * return (
 * <>
 *  <div>{value}</div>
 *  <button onClick={onClick}>버튼</button>
 * </>
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
