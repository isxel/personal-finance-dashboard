import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ element }) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log("ProtectedRoute - User:", user);
  }, [user]);

  return user ? element : <Navigate to="/login" />;
};
ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
