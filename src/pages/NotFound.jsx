import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-teal text-sm mb-2">404 / not found</p>
        <h1 className="font-display text-3xl font-semibold">This route doesn't exist</h1>
        <Link to="/" className="inline-block mt-6 text-copper hover:text-teal font-mono text-sm">
          ← Back home
        </Link>
      </div>
    </main>
  );
}
