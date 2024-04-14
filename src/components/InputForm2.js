import { useState } from "react";
import InputActor from "./InputActor";
import { Link } from "react-router-dom";
import styled from "styled-components";

function InputForm2() {
  const [actor1, setActor1] = useState("");
  const [actor2, setActor2] = useState("");

  return (
    <>
      <InputFromBox
        style={{
          borderRadius: 10,

          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            // flexDirection: "row",
            marginLeft: 20,
            marginRight: 40,
            fontSize: 20,
          }}
        >
          <p>👩🏻‍🎤 배우 입력 👨🏻‍🎤</p>
        </div>
        <InputActor inputValue={actor1} setInputValue={setActor1} />

        <InputActor inputValue={actor2} setInputValue={setActor2} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {actor1 === "" && actor2 === "" ? (
            <button
              onClick={() => alert("배우를 다시입력하세요")}
              style={{
                width: 60,
                height: 30,
                marginTop: 15,
                backgroundColor: "white",
                border: 0,
              }}
            >
              connect
            </button>
          ) : (
            <Link to={`/degrees?cast1=${actor1}&cast2=${actor2}`}>
              <button
                style={{
                  width: 60,
                  height: 30,
                  marginTop: 15,
                  backgroundColor: "white",
                  border: 0,
                }}
              >
                connect
              </button>
            </Link>
          )}
        </div>
      </InputFromBox>
    </>
  );
}

const InputFromBox = styled.div`
  display: flex;
  // flex-direction: column;
  width: 800px;
  height: 80px;
  border: 0px solid black;
  background-color: #f4f3f3;
  box-shadow: 0px 0px 5px #e7e9e7;
  border: 1px solid;
  padding: 30px;
`;

export default InputForm2;
