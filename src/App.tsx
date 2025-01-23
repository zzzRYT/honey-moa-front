import AppProvider from './provider/AppProvider';
import { Route } from 'react-router-dom';
import ThemeColorProvider from './provider/ThemeColorProvider';
import Root from './components/Root';
import ChangePassword from './components/Auth/ChangePassword';
import { Main } from './components/Main';
import { Post } from './components/Post';
import { Honey } from './components/Main/Contents';
import { Error } from './components';

function App() {
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
          <Route path="/honey/:id" element={<Honey />} />
          <Route path="*" element={<Error.NotFound />} />
        </AppProvider>
      </ThemeColorProvider>
    </>
  );
}

export default App;
