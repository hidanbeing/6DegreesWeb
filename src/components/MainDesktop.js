import InputForm from "./InputForm";
import hwang from "../image/hwang.png";
import ActorGraph from "./ActorGraph";
import InputForm2 from "./InputForm2";

function MainDesktop() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: 10,
          // marginLeft: 20,
          justifyContent: "center",
        }}
      >
        {/* <InputForm /> */}
        <InputForm2 />
      </div>
      <br />
      <div
        style={{
          width: 800,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <img
          src={hwang}
          style={{
            width: 250,
            height: 250,
          }}
        />
        {/* <ActorGraph /> */}
      </div>
      <br /> <br />
    </div>
  );
}

export default MainDesktop;
