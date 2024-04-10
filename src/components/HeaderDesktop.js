import styled from "styled-components";
import { Link } from "react-router-dom";

function HeaderDesktop() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        borderWidth: 1,
        borderStyle: "solid",
      }}
    >
      <div>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <h1
            style={{
              fontSize: 30,
              paddingLeft: 50,
              color: "black",
            }}
          >
            6DegreesMovieWeb 🎥
          </h1>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          right: 50,
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
    </div>
  );
}

const DivRoute = styled.p`
  margin: 10px;
  margin-top: 15px;
  color: black;

  padding: 5px;
  border-bottom: solid 1px black;

  &:hover {
    color: #b4b4b8;
  }
`;
export default HeaderDesktop;
