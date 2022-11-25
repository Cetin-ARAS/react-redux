import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
 
//?auth state içinde useri çekti user bilgisi varsa outlet yoksa ana sayfaya logine yönlendirdi user burda destructer oldu;

const PrivateRouter = () => {
  const { user } = useSelector((state) => state.auth);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
