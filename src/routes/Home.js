import hwang from "../image/hwang.png";
import Header from "../components/Header";
import InputForm from "../components/InputForm";

function Home() {
  return (
    <>
      <Header />
      <hr />
      <div
        style={{
          display: "flex",
          margin: -10,
          padding: 10,
        }}
      >
        <InputForm />
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
        </div>
      </div>
    </>
  );
}

export default Home;
