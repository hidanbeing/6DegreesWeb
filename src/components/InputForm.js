import { useState } from "react";
import InputActor from "../components/InputActor";
import { Link } from "react-router-dom";
import styled from "styled-components";

function InputForm() {
  const [actor1, setActor1] = useState("");
  const [actor2, setActor2] = useState("");

  return (
    <InputFromBox
      style={{
        marginLeft: 30,
        marginTop: 10,
        borderRadius: 10,
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: 20,
        }}
      >
        <p>👩🏻‍🎤 배우 입력 👨🏻‍🎤</p>
      </div>
      <InputActor inputValue={actor1} setInputValue={setActor1} />

      <InputActor inputValue={actor2} setInputValue={setActor2} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {actor1 === "" || actor2 === "" ? (
          <button
            onClick={() => alert("배우를 다시입력하세요")}
            style={{
              width: 60,
              height: 30,
              marginTop: 10,
              backgroundColor: "white",
              border: 1,
              borderRadius: 3,
            }}
          >
            connect
          </button>
        ) : (
          <Link to={`/details?cast1=${actor1}&cast2=${actor2}`}>
            <button
              style={{
                width: 60,
                height: 30,
                marginTop: 10,
                backgroundColor: "white",
              }}
            >
              connect
            </button>
          </Link>
        )}
      </div>
    </InputFromBox>
  );
}

const InputFromBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 460px;
  border: 0px solid black;
  background-color: #f0f0f0;
  box-shadow: 0px 0px 5px gray;
`;

export default InputForm;
