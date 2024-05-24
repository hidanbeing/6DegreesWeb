import Header from "../components/header/Header";
import { useState } from "react";
import Footer from "../components/Footer";
import "../../src/components/network-components/Network.css";

import { ConnectActor } from "../components/network-components/ConnectActor";
import NetworkActor from "../components/network-components/NetworkActor";
function Network() {
  return (
    <>
      <Header />
      {/* <NetworkActor /> */}
      <ConnectActor />
      <Footer />
    </>
  );
}

export default Network;
