import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b bg-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-6 sm:justify-between">
        <Link href="/" className="flex items-center justify-center">
          <h1 className="text-2xl font-bold text-white">Next Landing</h1>
        </Link>
      </div>
    </nav>
  );
}
