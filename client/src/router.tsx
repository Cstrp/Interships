import { createBrowserRouter } from 'react-router-dom';
import { ROUTER_PATHS } from './data';
import { Container } from './view/components';
import { Home, SignIn, SignUp, UsersDashboard } from './view/pages';

export const router = createBrowserRouter([
  { path: ROUTER_PATHS.HOME, element: <Container children={<Home />} /> },
  { path: ROUTER_PATHS.SIGN_UP, element: <Container children={<SignUp />} /> },
  { path: ROUTER_PATHS.SIGN_IN, element: <Container children={<SignIn />} /> },
  { path: ROUTER_PATHS.USERS, element: <Container children={<UsersDashboard />} /> },
]);
