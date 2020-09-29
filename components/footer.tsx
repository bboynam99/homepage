import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
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
              <li className="mt-2 sm:mb-4 font-bold text-gray-400">Sailfish</li>
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
              <li className="mt-2 sm:mb-4 font-bold text-gray-400">Platform</li>
              {/* <li className="my-2">
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
              </li> */}
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
  );
}
