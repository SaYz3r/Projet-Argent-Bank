import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageHome from './pages/PageHome'
import PageLogin from './pages/PageLogIn'
import PageConnected from './pages/PageConnected'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    ;<BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/" element={<PageConnected />} />
            <Route path="/" element={<PageLogin />} />
        </Routes>
        <Footer />
    </BrowserRouter>
}

export default App
