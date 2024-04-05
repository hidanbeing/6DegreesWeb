import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import downArrow from "../image/downArrow.png";
import DetailDiv from "../components/DetailDiv";
function Details() {
  const [searchParams] = useSearchParams();
  console.log({
    actor1: searchParams.get("actor1"),
    actor2: searchParams.get("actor2"),
  });
  return (
    <div>
      <Header />
      <hr />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DetailDiv name={searchParams.get("actor1")} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            paddingLeft: 70,
          }}
        >
          <img
            src={downArrow}
            style={{
              width: 70,
              height: 50,
            }}
          />
          <DetailDiv name={"영화"} />
        </div>
        <DetailDiv name={searchParams.get("actor2")} />
      </div>
    </div>
  );
}

export default Details;
