import { Routes, Route } from "react-router";
import UserData from "../Pages/UserData";
import { Login } from "./Login";
import { Register } from "./Register";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/UserData" element={<UserData />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
};
