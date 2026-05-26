export default function SectionCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-purple-950/40 bg-[#140e24] p-6 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
