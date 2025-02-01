import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppProviderProps } from './type';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ScrollToTop from '@/components/common/ScrollToTop';
import { Error, Loading } from '@/components';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import * as Chat from '@/components/Chat';

const queryClient = new QueryClient();

/**
 * 여러 Provider를 한번에 관리하는 컴포넌트
 */
export default function AppProvider({ children }: AppProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <QueryClientProvider client={queryClient}>
      <Error.ErrorBoundary>
        <Suspense fallback={<Loading.Spinner />}>
          <BrowserRouter>
            <ScrollToTop>
              <ToastContainer position="bottom-left" />
              <>{children}</>
              {/* Todo 로그인 & 연결 여부 분기처리 */}
              <Chat.ChatButton setIsOpen={setIsOpen} />
              <Chat.ChatBox setIsOpen={setIsOpen} isOpen={isOpen} />
              {/*  */}
            </ScrollToTop>
          </BrowserRouter>
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </Error.ErrorBoundary>
    </QueryClientProvider>
  );
}
