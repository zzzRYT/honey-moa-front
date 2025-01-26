import { ThemeProvider } from 'styled-components';
import { darkThemeColor, mainThemeColor } from '../styles/theme';
import { ThemeColorProviderProps } from './type';
import { GlobalStyles } from '../styles/GlobalStyles';
import { useStore } from 'zustand';
import { useThemeStore } from '@/store/themeStore/useThemeStore';
import { useEffect } from 'react';
import useLocalStorage from '@/hook/useLocalStorage';

/**
 * 테마지정을 위한 Provider
 *
 * @example
 * import { theme } from "테마 경로"
 *
 * const ThemeTest = styled.div`
 *  background-color: ${({ theme }) => theme.main_100};
 *  color: ${({ theme }) => theme.text_100};
 * `
 *
 * @example
 * import { useTheme } from "styled-components"
 *
 * const theme = useTheme()
 * ...
 */
export default function ThemeColorProvider({
  children,
}: ThemeColorProviderProps) {
  const { theme, setTheme } = useStore(useThemeStore);
  const [themeColor] = useLocalStorage('theme');

  useEffect(() => {
    setTheme(themeColor === 'dark' ? 'light' : 'dark');
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkThemeColor : mainThemeColor}>
      <GlobalStyles color={theme === 'dark' ? true : false} />
      {children}
    </ThemeProvider>
  );
}
