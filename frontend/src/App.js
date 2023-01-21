import Register from "./pages/register/Register.jsx"
import Login from "./pages/login/Login.jsx"
import Top from "./pages/top/Top.jsx";
import Home from "./pages/home/Home.jsx"
import Profile from "./pages/profile/Profile.jsx"
import Settings from "./pages/settings/Settings.jsx";
import Direct from "./pages/direct/Direct.jsx"

//react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//BrowserRouterでコンポーネントを囲む必要がある

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Top />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/direct" element={<Direct />} />
      </Routes>
    </Router>
  );
}

export default App;
