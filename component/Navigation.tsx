import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <header className="w-full py-4 px-8 bg-white shadow-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-xl font-semibold ml-4">FAQ</h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="text-gray-800 hover:text-green-500 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="text-gray-800 hover:text-green-500 transition-colors duration-200"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
