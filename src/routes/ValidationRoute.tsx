import { Error } from '@/components';
import ChangePassword from '@/components/Auth/ChangePassword';
import { Main } from '@/components/Main';
import { Honey } from '@/components/Main/Contents';
import { Post } from '@/components/Post';
import Root from '@/components/Root';
import { Setting } from '@/components/Setting';
import * as Chat from '@/components/Chat';
import { Navigate, Route, Routes } from 'react-router-dom';
import AccessAuth from './AccessAuth';
import { RouteListType } from './type';

const routesList: RouteListType[] = [
  {
    id: 'route--root',
    path: '/root',
    private: false,
    element: <Root />,
  },
  {
    id: 'route--honeyJar',
    path: '/honeyJar',
    private: true,
    element: <Main />,
  },
  {
    id: 'route--changePassword',
    path: '/account/change-password/:token/:id',
    private: false,
    element: <ChangePassword />,
  },
  {
    id: 'route--post',
    path: '/post',
    private: true,
    element: <Post />,
  },
  {
    id: 'route--honey',
    path: '/honey/:id',
    private: true,
    element: <Honey />,
  },
  {
    id: 'route--setting',
    path: '/setting',
    private: true,
    element: <Setting />,
  },
  {
    id: 'route--chat',
    path: '/chat',
    private: true,
    element: <Chat.ChatPage />,
  },
  {
    id: 'route--notFound',
    path: '*',
    private: false,
    element: <Error.NotFound />,
  },
] as const;

export default function ValidationRoute() {
  return (
    <Routes>
      {routesList.map(route => (
        <Route
          key={route.id}
          path={route.path}
          element={
            <>
              <AccessAuth isPrivate={route.private}>{route.element}</AccessAuth>
              <Navigate replace to="/root" />
            </>
          }
        />
      ))}
    </Routes>
  );
}
