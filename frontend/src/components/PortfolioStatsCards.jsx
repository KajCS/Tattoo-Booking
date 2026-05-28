export default function PortfolioStatsCards({ items }) {
  const playfair = { fontFamily: "'Playfair Display', serif" };

  const totalLikes = items.reduce((sum, item) => sum + (item.likes || 0), 0);
  const totalViews = items.reduce((sum, item) => sum + (item.views || 0), 0);
  const featuredCount = items.filter((item) => item.featured).length;

  const stats = [
    { label: "Total Pieces", value: items.length },
    { label: "Total Likes", value: totalLikes },
    { label: "Total Views", value: totalViews },
    { label: "Featured", value: featuredCount },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-[#1e0d35] border border-violet-900/40 rounded-xl p-4"
        >
          <p className="text-violet-400/50 text-xs font-medium">{stat.label}</p>
          <p className="text-white text-2xl font-bold mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
