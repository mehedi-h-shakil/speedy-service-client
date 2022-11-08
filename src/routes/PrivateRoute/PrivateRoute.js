import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    <div className="flex justify-center items-center p-40">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
    </div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default PrivateRoute;
