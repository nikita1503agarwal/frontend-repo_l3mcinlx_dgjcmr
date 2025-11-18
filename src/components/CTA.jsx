import { Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-amber-400 to-rose-500 p-8 sm:p-12 text-slate-900">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              Free to start
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">Spin up your community in minutes</h3>
            <p className="mt-2 text-slate-900/80">Pick a name, set your roles, and invite your squad. No servers to set up — just vibes.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex justify-center px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition">Create a community</a>
              <a href="#features" className="inline-flex justify-center px-6 py-3 rounded-lg bg-white/30 text-slate-900 font-semibold hover:bg-white/40 transition">See how it works</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
