import Head from "next/head";
import React from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About | Sailfish</title>
      </Head>

      <Nav color="dark" className="shadow" />

      <main className="flex flex-col items-center">
        <div className="px-8 pt-32 sm:max-w-screen-lg sm:w-full flex items-start">
          <div
            className="w-1/3"
            style={{
              maxWidth: "214px",
            }}
          >
            <div
              className="w-full"
              style={{
                paddingTop: "105%",
                background:
                  'url("/img/about/img1.png") no-repeat center center/100%',
              }}
            />
          </div>
          <div className="flex-1 ml-4 sm:ml-20">
            <h2
              className="font-bold leading-tight"
              style={{ fontSize: "clamp(1.5rem, 6vw, 60px)" }}
            >
              About Sailfish
            </h2>
            <p className="mt-4">
              Sailfish is bringing autonomous and open financial services to
              DFINITY. The composability of "money legos" and the scalability of
              the Internet Computer allow for unlimited new markets and
              opportunities.
            </p>
          </div>
        </div>

        <div className="px-8 pt-24 pb-32 sm:max-w-screen-lg sm:w-full flex items-start">
          <div className="flex-1 mr-4 sm:mr-20">
            <h3 className="text-2xl font-bold">The Sailfish Platform</h3>
            <p className="mt-4">
              Integrate Sailfish's automated market maker and money market
              protocol (coming soon) in your product. Access Sailfish's
              liquidity and perform trades with a simple function call.
            </p>
            <p className="mt-4">
              For more information, check out our{" "}
              <a className="underline" href="https://docs.sailfish.app/">
                documentation
              </a>
              .
            </p>
          </div>
          <div
            className="w-1/3"
            style={{
              maxWidth: "403px",
            }}
          >
            <div
              className="w-full"
              style={{
                paddingTop: "92.3%",
                background:
                  'url("/img/about/img2.png") no-repeat center center/100%',
              }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
