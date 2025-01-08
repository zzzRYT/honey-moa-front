import React, { ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom'; // 라우터가 필요한 경우
import { mainThemeColor } from '@/styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const TestProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={mainThemeColor}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <>{children}</>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: TestProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
