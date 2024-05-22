import { useState } from "react";
import InputActor from "./InputActor";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { actors } from "../../actors";

function InputForm2() {
  const [actor1, setActor1] = useState("");
  const [actor2, setActor2] = useState("");

  return (
    <>
      <div className="input-field-div">
        <div className="input-field-div-inner">
          <InputActor inputValue={actor1} setInputValue={setActor1} />
          <InputActor inputValue={actor2} setInputValue={setActor2} />
        </div>
        <div className="input-field-div-btn">
          {actors.includes(actor1) && actors.includes(actor2) ? (
            <Link to={`/degrees?cast1=${actor1}&cast2=${actor2}`}>
              <button className="input-field-btn">connect</button>
            </Link>
          ) : (
            <button
              className="input-field-btn"
              onClick={() => alert("배우를 다시입력하세요")}
            >
              Connect
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default InputForm2;
