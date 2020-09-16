import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import Nav, { APP_URL } from "../components/nav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Sailfish</title>
        <link rel="icon" href="/sailfish.svg" />
      </Head>

      <Nav />

      <main className="h-screen-section bg-gradient-to-br from-sf-purple via-sf-blue to-sf-teal text-white">
        <div
          className="w-full h-full flex flex-col justify-center items-center"
          style={{
            background: 'url("/hero.png") no-repeat top right/50%',
          }}
        >
          <div className="max-w-screen-lg w-full">
            <div className="w-1/2">
              <h2
                className="font-bold"
                style={{ fontSize: "clamp(1.5rem, 6vw, 60px)" }}
              >
                DeFi for everyone
              </h2>
              <h3 className="text-lg mb-16">
                Sailfish is the gateway to open financial services for you and
                your friends
              </h3>

              <a
                className="bg-sf-teal rounded-full px-6 py-4 text-sf-dark font-semibold shadow-xl hover:bg-white transition-colors duration-200"
                href={APP_URL}
              >
                Go to App
              </a>
            </div>
          </div>
        </div>
      </main>

      <section className="h-screen-section flex items-center justify-center relative">
        <div className="max-w-screen-lg w-full">
          <h2 className="font-bold text-sf-dark text-6xl">Trade</h2>
          <div className="text-lg max-w-md text-gray-600">
            <p className="mt-4">
              Easily buy and sell tokens on the top exchanges using our
              aggregated liquidity.
            </p>
            <p className="mt-4">Simply connect your wallet to get started.</p>
          </div>
        </div>
        <div className="absolute right-0 mr-24" style={{ width: "45vw" }}>
          <div className="relative h-full flex items-center">
            <div
              className="relative mt-8 ml-8"
              style={{
                width: "50%",
                paddingBottom: "60%",
              }}
            >
              <div className="bg-sf-dark-blue absolute w-full h-full" />
            </div>
            <div
              className="h-full w-full absolute inset-y-0 -ml-8"
              style={{
                background: 'url("/section2.png") no-repeat center left /55%',
              }}
            />
          </div>
        </div>
      </section>

      <section className="h-screen-section flex">
        <div className="w-1/2 bg-gradient-to-br from-sf-purple-2 to-sf-blue">
          <div
            className="h-full w-full"
            style={{
              background: 'url("/section3.png") no-repeat center center/62.5%',
            }}
          />
        </div>
        <div
          className="w-1/2 flex flex-col justify-center"
          style={{
            background: 'url("/section3_right.png") no-repeat center center',
          }}
        >
          <div
            className="bg-white px-16 py-32 flex flex-col justify-center"
            style={{
              width: "110%",
              marginLeft: "-10%",
            }}
          >
            <h2 className="font-bold text-sf-dark text-6xl">Borrow & Lend</h2>
            <div className="text-lg max-w-md text-gray-600">
              <p className="mt-4">Access all the products in DeFi.</p>
              <p className="mt-4">
                Borrow stablecoins for trading, or lend your assets to earn
                passive income.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen-section flex items-center justify-center relative">
        <div className="max-w-screen-lg w-full">
          <h2 className="font-bold text-sf-dark text-6xl leading-tight">
            Chat &
            <br />
            Discuss
          </h2>
          <div className="text-lg max-w-md text-gray-600">
            <p className="mt-4">
              Collaborate with community members, share insights, and learn from
              each other.
            </p>
            <p className="mt-4">Choose what positions or trades to share.</p>
          </div>
        </div>
        <div
          className="absolute right-0 mr-24 grid grid-cols-3 gap-4"
          style={{ width: "45vw" }}
        >
          {Array.from({ length: 6 }, (_, i) => (
            <img
              key={i}
              className="pointer-events-none"
              src={`/grid${i + 1}.png`}
            />
          ))}
        </div>
      </section>

      <footer>
        <img src="/footer.svg" className="w-full pointer-events-none -mb-1" />
        <div className="flex flex-col items-center w-full bg-sf-footer-blue py-8 text-white">
          <div className="w-full max-w-screen-lg">
            <div className="grid grid-cols-6">
              <div className="col-span-3">
                <div className="flex items-center">
                  <img
                    className="w-10"
                    src="/sailfish.svg"
                    alt="Sailfish"
                  ></img>
                  <h1 className="ml-2 font-logo text-2xl text-white">
                    Sailfish
                  </h1>
                </div>
              </div>
              <ul className="col-span-3">
                <li className="my-2">
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/faq">
                    <a>FAQ</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-16 flex items-center justify-between border-t border-gray-400 pt-8">
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
        </div>
      </footer>
    </div>
  );
}
