import AppProvider from './provider/AppProvider';
import { Route } from 'react-router-dom';
import ThemeColorProvider from './provider/ThemeColorProvider';
import Root from './components/Root';
import ChangePassword from './components/Auth/ChangePassword';
import { Main } from './components/Main';
import { useState } from 'react';
import ConnectionModal from './components/Connection';
import { Post } from './components/Post';

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
          <Route path="/post" element={<Post />} />
        </AppProvider>
        <button onClick={() => setIsTestOpen(prev => !prev)}>
          연결 모달 test
        </button>
        <ConnectionModal isOpen={isTestOpen} />
      </ThemeColorProvider>
    </>
  );
}

export default App;
