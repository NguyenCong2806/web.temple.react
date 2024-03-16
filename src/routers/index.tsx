import { createBrowserRouter } from "react-router-dom";
import AppMain from "../views/layouts/main/appmain";
import HomeView from "../views/homeview/homeview";
import NganhHocView from "../views/nganhhoc/nganhhoc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppMain />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/:nganh_hoc",
        element: <NganhHocView />,
      },
    ],
  },
]);

export default router;
