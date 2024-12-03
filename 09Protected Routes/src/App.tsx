import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import ProtectedRoute from "./components/protectedRoute";
import Dashboard from "./components/dashboard";

function App() {
  const isAuthenticated: boolean = true; // This value should come from your authentication logic

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              {" "}
              <Dashboard />{" "}
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

// Why Use Protected Routes?
// Authentication: Ensure that only logged-in users can access certain parts of the app (e.g., a user dashboard).
// Authorization: Manage access to pages based on the user's role or permissions (e.g., admins accessing the admin panel).
// Security: Protect sensitive content from unauthorized access.
