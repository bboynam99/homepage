import Router from "next/router";
import React from "react";

Router.events.on("routeChangeComplete", (url) => {
  window.analytics.page(url);
});

const Page = ({ children }) => <div>{children}</div>;

export default Page;
