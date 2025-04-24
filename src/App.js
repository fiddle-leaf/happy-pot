import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import "./App.css";
import AuthPage from "./pages/AuthPage/AuthPage";
import NavBar from "./components/NavBar";
import PotsHistory from "./pages/PostHistory/PotsHistory";
import NewPot from "./pages/NewPot/NewPot";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {user ? (
        <AuthPage setUser={setUser} />
      ) : (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/pots/new" element={<NewPot />} />
            <Route path="/pots/history" element={<PotsHistory />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
