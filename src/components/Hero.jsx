import { Sparkles, Users, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* background gradient + orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_0%,rgba(255,255,255,0.08)_0%,rgba(14,23,42,0)_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs text-slate-200/80 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              Build thriving League of Legends communities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Rally your squad. Grow your club. Own your legend.
            </h1>
            <p className="mt-5 text-slate-300 text-lg leading-relaxed">
              Create dedicated spaces for ranked grinders, clash teams, or casual
              night squads. Organize events, recruit members, and level up your
              community with tools designed for Summoners.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold shadow-lg shadow-amber-500/20 hover:bg-amber-300 transition">
                Create a community
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition">
                Explore features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-300/80">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-amber-400" />
                25k+ Summoners onboard
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-sky-400" />
                Safe, moderated spaces
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900/60 p-4 shadow-2xl">
              {/* Mocked UI preview */}
              <div className="rounded-xl overflow-hidden bg-slate-900/60 ring-1 ring-white/10">
                <div className="h-10 bg-slate-800/80 border-b border-white/5 flex items-center px-4 text-slate-300 text-sm">
                  Summoner Hub • Diamond+ Flex Squad
                </div>
                <div className="grid grid-cols-3 divide-x divide-white/5">
                  <div className="p-4 text-slate-300/90">
                    <p className="text-xs uppercase tracking-wide text-slate-400">Roster</p>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li>Top • BruiserMain</li>
                      <li>Jungle • PathingGod</li>
                      <li>Mid • CSWizard</li>
                      <li>ADC • CritMachine</li>
                      <li>Support • VisionControl</li>
                    </ul>
                  </div>
                  <div className="p-4 text-slate-300/90">
                    <p className="text-xs uppercase tracking-wide text-slate-400">Events</p>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li>Scrims • Fri 7pm</li>
                      <li>VOD Review • Sun 5pm</li>
                      <li>Clash Prep • Next Week</li>
                    </ul>
                  </div>
                  <div className="p-4 text-slate-300/90">
                    <p className="text-xs uppercase tracking-wide text-slate-400">Looking For</p>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li>Gold+ Top (shotcall)</li>
                      <li>Coach for macro</li>
                      <li>Sub jungler</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* glow */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-amber-500/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
