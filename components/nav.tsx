import Link from "next/link";

export const APP_URL = "/";

export default function Nav() {
  return (
    <nav className="absolute w-full flex justify-center">
      <ul className="flex justify-between items-center py-4 max-w-screen-lg w-full">
        <li>
          <Link href="/">
            <a className="flex">
              <img className="w-10" src="/sailfish.svg" alt="Sailfish"></img>
              <h1 className="ml-2 font-logo text-2xl text-white">Sailfish</h1>
            </a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          <li>
            <a
              href={APP_URL}
              className="bg-sf-teal rounded-full px-4 py-2 text-sf-dark hover:shadow-lg transition-shadow duration-100 text-sm"
            >
              Open App
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
