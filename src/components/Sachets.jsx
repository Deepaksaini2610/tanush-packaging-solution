import { sizes } from "../data/siteData";

export default function Sachets({ body, seal }) {
  // sirf pehla aur aakhri size
  const shown = [sizes[0], sizes[sizes.length - 1]];

  return (
    <div className="flex items-end gap-3 sm:gap-5">
      {shown.map((s) => (
        <div key={s.g} className="flex flex-col items-center gap-2">
          {/* baaki code same */}
        </div>
      ))}
    </div>
  );
}