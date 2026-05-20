import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageHome from './pages/PageHome'
import PageLogin from './pages/PageLogIn'
import PageUser from './pages/PageUser'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="" element={<PageHome />} />
                <Route path="/logIn" element={<PageLogin />} />
                <Route path="*" element={<PageHome />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/profile" element={<PageUser />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
