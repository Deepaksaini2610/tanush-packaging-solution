import { sizes } from "../data/siteData";

export default function Sachets({ body, seal }) {
  return (
    <div className="flex items-end gap-3 sm:gap-5">
      {sizes.map((s) => (
        <div key={s.g} className="flex flex-col items-center gap-2">
          <div
            className="relative w-9 rounded-sm shadow sm:w-12"
            style={{ height: s.h, background: body }}
          >
            <div
              className="absolute inset-x-0 top-0 h-1.5"
              style={{ background: seal }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1.5"
              style={{ background: seal }}
            />
          </div>
          <span className="text-sm font-semibold">{s.g}g</span>
        </div>
      ))}
    </div>
  );
}
