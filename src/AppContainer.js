import React from "react";
import {
  Analytics,
  Cards,
  Footer,
  Navbar,
  Newsletter,
} from "./frontEnd/components";

const AppContainer = () => {
  return (
    <div>
      <Navbar />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
};

export default AppContainer;
