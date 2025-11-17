import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { HomePage, ServicesPage, AboutPage, ContactPage, RequestPage } from './components/Pages'
import './index.css'

function AppRouter() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/anfrage" element={<RequestPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Coins Guard. Alle Rechte vorbehalten.</p>
        <div className="flex gap-6">
          <a href="/about" className="hover:text-gray-900">Über uns</a>
          <a href="/services" className="hover:text-gray-900">Leistungen</a>
          <a href="/contact" className="hover:text-gray-900">Kontakt</a>
        </div>
      </div>
    </footer>
  )
}

export default AppRouter
