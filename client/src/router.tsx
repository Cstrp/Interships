import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATHS } from "./data";
import {
  Collections,
  DetailedItem,
  Header,
  Home,
  Items,
  Login,
  Register,
  Wrapper,
} from "./view";

export const router = createBrowserRouter(
  [
    {
      path: ROUTER_PATHS.DEFAULT,
      element: (
        <>
          <Header />
          <Wrapper>
            <Home />
          </Wrapper>
        </>
      ),
      children: [
        { path: ROUTER_PATHS.SIGN_IN, element: <Login /> },
        { path: ROUTER_PATHS.SIGN_UP, element: <Register /> },
        {
          path: ROUTER_PATHS.COLLECTIONS,
          element: <Collections />,
          children: [
            { path: "/collections/:collectionId", element: <Items /> },
          ],
        },
        {
          path: "/items/:itemId",
          element: <DetailedItem />,
        },
      ],
    },
  ],
  {}
);
