import Home from "./pages/Home";
import Profile from "./pages/Profile";
import {PROFILE_ROUTE, HOME_ROUTE} from "./utils/consts";

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile,
  },
];
