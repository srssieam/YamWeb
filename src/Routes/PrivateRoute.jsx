import { Puff } from 'react-loader-spinner'
import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if (loading) {
        return <div className="w-full h-[80vh] flex items-center justify-center">
            <Puff
                height="150"
                width="150"
                radius={1}
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }
    if (user.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/signIn"></Navigate>
};

export default PrivateRoute;