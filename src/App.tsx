import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Earbuds } from './pages/Earbuds'
import { Home } from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earbuds" element={<Earbuds />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
