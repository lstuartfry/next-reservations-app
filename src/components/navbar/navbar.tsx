import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 border-b-2 border-gray-200 bg-white p-4 dark:border-slate-600 dark:bg-black">
      <div className="m-auto flex max-w-4xl items-center justify-between">
        <div>
          <Link
            className="flex items-center gap-2"
            href="/"
            aria-describedby="home link"
          >
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
