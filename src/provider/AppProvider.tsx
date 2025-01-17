import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes } from 'react-router-dom';
import { AppProviderProps } from './type';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toast } from '@/components/PopUp';
import ScrollToTop from '@/components/common/ScrollToTop';

const queryClient = new QueryClient();

/**
 * 여러 Provider를 한번에 관리하는 컴포넌트
 */
export default function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop>
          <Toast />
          <Routes>{children}</Routes>
        </ScrollToTop>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
