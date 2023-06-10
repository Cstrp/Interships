import { createBrowserRouter } from "react-router-dom";
import { FetchIfYouCan, Game, HideAndSeek } from "./view";
import { RouterPaths } from "./data";

export const router = createBrowserRouter([
  {
    path: RouterPaths.DEFAULT,
    element: <Game />,
    children: [
      {
        path: RouterPaths.HIDE_AND_SEEK,
        element: <HideAndSeek width={1440} height={700} />,
      },
      {
        path: RouterPaths.FETCH_IF_YOU_CAN,
        element: <FetchIfYouCan width={1440} height={700} />,
      },
    ],
  },
]);
