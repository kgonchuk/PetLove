import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { refreshUser } from "../redux/auth/authOperation";
import RestrictedRoute from "./RestrictedRoute";
import { Loader } from "./Loader/Loader.styled";
import NoticesPage from "../pages/NoticesPage";
import LoginPage from "../pages/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import AddPetPage from "../pages/AddPetPage";

const HomePage = lazy(() => import("../pages/HomePage"));
const News = lazy(() => import("../pages/NewsPage"));
const Notices = lazy(() => import("../pages/NoticesPage"));
const Friends = lazy(() => import("../pages/Friends"));
const Login = lazy(() => import("../pages/LoginPage"));
const Registration = lazy(() => import("../pages/RegistrationPage"));
const Profile = lazy(() => import("../pages/ProfilePage"));
const AddPet = lazy(() => import("../pages/AddPetPage"));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <div>refreshing</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/notices" element={<NoticesPage />} />
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
        <Route
          path="/addPet"
          element={<PrivateRoute redirectTo="/login" component={<AddPet />} />}
        />
        {/* <Route
          path="/addPet"
          element={
            <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
          }
        ></Route> */}
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
