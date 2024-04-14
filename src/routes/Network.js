import Header from "../components/Header";
import ActorGraph from "../components/ActorGraph";
import { useState } from "react";
import Footer from "../components/Footer";

function Network() {
  const [input, setInput] = useState("황정민");

  const onChage = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <Header />
      <div>
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
      <ActorGraph />
      <Footer />
    </>
  );
}

export default Network;
