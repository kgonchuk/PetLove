// import { lazy, Suspense } from "react";
// import * as ROUTES from "../src/global/routes";
// import { GlobalStyle } from "./components/GlobalStyle";
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import Layout from "./components/Layout/Layout";
// const HomePage = lazy(() => import("../src/pages/HomePage"));
// const News = lazy(() => import("../src/pages/News"));
// const Notices = lazy(() => import("../src/pages/Notices"));
// const Friends = lazy(() => import("../src/pages/Friends"));
// const Login = lazy(() => import("../src/pages/Login"));
// const Registration = lazy(() => import("../src/pages/Login"));
// const Profile = lazy(() => import("../src/pages/Profile"));

// const appRoutes = [
//   {
//     path: ROUTES.HOME_ROUTE,
//     element: <HomePage />,
//   },
//   {
//     path: ROUTES.NEWS_ROUTE,
//     element: <News />,
//   },
//   {
//     path: ROUTES.NOTICES_ROUTE,
//     element: <Notices />,
//   },
//   {
//     path: ROUTES.FRIENDS_ROUTE,
//     element: <Friends />,
//   },
//   {
//     path: ROUTES.LOGIN_ROUTE,
//     element: <Login />,
//   },
//   {
//     path: ROUTES.REGISTRATION_ROUTE,
//     element: <Registration />,
//   },
//   {
//     path: ROUTES.PROFILE_ROUTE,
//     element: <Profile />,
//   },
// ];

// export const App = () => {
//   return (
//     <>
//       <Layout>
//         <Suspense>
//           <Routes>
//             {appRoutes.map(({ path, element }) => (
//               <Route key={path} path={path} element={element} />
//             ))}
//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//         </Suspense>
//       </Layout>
//     </>
//   );
// };

// export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { refreshUser } from "../redux/auth/authOperation";
import RestrictedRoute from "./RestrictedRoute";

const HomePage = lazy(() => import("../pages/HomePage"));
const News = lazy(() => import("../pages/News"));
const Notices = lazy(() => import("../pages/Notices"));
const Friends = lazy(() => import("../pages/Friends"));
const Login = lazy(() => import("../pages/LoginPage"));
const Registration = lazy(() => import("../pages/RegistrationPage"));
const Profile = lazy(() => import("../pages/ProfilePage"));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/friends" element={<Friends />} />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/profile" component={<Login />} />
          }
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute
              redirectTo="/profile"
              component={<Registration />}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
