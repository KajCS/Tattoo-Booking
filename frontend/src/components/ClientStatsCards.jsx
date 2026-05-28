const ClientStatsCards = ({ clients }) => {
  const stats = [
    {
      label: "Total Clients",
      value: clients.length,
      sub: "All time",
    },
    {
      label: "Repeat Clients",
      value: `${Math.round((clients.filter((c) => c.sessions > 1).length / clients.length) * 100)}%`,
      sub: "Loyalty rate",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl p-4 shadow-xl"
        >
          <p className="text-white text-2xl font-semibold tracking-tight">
            {s.value}
          </p>
          <p className="text-violet-400/50 text-xs mt-0.5">{s.sub}</p>
          <p className="text-violet-300/70 text-xs font-medium mt-2 uppercase tracking-wider">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ClientStatsCards;
