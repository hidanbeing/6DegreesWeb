import Spinner from "../image/Spinner.gif";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      잠시만 기다려주세요
      <img src={Spinner} width="5%"></img>
    </div>
  );
}

export default Loading;
