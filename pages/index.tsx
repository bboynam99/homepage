import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import Nav, { APP_URL } from "../components/nav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Sailfish</title>
        <link rel="icon" href="/img/sailfish.svg" />
      </Head>

      <Nav />

      <main className="h-screen-section bg-gradient-to-br from-sf-purple via-sf-blue to-sf-teal text-white">
        <div
          className="w-full h-full flex flex-col justify-center items-center"
          style={{
            background: 'url("/img/hero.png") no-repeat top right/50%',
          }}
        >
          <div className="px-8 py-16 sm:max-w-screen-lg sm:w-full">
            <div className="pr-1/2">
              <h2
                className="font-bold leading-tight"
                style={{ fontSize: "clamp(1.5rem, 6vw, 60px)" }}
              >
                DeFi for everyone
              </h2>
              <h3 className="sm:text-lg mt-4 mb-8 sm:mb-16">
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
        <div className="px-8 w-1/2 sm:max-w-screen-lg sm:w-full">
          <div className="py-8 sm:pr-1/2">
            <h2
              className="font-bold text-sf-dark"
              style={{ fontSize: "clamp(1.5rem, 6vw, 60px)" }}
            >
              Trade
            </h2>
            <div className="sm:text-lg max-w-md text-gray-600">
              <p className="mt-4">
                Easily buy and sell tokens on the top exchanges using our
                aggregated liquidity.
              </p>
              <p className="mt-4">Simply connect your wallet to get started.</p>
            </div>
          </div>
        </div>
        <div className="sm:absolute sm:right-0 w-1/2 w-45vw">
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
              className="h-full w-full absolute inset-y-0 sm:-ml-8"
              style={{
                background:
                  'url("/img/section2.png") no-repeat center left /55%',
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
              background:
                'url("/img/section3.png") no-repeat center center/62.5%',
            }}
          />
        </div>
        <div
          className="w-1/2 flex flex-col justify-center"
          style={{
            background:
              'url("/img/section3_right.png") no-repeat center center',
          }}
        >
          <div
            className="bg-white px-8 sm:px-16 py-8 sm:py-32 flex flex-col justify-center"
            style={{
              width: "110%",
              marginLeft: "-10%",
            }}
          >
            <h2
              className="font-bold text-sf-dark"
              style={{ fontSize: "clamp(1.5rem, 6vw, 60px)" }}
            >
              Borrow & Lend
            </h2>
            <div className="sm:text-lg max-w-md text-gray-600">
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
        <div className="px-8 w-1/2 sm:max-w-screen-lg sm:w-full">
          <div className="py-8 sm:pr-1/2">
            <h2
              className="font-bold text-sf-dark leading-tight"
              style={{ fontSize: "clamp(1.5rem, 6vw, 60px)" }}
            >
              Chat &
              <br />
              Discuss
            </h2>
            <div className="sm:text-lg max-w-md text-gray-600">
              <p className="mt-4">
                Collaborate with community members, share insights, and learn
                from each other.
              </p>
              <p className="mt-4">Choose what positions or trades to share.</p>
            </div>
          </div>
        </div>
        <div className="sm:absolute sm:right-0 grid grid-cols-3 gap-4 w-1/2 w-45vw mr-4">
          {Array.from({ length: 6 }, (_, i) => (
            <img
              key={i}
              className="pointer-events-none"
              src={`/img/grid${i + 1}.png`}
            />
          ))}
        </div>
      </section>

      <footer>
        <img
          src="/img/footer.svg"
          className="w-full pointer-events-none -mb-1 hidden sm:block"
        />
        <div className="flex flex-col items-center w-full bg-sf-footer-blue py-8 text-white">
          <div className="w-full px-8 sm:max-w-screen-lg">
            <div className="sm:grid grid-cols-4">
              <div className="col-span-1 hidden sm:block">
                <div className="flex items-center">
                  <img
                    className="w-10"
                    src="/img/sailfish.svg"
                    alt="Sailfish"
                  ></img>
                </div>
              </div>
              <ul className="col-span-1">
                <li className="mt-2 sm:mb-4 font-bold text-gray-400">
                  Company
                </li>
                <li className="my-2">
                  <Link href="/about">
                    <a className="group flex items-center justify-between">
                      About
                      <FontAwesomeIcon
                        className="sm:hidden transform group-hover:-translate-x-2 transition-all duration-100"
                        icon={["fas", "angle-right"]}
                        size="1x"
                        fixedWidth
                      />
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className="col-span-2">
                <li className="mt-2 sm:mb-4 font-bold text-gray-400">
                  Platform
                </li>
                <li className="my-2">
                  <Link href="/faq">
                    <a className="group flex items-center justify-between">
                      FAQ
                      <FontAwesomeIcon
                        className="sm:hidden transform group-hover:-translate-x-2 transition-all duration-100"
                        icon={["fas", "angle-right"]}
                        size="1x"
                        fixedWidth
                      />
                    </a>
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="https://docs.sailfish.app/">
                    <a className="group flex items-center justify-between">
                      Docs
                      <FontAwesomeIcon
                        className="sm:hidden transform group-hover:-translate-x-2 transition-all duration-100"
                        icon={["fas", "angle-right"]}
                        size="1x"
                        fixedWidth
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-16 sm:flex items-center justify-between border-t border-gray-400 pt-8">
              <div className="text-center">
                <a
                  target="_blank"
                  href="https://twitter.com/Sailfishapp"
                  className="mr-2"
                >
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    size="1x"
                    fixedWidth
                  />
                </a>
                <a
                  target="_blank"
                  href="https://medium.com/@sailfishapp"
                  className="mr-2"
                >
                  <FontAwesomeIcon
                    icon={["fab", "medium"]}
                    size="1x"
                    fixedWidth
                  />
                </a>
                <a
                  target="_blank"
                  href="https://discord.gg/7Wbqucc"
                  className="mr-2"
                >
                  <FontAwesomeIcon
                    icon={["fab", "discord"]}
                    size="1x"
                    fixedWidth
                  />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/sailfish-app"
                  className="mr-2"
                >
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    size="1x"
                    fixedWidth
                  />
                </a>
              </div>
              <div className="text-center text-xs text-gray-400 sm:mr-2 mt-4 sm:mt-0">
                © {new Date().getFullYear()} Sailfish
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
