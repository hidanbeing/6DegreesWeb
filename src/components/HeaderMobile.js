import { useState } from "react";
import listIcon from "../image/listIcon.png";

function SideList() {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: 100,
        height: 300,
        position: "fixed",
      }}
    ></div>
  );
}
function HeaderMobile() {
  const [open, setOpen] = useState(false);
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
      <div onClick={() => setOpen(true)}>
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

export default HeaderMobile;
