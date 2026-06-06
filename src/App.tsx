import Cursor        from './components/Cursor'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Ticker        from './components/Ticker'
import About         from './components/About'
import Stack         from './components/Stack'
import Experience    from './components/Experience'
import Certifications from './components/Certifications'
import Contact       from './components/Contact'
import Footer        from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg min-h-screen text-slate-200 overflow-x-hidden">
      <Cursor />
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Stack />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}
