import InputForm from "./InputForm";
import hwang from "../image/hwang.png";

function MainMobile() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <InputForm />
      </div>
      <div
        style={{
          marginTop: 30,
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
      </div>
    </div>
  );
}

export default MainMobile;
