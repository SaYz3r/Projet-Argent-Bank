import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageHome from './pages/PageHome'
import PageLogin from './pages/PageLogIn'
import PageUser from './pages/PageUser'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="" element={<PageHome />} />
                <Route path="/logIn" element={<PageLogin />} />
                <Route path="/user" element={<PageUser />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
