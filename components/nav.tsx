import Link from "next/link";

const APP_URL = "/";

export default function Nav() {
  return (
    <nav className="absolute w-full flex justify-center">
      <ul className="flex justify-between items-center px-6 py-4 max-w-screen-lg w-full">
        <li>
          <Link href="/">
            <a>
              <img className="w-10" src="/sailfish.svg" alt="Sailfish"></img>
            </a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          <li>
            <a
              href={APP_URL}
              className="px-4 py-3 rounded-lg border-2 border-black no-underline hover:shadow-lg transition-shadow duration-100"
            >
              Open App
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
