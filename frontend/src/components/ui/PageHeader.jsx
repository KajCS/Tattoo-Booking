export default function PageHeader({ title, subtitle, badge, actions }) {
  return (
    <div className="flex flex-col gap-4 border-b border-purple-950/40 pb-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          {title}
        </h1>

        {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3">
        {actions}

        {badge && (
          <span className="rounded-full border border-purple-500/30 bg-purple-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}
