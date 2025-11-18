import { CalendarRange, Users, ShieldCheck, Megaphone, Crown, Swords } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: CalendarRange,
      title: "Events & Schedules",
      desc: "Run scrims, VOD reviews, and Clash prep with clean calendars and reminders.",
    },
    {
      icon: Users,
      title: "Recruitment Hub",
      desc: "Post roles, filter by rank and lane, and find your perfect duo or team.",
    },
    {
      icon: ShieldCheck,
      title: "Smart Moderation",
      desc: "Auto-filters, role-gated channels, and reporting keep spaces safe.",
    },
    {
      icon: Megaphone,
      title: "Announcements",
      desc: "Highlight patch notes, scrim results, and club milestones in style.",
    },
    {
      icon: Crown,
      title: "Role Management",
      desc: "Leaders, coaches, captains, and members with granular permissions.",
    },
    {
      icon: Swords,
      title: "Match Highlights",
      desc: "Share clips, MVP votes, and recap your best plays each week.",
    },
  ];
  return (
    <section id="features" className="py-20 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Everything your club needs</h2>
          <p className="mt-3 text-slate-300">Tools built for ranked grinders, clash champions, and chill night squads.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-slate-900" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
