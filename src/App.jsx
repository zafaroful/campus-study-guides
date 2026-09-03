import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import GuidesPage from './pages/GuidesPage'
import StrategiesPage from './pages/StrategiesPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-page text-text-body">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/strategies" element={<StrategiesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
