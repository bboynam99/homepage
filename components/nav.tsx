import classnames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

export const APP_URL = "/";

export default function Nav() {
  const [showBg, setShowBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowBg(window.scrollY > 400);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={classnames(
        "fixed w-full flex justify-center z-10 transition-all duration-200",
        {
          "py-2": showBg,
          "py-4": !showBg,
        }
      )}
      style={{
        background: showBg ? `rgba(5, 67, 255, 0.9)` : "rgba(0, 0, 0, 0)",
      }}
    >
      <ul className="flex justify-between items-center max-w-screen-lg w-full">
        <li>
          <Link href="/">
            <a className="flex items-center">
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
