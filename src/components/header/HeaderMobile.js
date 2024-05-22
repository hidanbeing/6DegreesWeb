import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PiListLight } from "react-icons/pi";

function HeaderMobile() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header-div header-div-mobile">
      <div>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <div className="header-title">6DegreesMovieWeb🎥</div>
        </Link>
      </div>
      <div onClick={() => setOpen(!open)} onMouseOut={() => setOpen(false)}>
        <PiListLight className="header-menu-icon" size={30} color="black" />
      </div>
      {open ? (
        <div className="header-menu-div">
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
