import {Navigate,useLocation} from 'react-router-dom'
import Cookies from 'js-cookie'


const ProtectedRoute = ({children}) => {
	const location = useLocation();
	const cookie = Cookies.get("suid");
	if(cookie){
		return children;
	}
	return <Navigate to="/login" state={{from:location}} replace />
};
export default ProtectedRoute;