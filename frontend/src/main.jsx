import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import store from "./Store.js";
import {Provider} from 'react-redux'
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AhomeScreen from "./screens/adminScreens/AhomeScreen.jsx";
import AdminPrivateRoute from "./components/adminPrivateRoute.jsx";
import AdminLoginScreen from "./screens/adminScreens/adminLogin.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<RegisterScreen />} />
      <Route path='' element={<PrivateRoute />}>
      <Route path="/profile" element={<ProfileScreen />} />
      </Route>
      <Route path="/admin" element={<AdminLoginScreen/>}/>
      <Route path='' element={<AdminPrivateRoute />} >
        <Route path='/admin/adminHome' element={<AhomeScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);
