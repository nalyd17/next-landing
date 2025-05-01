import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-7xl font-bold">Next Zero</h1>
      <h2 className="max-w-3xl text-4xl font-semibold text-gray-700">
        An opinionated, stripped-down Next.js starter with zero bloat — clean,
        minimal, production-ready foundation.
      </h2>
    </div>
  );
}
