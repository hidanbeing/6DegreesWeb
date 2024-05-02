import Header from "../components/Header";
import ActorGraph from "../components/ActorGraph";
import { useState } from "react";
import Footer from "../components/Footer";
import NetworkActor from "../components/network-components/NetworkActor";
// import "../css/Network.css";
// import { NetworkGraph } from "../components/network-components/NetworkGraph";

function Network() {
  const [input, setInput] = useState("황정민");

  const onChage = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="network-main">
        <form>
          배우 : <input value={input} onChange={onChage}></input>
          <button className="network-btn">선택</button>
        </form>
        {/* <NetworkActor /> */}
        {/* <NetworkGraph actor={input} /> */}
      </div>

      <Footer />
    </>
  );
}

export default Network;
