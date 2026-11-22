import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-3xl font-bold">Page Not Found</h1>

      <p className="mt-3 text-slate-600">The page you opened does not exist.</p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 rounded-md bg-[#1F3A93] px-6 py-3 text-white"
      >
        Go to Home
      </button>
    </section>
  );
}
