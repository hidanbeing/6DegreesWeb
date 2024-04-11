import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import ResultDiv from "../components/ResultDiv";
function Details() {
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
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
        setData(result.data.result);
        // console.log(result.data.result);
        setIsData(true);
        setLoading(false);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <Header />
      {!loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "10%",
            paddingTop: 10,
            border: 1,
          }}
        >
          <ResultDiv type={"cast"} name={myData.people1.name} />
          <ResultDiv type={"movie"} name={myData.movie1.name} />
          <ResultDiv type={"cast"} name={myData.people2.name} />
        </div>
      ) : (
        "loading"
      )}
    </>
  );
}

export default Details;
