import { useState } from "react";
import InputActor from "../components/InputActor";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { actors } from "./actors";

function InputForm() {
  const [actor1, setActor1] = useState("");
  const [actor2, setActor2] = useState("");

  return (
    <>
      <InputFromBox
        style={{
          // borderRadius: 5,
          position: "relative",
          // fontFamily: "Diphylleia",
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {actors.includes(actor1) && actors.includes(actor2) ? (
            <Link to={`/degrees?cast1=${actor1}&cast2=${actor2}`}>
              <button
                style={{
                  width: 60,
                  height: 30,
                  marginTop: 10,
                  backgroundColor: "white",
                  border: 0,
                }}
              >
                connect
              </button>
            </Link>
          ) : (
            <button
              onClick={() => alert("배우를 다시입력하세요")}
              style={{
                width: 60,
                height: 30,
                marginTop: 10,
                backgroundColor: "white",
                border: 0,
              }}
            >
              connect
            </button>
          )}
        </div>
      </InputFromBox>
    </>
  );
}

const InputFromBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 460px;
  background-color: #f1efef;
  border: 1px solid #b4b4b8;
`;

export default InputForm;
