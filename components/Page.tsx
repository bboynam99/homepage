import Router from "next/router";
import React from "react";
import Nav from "../components/nav";

Router.events.on("routeChangeComplete", (url) => {
  window.analytics.page(url);
});

const Page = ({ children }) => (
  <div>
    <Nav />
    {children}
  </div>
);

export default Page;
