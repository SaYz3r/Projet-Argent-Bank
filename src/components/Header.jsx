import { NavLink } from 'react-router-dom'
import Logo from '../assets/argentBankLogo.png'

function Header() {
    const { isLoggedIn } = true // useSelector(state => state.auth)

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    src={Logo}
                    alt="Argent Bank Logo"
                    className="main-nav-logo-image"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            {isLoggedIn ? (
                <>
                    <NavLink to="/user" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </NavLink>
                    <NavLink to="/index" className="main-nav-item">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </NavLink>
                </>
            ) : (
                <NavLink to="/logIn" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            )}
        </nav>
    )
}

export default Header
