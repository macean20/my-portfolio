import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@components/layout/Navbar'
import Footer from '@components/layout/Footer'
import ScrollToTop from '@components/layout/ScrollToTop'
import Home from '@pages/Home'
import About from '@pages/About'
import Projects from '@pages/Projects'
import ProjectDetail from '@pages/Projects/ProjectDetail'
import Certifications from '@pages/Certifications'
import Contact from '@pages/Contact'
import NotFound from '@pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/projects"       element={<Projects />} />
          <Route path="/projects/:id"   element={<ProjectDetail />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact"        element={<Contact />} />
          <Route path="*"              element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
