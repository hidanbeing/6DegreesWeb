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
          <div className="header-title">InkiTree🎥</div>
        </Link>
      </div>
      <div onClick={() => setOpen(!open)}>
        <PiListLight className="header-menu-icon" size={30} color="black" />
      </div>
      {open ? (
        <div className="header-menu-div">
          <Link to={`/introduction`} style={{ textDecoration: "none" }}>
            <DivRoute>소개</DivRoute>
          </Link>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <DivRoute>실시간 검색어</DivRoute>
          </Link>
          <Link to={`/network`} style={{ textDecoration: "none" }}>
            <DivRoute>네트워크</DivRoute>
          </Link>
          <Link to={`/contact`} style={{ textDecoration: "none" }}>
            <DivRoute>연락</DivRoute>
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
