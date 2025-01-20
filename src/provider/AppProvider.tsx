import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes } from 'react-router-dom';
import { AppProviderProps } from './type';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ScrollToTop from '@/components/common/ScrollToTop';
import { Error, Loading } from '@/components';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

/**
 * 여러 Provider를 한번에 관리하는 컴포넌트
 */
export default function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Error.ErrorBoundary>
        <Suspense fallback={<Loading.Spinner />}>
          <BrowserRouter>
            <ScrollToTop>
              <ToastContainer position="bottom-left" />
              <Routes>{children}</Routes>
            </ScrollToTop>
          </BrowserRouter>
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </Error.ErrorBoundary>
    </QueryClientProvider>
  );
}
