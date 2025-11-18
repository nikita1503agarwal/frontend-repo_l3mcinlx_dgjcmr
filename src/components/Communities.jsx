import { Users, Flame } from "lucide-react";

const sample = [
  {
    name: "Baron Mavens",
    desc: "Diamond+ macro-focused group scrimming twice weekly.",
    members: 128,
    theme: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "ARAM After Dark",
    desc: "Late-night normals and ARAM queue, chill vibes only.",
    members: 342,
    theme: "from-sky-400 to-cyan-400",
  },
  {
    name: "Clash Conquerors",
    desc: "Weekend warriors coordinating brackets and comps.",
    members: 214,
    theme: "from-amber-400 to-rose-500",
  },
];

export default function Communities() {
  return (
    <section id="communities" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Discover featured communities</h2>
            <p className="mt-2 text-slate-300">A taste of what players are building.</p>
          </div>
          <a href="#cta" className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-white/10 text-white hover:bg-white/5">Create yours</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sample.map((c) => (
            <div key={c.name} className="group relative rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden">
              <div className={`h-24 bg-gradient-to-r ${c.theme} opacity-80`} />
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{c.name}</h3>
                <p className="mt-1 text-slate-300 text-sm">{c.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-slate-300 text-sm">
                  <Users className="h-4 w-4 text-amber-400" />
                  {c.members} members
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-t from-slate-950/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
