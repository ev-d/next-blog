import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaSearch />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the article.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}
