import { C } from "../config/config";

const wrap = "mx-auto max-w-6xl px-4 py-14";

export default function About() {
  const rows = [
    ["Weight range", "1g to 50g per sachet"],
    ["Sachet size", "70mm x 50mm; other sizes on request"],
    ["Printed sachet minimum", C.moqPrinted],
    ["Plain sachet + sticker minimum", C.moqPlain],
    ["Machine capacity", "Add pouches per minute here"],
    ["Payment terms", "50% advance, balance before dispatch"],
  ];

  return (
    <section className={wrap}>
      <h1 className="text-3xl font-bold">About Us</h1>

      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        {C.name} is a contract packaging unit in {C.city}. We fill and seal
        powders and granules into small sachets from 1g to 50g.
      </p>

      <h2 className="mt-12 text-2xl font-bold">Capabilities and terms</h2>

      <table className="mt-4 w-full text-left text-sm">
        <tbody className="divide-y">
          {rows.map(([k, v]) => (
            <tr key={k}>
              <th className="w-1/2 py-3">{k}</th>
              <td className="py-3 text-slate-600">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
