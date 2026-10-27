import { Routes, Route, Navigate } from "react-router";

// importing the app pages
import Newsfeed from "./pages/Newsfeed";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

// the app is controlling which page is shown
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/newsfeed" element={<Newsfeed />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;