import styled from "styled-components";
import { Link } from "react-router-dom";
import listIcon from "../image/listIcon.png";

function HeaderMobile() {
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
        <h1
          style={{
            fontSize: 30,
            paddingLeft: 30,
          }}
        >
          6DegreesMovieWeb 🎥
        </h1>
      </div>

      <div>
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
    </div>
  );
}

const DivRoute = styled.p`
  margin: 10px;
  margin-top: 15px;
  color: black;

  padding: 5px;
  border-bottom: solid 1px black;
`;
export default HeaderMobile;
