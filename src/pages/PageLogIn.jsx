import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginSuccess } from '../store/authSlice'
import { setUser } from '../store/userSlice'
import { login, getProfile } from '../services/authService'
import Input from '../components/Input'

function PageLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [error, setError] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')

        try {
            // 1. Appel API login → récupère le token
            const loginData = await login(email, password)

            if (loginData.status !== 200) {
                setError('Email ou mot de passe incorrect')
                return
            }

            const token = loginData.body.token

            // 2. Stocke le token dans Redux
            dispatch(loginSuccess(token))

            // 3. Récupère le profil avec le token
            const profileData = await getProfile(token)

            // 4. Stocke le profil dans Redux
            dispatch(
                setUser({
                    firstName: profileData.body.firstName,
                    lastName: profileData.body.lastName,
                    email: profileData.body.email,
                })
            )

            // 5. Redirige vers le profil
            navigate('/user')
        } catch {
            setError('Une erreur est survenue, réessayez')
        }
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    )
}

export default PageLogin
