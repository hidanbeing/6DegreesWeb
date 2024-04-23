import { useState } from "react";
import listIcon from "../image/listIcon.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

function HeaderMobile() {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        // fontFamily: "Diphylleia",
      }}
    >
      <div>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <h1
            style={{
              fontSize: 30,
              paddingLeft: 20,
              color: "black",
            }}
          >
            6DegreesMovieWeb 🎥
          </h1>
        </Link>
      </div>
      <div onClick={() => setOpen(!open)}>
        <img
          style={{
            width: 30,
            height: 30,
            display: "flex",
            position: "absolute",
            right: 20,
            top: 25,
          }}
          src={listIcon}
        ></img>
      </div>
      {open ? (
        <div
          style={{
            backgroundColor: "white",
            width: 120,

            position: "fixed",
            right: 9,
            top: 90,
            zIndex: 100,
            // padding: 5,
            boxShadow: "5px 10px 15px #EFECEC",
            textAlign: "center",
          }}
        >
          <Link to={`/introduction`} style={{ textDecoration: "none" }}>
            <DivRoute>Introduction</DivRoute>
          </Link>
          <Link to={`/network`} style={{ textDecoration: "none" }}>
            <DivRoute>Network</DivRoute>
          </Link>
          <Link to={`/contact`} style={{ textDecoration: "none" }}>
            <DivRoute>Contact</DivRoute>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

const DivRoute = styled.p`
  color: black;
  border-bottom: solid 0.1px black;
  margin: 20px;
  &:hover {
    color: #b4b4b8;
  }
`;
export default HeaderMobile;
