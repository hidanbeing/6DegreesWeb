import Header from "../components/Header";
import ActorGraph from "../components/ActorGraph";
import { useState } from "react";
import Footer from "../components/Footer";
import NetworkActor from "../components/network-components/NetworkActor";

function Network() {
  const [input, setInput] = useState("황정민");

  const onChage = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form>
          배우 : <input value={input} onChange={onChage}></input>
          <button
            style={{
              marginLeft: 10,
            }}
          >
            선택
          </button>
        </form>
      </div>
      {/* <ActorGraph /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <NetworkActor />
      </div>
      <Footer />
    </>
  );
}

export default Network;
