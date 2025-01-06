import { useState } from 'react';
import Modal from './components/Modal';
import AppProvider from './provider/AppProvider';
import { Route } from 'react-router-dom';
import ThemeColorProvider from './provider/ThemeColorProvider';
import Root from './components/Root';
import Main from './components/Main';

function App() {
  return (
    <>
      <ThemeColorProvider>
        <AppProvider>
          <Route path="/root" element={<Root />}></Route>
          <Route path="/honeyJar" element={<Main />}></Route>
        </AppProvider>
      </ThemeColorProvider>
    </>
  );
}

export default App;
