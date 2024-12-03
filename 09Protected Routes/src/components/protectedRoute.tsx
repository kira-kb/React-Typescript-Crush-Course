import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  children,
}) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

// ProtectedRoute Component: This component checks whether the isAuthenticated prop is true. If it is, it renders the child component (the protected route content). If not, it redirects the user to the login page using the Navigate component from react-router-dom.
