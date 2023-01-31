import Register from "./pages/register/Register.jsx"
import Login from "./pages/login/Login.jsx"
import Top from "./pages/top/Top.jsx";
import Home from "./pages/home/Home.jsx"
import Profile from "./pages/profile/Profile.jsx"
import Settings from "./pages/settings/Settings.jsx";
import RoomList from "./pages/direct/RoomList.jsx";
//react-router-dom
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./state/AuthContext.js";
import TalkRoom from "./pages/rooms/TalkRoom.jsx";




//BrowserRouterでコンポーネントを囲む必要がある
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Top />} />
        <Route path="/home" element={user ? <Home /> : <Top />} />
        <Route path="/settings" element={user ? <Settings /> : <Top />} />
        <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={user ? <Profile /> : <Top />} type="text/css"/>
        <Route path="/direct" element={user ? <RoomList /> : <Top />} />
        <Route path="/talkroom/:room_id" element={user ? <TalkRoom /> : <Top /> } />
      </Routes>
    </Router>
  );
}

export default App;
