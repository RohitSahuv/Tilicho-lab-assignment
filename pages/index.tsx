import type { NextPage } from "next";
import Tablemanagement from "./tablemanagement";
import React from "react";

const Home: NextPage = () => {
  return <Tablemanagement />;
};

export default React.memo(Home);