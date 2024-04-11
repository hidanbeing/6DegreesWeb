import InputForm from "./InputForm";
import hwang from "../image/hwang.png";
import ActorGraph from "./ActorGraph";

function MainDesktop() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          marginTop: 10,
          marginLeft: 20,
        }}
      >
        <InputForm />
      </div>
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
    </div>
  );
}

export default MainDesktop;
