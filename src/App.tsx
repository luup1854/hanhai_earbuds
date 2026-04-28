import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Earbuds } from './pages/Earbuds'
import { Home } from './pages/Home'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': '深圳市皓承智能设备有限公司｜首页',
      '/earbuds': '深圳市皓承智能设备有限公司｜宾利伯爵耳机',
    }

    document.title = titles[location.pathname] ?? '深圳市皓承智能设备有限公司'
  }, [location.pathname])

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
