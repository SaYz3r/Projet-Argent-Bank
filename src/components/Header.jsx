import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'
import { clearUser } from '../store/userSlice'
import Logo from '../assets/argentBankLogo.png'

function Header() {
    const { isLoggedIn } = useSelector((state) => state.auth)
    const { firstName } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logout())
        dispatch(clearUser())
    }

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img
                    src={Logo}
                    alt="Argent Bank Logo"
                    className="main-nav-logo-image"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {isLoggedIn ? (
                    <>
                        <NavLink className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i>
                            {firstName}
                        </NavLink>
                        <NavLink
                            className="main-nav-item"
                            to="/"
                            onClick={handleLogout}
                        >
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </NavLink>
                    </>
                ) : (
                    <NavLink className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                )}
            </div>
        </nav>
    )
}

export default Header
