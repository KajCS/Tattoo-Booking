const playfair = { fontFamily: "'Playfair Display', serif" };

const statusColors = {
  paid: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  deposit: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  forfeited: "text-red-400 bg-red-500/10 border-red-500/20",
};

const TransactionTable = ({ transactions }) => {
  return (
    <div className="bg-[#1e0d35]/60 backdrop-blur-md border border-violet-900/40 rounded-2xl overflow-hidden shadow-xl">
      <div className="flex items-center justify-between px-5 py-4 border-b border-violet-900/30 bg-violet-950/20">
        <h3 style={playfair} className="text-white text-lg font-medium">
          Recent Transactions
        </h3>
        <button className="text-violet-400/50 hover:text-violet-200 text-xs font-semibold transition-colors">
          View all ledger
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-violet-900/20 bg-violet-950/10">
              {[
                "Client",
                "Service / Flash",
                "Amount",
                "Deposit",
                "Date",
                "Status",
              ].map((h) => (
                <th
                  key={h}
                  className="text-left text-violet-400/50 text-xs uppercase tracking-wider px-5 py-3 font-bold"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-violet-900/15">
            {transactions.map((t, i) => (
              <tr
                key={i}
                className="hover:bg-violet-900/10 transition-colors group"
              >
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white text-[10px] font-bold shadow-md">
                      {t.client
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="text-white text-sm font-medium group-hover:text-violet-200 transition-colors">
                      {t.client}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-violet-300/70 text-sm font-medium">
                  {t.style}
                </td>
                <td className="px-5 py-3.5 text-white text-sm font-semibold">
                  {t.amount}
                </td>
                <td className="px-5 py-3.5 text-violet-400/60 text-sm font-medium">
                  {t.deposit}
                </td>
                <td className="px-5 py-3.5 text-violet-400/60 text-sm font-medium">
                  {t.date}
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] uppercase font-bold border tracking-wider shadow-sm inline-block ${statusColors[t.status]}`}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
