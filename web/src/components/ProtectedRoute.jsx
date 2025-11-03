import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles, children }) => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  
  if (!user || !allowedRoles.includes(user.type)) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

export default ProtectedRoute;