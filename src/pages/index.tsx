import React from "react";
import LayoutProvider from "@theme/LayoutProviders";
import NavBar from "@theme/Navbar";

import Footer from "@theme/Footer";
const Home = (): JSX.Element => {
  return (
    <LayoutProvider>
      <NavBar />
      <Footer />
    </LayoutProvider>
  );
};

export default Home;
