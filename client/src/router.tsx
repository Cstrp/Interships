import { createBrowserRouter } from 'react-router-dom';
import { Home, SignIn, SignUp, Users } from './view/pages';
import { ROUTER_PATHS } from './data';
import { Wrapper } from './view/components';

const router = createBrowserRouter([
  { path: ROUTER_PATHS.DEFAULT, element: <Wrapper children={<Home />} /> },
  { path: ROUTER_PATHS.SIGN_IN, element: <Wrapper children={<SignIn />} /> },
  { path: ROUTER_PATHS.SIGN_UP, element: <Wrapper children={<SignUp />} /> },
  { path: ROUTER_PATHS.USERS, element: <Wrapper children={<Users />} /> },
]);

export { router };
