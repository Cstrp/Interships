import { createBrowserRouter } from 'react-router-dom';
import { ROUTER_PATHS } from './data';
import { Home, SignIn, SignUp, Users } from './view/pages';

const router = createBrowserRouter([
  { path: ROUTER_PATHS.DEFAULT, element: <Home /> },
  { path: ROUTER_PATHS.SIGN_IN, element: <SignIn /> },
  { path: ROUTER_PATHS.SIGN_UP, element: <SignUp /> },
  { path: ROUTER_PATHS.USERS, element: <Users /> },
]);

export { router };
