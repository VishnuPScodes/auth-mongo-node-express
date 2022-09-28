import { AllRoutes } from "./Components/AllRoutes";
import { Login } from "./Components/Login";
import UserData from "./Pages/UserData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <UserData/> */}
      <AllRoutes />
      {/* <Login/> */}
    </div>
  );
}
