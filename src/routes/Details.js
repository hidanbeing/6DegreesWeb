import { useSearchParams } from "react-router-dom";
import Header from "../components/header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import ResultDiv from "../components/ResultDiv";
import Footer from "../components/Footer";
import Loading from "../components/loading/Loading";
import { Helmet } from "react-helmet-async";

function Details() {
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [myData, setData] = useState([]);
  const role = [
    "cast",
    "movie",
    "cast",
    "movie",
    "cast",
    "movie",
    "cast",
    "movie",
    "cast",
    "movie",
    "cast",
    "movie",
    "cast",
    "movie",
    "cast",
  ];

  useEffect(() => {
    axios
      .get(
        `https://tkqbzk9yo6.execute-api.ap-northeast-2.amazonaws.com/New_Stage?actor1=${searchParams.get(
          "cast1"
        )}&actor2=${searchParams.get("cast2")}`
      )
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <Helmet>
        <meta name="google-adsense-account" content="ca-pub-2590867190158667" />
      </Helmet>
      <Header />
      {!loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            paddingTop: 10,
            // border: 1,
          }}
        >
          {myData.map((data, index) => (
            <ResultDiv type={role[index]} name={data} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
}

export default Details;
