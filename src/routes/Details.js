import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import ResultDiv from "../components/ResultDiv";
import Footer from "../components/Footer";

function Details() {
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [myData, setData] = useState([]);
  // const [isData, setIsData] = useState(false);
  // console.log(searchParams.get("cast2"));
  useEffect(() => {
    axios
      .get(
        `https://tkqbzk9yo6.execute-api.ap-northeast-2.amazonaws.com/New_Stage?actor1=${searchParams.get(
          "cast1"
        )}&actor2=${searchParams.get("cast2")}`
      )
      .then((result) => {
        console.log(result.data);
        setData(result.data);
        setLoading(false);
      })
      .catch(() => {});
    // setData(["마동석", "부산행", "공유", "영화", "아이유"]);
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
            alignItems: "center",
            paddingTop: 10,
            border: 1,
          }}
        >
          {console.log(myData.length)}
          {myData.length === 3 ? (
            <div>
              <ResultDiv type={"cast"} name={myData[0]} />
              <ResultDiv type={"movie"} name={myData[1]} />
              <ResultDiv type={"cast"} name={myData[2]} />
            </div>
          ) : null}
          {myData.length === 5 ? (
            <div>
              <ResultDiv type={"cast"} name={myData[0]} />
              <ResultDiv type={"movie"} name={myData[1]} />
              <ResultDiv type={"cast"} name={myData[2]} />
              <ResultDiv type={"movie"} name={myData[3]} />
              <ResultDiv type={"cast"} name={myData[4]} />
            </div>
          ) : null}
          {myData.length === 7 ? (
            <div>
              <ResultDiv type={"cast"} name={myData[0]} />
              <ResultDiv type={"movie"} name={myData[1]} />
              <ResultDiv type={"cast"} name={myData[2]} />
              <ResultDiv type={"movie"} name={myData[3]} />
              <ResultDiv type={"cast"} name={myData[4]} />
              <ResultDiv type={"movie"} name={myData[5]} />
              <ResultDiv type={"cast"} name={myData[6]} />
            </div>
          ) : null}
          {myData.length === 9 ? (
            <div>
              <ResultDiv type={"cast"} name={myData[0]} />
              <ResultDiv type={"movie"} name={myData[1]} />
              <ResultDiv type={"cast"} name={myData[2]} />
              <ResultDiv type={"movie"} name={myData[3]} />
              <ResultDiv type={"cast"} name={myData[4]} />
              <ResultDiv type={"movie"} name={myData[5]} />
              <ResultDiv type={"cast"} name={myData[6]} />
              <ResultDiv type={"movie"} name={myData[7]} />
              <ResultDiv type={"cast"} name={myData[8]} />
            </div>
          ) : null}
          {myData.length === 11 ? (
            <div>
              <ResultDiv type={"cast"} name={myData[0]} />
              <ResultDiv type={"movie"} name={myData[1]} />
              <ResultDiv type={"cast"} name={myData[2]} />
              <ResultDiv type={"movie"} name={myData[3]} />
              <ResultDiv type={"cast"} name={myData[4]} />
              <ResultDiv type={"movie"} name={myData[5]} />
              <ResultDiv type={"cast"} name={myData[6]} />
              <ResultDiv type={"movie"} name={myData[7]} />
              <ResultDiv type={"cast"} name={myData[8]} />
              <ResultDiv type={"movie"} name={myData[9]} />
              <ResultDiv type={"cast"} name={myData[10]} />
            </div>
          ) : null}
          {myData.length === 13 ? (
            <div>
              <ResultDiv type={"cast"} name={myData[0]} />
              <ResultDiv type={"movie"} name={myData[1]} />
              <ResultDiv type={"cast"} name={myData[2]} />
              <ResultDiv type={"movie"} name={myData[3]} />
              <ResultDiv type={"cast"} name={myData[4]} />
              <ResultDiv type={"movie"} name={myData[5]} />
              <ResultDiv type={"cast"} name={myData[6]} />
              <ResultDiv type={"movie"} name={myData[7]} />
              <ResultDiv type={"cast"} name={myData[8]} />
              <ResultDiv type={"movie"} name={myData[9]} />
              <ResultDiv type={"cast"} name={myData[10]} />
              <ResultDiv type={"movie"} name={myData[11]} />
              <ResultDiv type={"cast"} name={myData[12]} />
            </div>
          ) : null}
        </div>
      ) : (
        "loading"
      )}
      <Footer />
    </>
  );
}

export default Details;
