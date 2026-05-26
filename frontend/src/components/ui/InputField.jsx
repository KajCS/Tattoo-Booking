export default function InputField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-300">
        {label}
      </label>

      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-purple-950/40 bg-[#0d081b] px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
      />
    </div>
  );
}
