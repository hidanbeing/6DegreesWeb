import styled from "styled-components";
import { Link } from "react-router-dom";

function HeaderDesktop() {
  return (
    <div className="header-div">
      <div>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <div className="header-title">Inkitree🎥</div>
        </Link>
      </div>
      <div className="header-menu">
        <Link to={`/introduction`} style={{ textDecoration: "none" }}>
          <DivRoute>Introduction</DivRoute>
        </Link>
        <Link to={`/network`} style={{ textDecoration: "none" }}>
          <DivRoute>Network</DivRoute>
        </Link>
        {/* <Link to={`/recommand`} style={{ textDecoration: "none" }}>
          <DivRoute>Movies</DivRoute>
        </Link> */}
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
