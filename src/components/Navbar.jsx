import { Menu, Sword, Users } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Sword className="h-5 w-5 text-slate-900" />
          </div>
          <span className="text-white font-semibold tracking-tight">Summoner Hubs</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#communities" className="text-slate-300 hover:text-white transition">Communities</a>
          <a href="#cta" className="text-slate-300 hover:text-white transition">Get Started</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-amber-100 transition shadow">
            <Users className="h-4 w-4" />
            Create a community
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
