import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/loginpage";
import Profile from "./pages/profile";
import Register from "./pages/registerPage";
import ProtectedRoute from "./components/ProtectedRouter";

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar visible on all pages */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
