import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import MainLayout from "./layouts/main";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
// components
import LoadingScreen from "./components/LoadingScreen";
import Homepage from "pages/Homepage";
import Adminpage from "pages/Adminpage";
import Mintpage from "pages/Mintpage/Mintpage";
// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Main Routes
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/admin", element: <Adminpage /> },
        { path: "/mint_skypunks", element: <Mintpage /> }
      ]
    }
  ]);
}

// IMPORT COMPONENTS

// Dashboard
// const PageOne = Loadable(lazy(() => import('./pages/PageOne')));
// Main
