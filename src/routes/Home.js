import { useState } from "react";
import InputActor from "../components/InputActor";
import { Link } from "react-router-dom";
import hwang from "../image/hwang.png";
import Header from "../components/Header";

function Home() {
  const [actor1, setActor1] = useState("");
  const [actor2, setActor2] = useState("");
  return (
    <div style={{}}>
      <Header />
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InputActor inputValue={actor1} setInputValue={setActor1} />
        <p
          style={{
            fontSize: 18,
            fontFamily: "Song Myung",
          }}
        >
          to
        </p>
        <InputActor inputValue={actor2} setInputValue={setActor2} />
        {actor1 === "" || actor2 === "" ? (
          <button
            onClick={() => alert("배우를 다시입력하세요")}
            style={{
              width: 60,
              height: 30,
              marginTop: 15,
              padding: 0,
              fontFamily: "Song Myung",
            }}
          >
            connect
          </button>
        ) : (
          <Link to={`/details?actor1=${actor1}&&actor2=${actor2}`}>
            <button
              style={{
                width: 60,
                height: 30,
                marginTop: 15,
                fontFamily: "Song Myung",
              }}
            >
              connect
            </button>
            {console.log(actor1, actor2)}
          </Link>
        )}
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={hwang}
          style={{
            width: 250,
            height: 250,
            borderRadius: 200,
          }}
        />
      </div>
    </div>
  );
}

export default Home;
