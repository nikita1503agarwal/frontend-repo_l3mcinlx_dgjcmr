import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Communities from './components/Communities'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* subtle background pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.06)_0%,rgba(2,6,23,0)_70%)]"/>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\'><defs><pattern id=\'d\' width=\'32\' height=\'32\' patternUnits=\'userSpaceOnUse\'><path d=\'M0 32L32 0M-8 24 8 8M24 24 40 8\' stroke=\'rgba(255,255,255,0.04)\' stroke-width=\'1\' /></pattern></defs><rect width=\'100%\' height=\'100%\' fill=\'url(%23d)\'/></svg>')] opacity-40"/>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Communities />
        <CTA />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Summoner Hubs — Built for League players.</p>
          <nav className="flex items-center gap-6">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#communities" className="hover:text-white">Communities</a>
            <a href="#cta" className="hover:text-white">Get Started</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
