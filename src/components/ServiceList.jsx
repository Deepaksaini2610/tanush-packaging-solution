import { services } from "../data/siteData";

export default function ServiceList() {
  return (
    <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {services.map(([title, desc]) => (
        <div key={title} className="border-l-4 border-[#F39C12] pl-4">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

          <p className="mt-1 text-slate-600">{desc}</p>
        </div>
      ))}
    </div>
  );
}
