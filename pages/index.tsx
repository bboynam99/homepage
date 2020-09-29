import Head from "next/head";
import React from "react";
import Footer from "../components/footer";
import Nav, { APP_URL } from "../components/nav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Sailfish</title>
      </Head>

      <Nav />

      <main className="h-screen-section bg-gradient-to-br from-sf-purple via-sf-blue to-sf-teal text-white">
        <div
          className="w-full h-full flex flex-col justify-center items-center"
          style={{
            background: 'url("/img/index/hero.png") no-repeat top right/50%',
          }}
        >
          <div className="px-8 py-16 sm:max-w-screen-lg sm:w-full">
            <div className="pr-1/2">
              <h2
                className="font-bold leading-tight"
                style={{ fontSize: "clamp(1.5rem, 6vw, 60px)" }}
              >
                DeFi for Everyone
              </h2>
              <h3 className="sm:text-lg mt-4 mb-8 sm:mb-16">
                Sailfish is the gateway to open financial services on the
                DFINITY Internet Computer.
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
                Easily buy and sell tokens with our automated market maker.
              </p>
              <p className="mt-4">Bootstrap liquidity for new markets.</p>
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
                  'url("/img/index/section2.png") no-repeat center left /55%',
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
                'url("/img/index/section3.png") no-repeat center center/62.5%',
            }}
          />
        </div>
        <div
          className="w-1/2 flex flex-col justify-center"
          style={{
            background:
              'url("/img/index/section3_right.png") no-repeat center center',
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
              <p className="mt-4">Autonomous money markets.</p>
              <p className="mt-4">
                Earn passive income on your assets. Borrow from the aggregated
                lending pool.
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
              <p className="mt-4">Trade with your friends.</p>
              <p className="mt-4">
                Collaborate with community members, share insights, and learn
                from each other.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:absolute sm:right-0 grid grid-cols-3 gap-4 w-1/2 w-45vw mr-4">
          {Array.from({ length: 6 }, (_, i) => (
            <img
              key={i}
              className="pointer-events-none"
              src={`/img/index/grid${i + 1}.png`}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
