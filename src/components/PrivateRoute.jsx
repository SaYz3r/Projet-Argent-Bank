import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
    const { isLoggedIn } = useSelector((state) => state.auth)

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
