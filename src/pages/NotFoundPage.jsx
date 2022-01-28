import React from "react";
import { NavbarLog } from "../components/NavbarLog/NavbarLog";
import { NotFound } from "../components/NotFound/NotFound";

const NotFoundPage = () => {
  return (
    <>
      <NavbarLog />
      <NotFound />
    </>
  );
};

export { NotFoundPage };
