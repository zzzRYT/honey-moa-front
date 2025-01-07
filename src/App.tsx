import AppProvider from './provider/AppProvider';
import { Route } from 'react-router-dom';
import ThemeColorProvider from './provider/ThemeColorProvider';
import Root from './components/Root';
import Main from './components/Main';
import ChangePassword from './components/Auth/ChangePassword';
import { useState } from 'react';

function App() {
  const [isTestOpen, setIsTestOpen] = useState<boolean>(false);
  return (
    <>
      <ThemeColorProvider>
        <AppProvider>
          <Route path="/root" element={<Root />} />
          <Route path="/honeyJar" element={<Main />} />
          <Route
            path="/account/change-password/:token/:id"
            element={<ChangePassword />}
          />
          <button>연결 모달 test</button>
        </AppProvider>
      </ThemeColorProvider>
    </>
  );
}

export default App;
