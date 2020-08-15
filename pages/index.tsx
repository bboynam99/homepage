import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Sailfish</title>
        <link rel="icon" href="/sailfish.svg" />
      </Head>

      <Nav />

      <main className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="font-hairline uppercase display-name">Sailfish</h1>
        <h2
          className="font-bold"
          style={{ fontSize: "clamp(16px, 6vw, 60px)" }}
        >
          DeFi for everyone.
        </h2>
      </main>

      <footer className="flex justify-center bg-black text-gray-200 px-12 pt-8 pb-8">
        <div className="w-full max-w-screen-lg">
          <ul>
            <li className="my-2">
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </li>
          </ul>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <a href="https://twitter.com/Sailfishapp" className="mr-2">
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  size="sm"
                  fixedWidth
                />
              </a>
              <a href="https://github.com/sailfish-app" className="mr-2">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  size="sm"
                  fixedWidth
                />
              </a>
            </div>
            <span className="text-xs mr-2">
              © {new Date().getFullYear()} Sailfish
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
