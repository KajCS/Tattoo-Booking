import { Flame } from "lucide-react";

export default function ActivityFeed({ activities }) {
  const playfair = { fontFamily: "'Playfair Display', serif" };

  return (
    <div className="bg-[#1e0d35] border border-violet-900/40 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-5">
        <Flame size={15} className="text-violet-400" />
        <h3 style={playfair} className="text-white text-base">
          Activity
        </h3>
      </div>
      <div className="space-y-4">
        {activities.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0">
              <item.icon size={14} className={item.color} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-violet-100/80 text-xs leading-relaxed">
                {item.text}
              </p>
              <p className="text-violet-400/40 text-xs mt-0.5">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
