import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

function Details() {
  const [searchParams] = useSearchParams();
  console.log({
    actor1: searchParams.get("cast1"),
    actor2: searchParams.get("cast2"),
  });

  const [myData, setData] = useState([]);
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://72f760c0-57c4-4d93-a3ff-bed9f02b3483.mock.pstmn.io/degrees?cast1=${searchParams.get(
          "cast1"
        )}&cast2=${searchParams.get("cast2")}`
      )
      .then((result) => {
        setData(result.data);
        console.log(result.data);
        setIsData(true);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      <Header />
      <div
        className="castDiv"
        style={{
          display: "flex",
          backgroundColor: "#C18291",
          fontSize: 20,
          width: 130,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      ></div>
      {/* {isData ? myData.cast1.name : null} */}
      {/* {myData.cast1.name} */}
      <div
        className="movieDiv"
        style={{
          backgroundColor: "#6E8F8E",
          display: "flex",
          fontSize: 20,
          width: 130,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      ></div>
      {/* {isData ? myData.movie1.name : null} */}
      <div
        className="castDiv"
        style={{
          display: "flex",
          backgroundColor: "#C18291",
          fontSize: 20,
          width: 130,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      ></div>
      {/* {isData ? myData.cast2.name : null} */}
    </div>
  );
}

export default Details;
