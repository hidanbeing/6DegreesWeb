import { useState, useRef, useEffect } from "react";
import "./Network.css";
import { movie } from "./tmpdata";
import axios from "axios";
import { TMDB_API_KEY } from "../../Config";
import InputActor from "../main/input/InputActor";
import line1 from "../../image/line1.png";
import line2 from "../../image/line2.png";
import line3 from "../../image/line3.png";
import line4 from "../../image/line4.png";
import line5 from "../../image/line5.png";
import noimg from "../../image/noimg.jpeg";
import RootTree from "./tree/RootTree";
export const ConnectActor = () => {
  // inputvalue, name은 계속 같아야함!!

  const [inputvalue, setInputValue] = useState("마동석");
  const [name, setName] = useState("마동석");
  const [data, setData] = useState(movie);

  const [mainImgUrl, setMainImgUrl] = useState();

  const [actormovie, setActormovie] = useState([]);

  const onClick = () => {
    setName(inputvalue);
  };

  const networkSetting = () => {
    setActormovie([]);
    for (const element of data) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&page=1&query=${element.actor}&language=ko-KR`
        )
        .then((response) => {
          var object = new Object();
          object.actor = element.actor;
          object.movie = element.movieName;
          object.url =
            response.data.results.length !== 0 &&
            response.data.results[0].profile_path !== null
              ? "http://image.tmdb.org/t/p/w185/" +
                response.data.results[0].profile_path
              : " ";
          if (object.url !== " ") {
            setActormovie((e) => [...e, object]);
          }
        });
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&page=1&query=${name}&language=ko-KR`
      )
      .then((response) => {
        response.data.results.length !== 0
          ? setMainImgUrl(
              "http://image.tmdb.org/t/p/w185/" +
                response.data.results[0].profile_path
            )
          : setMainImgUrl("");
      });
  }, [name]);

  useEffect(() => {
    axios
      .get(
        `https://8voa49c8ee.execute-api.ap-northeast-2.amazonaws.com/default/?actor=${name}`
      )
      .then((result) => {
        if (result.data === null) {
          window.confirm("결과를 찾을 수 없습니다.");
        }
        setData(result.data);
      })
      .catch((err) => {
        window.confirm("결과를 찾을 수 없습니다.");
      });
  }, [name]);

  useEffect(() => {
    networkSetting();
  }, [data]);

  return (
    <div className="network-div">
      <div className="input-form">
        <p>배우 이름 :</p>
        <InputActor
          className="input-form-input"
          inputValue={inputvalue}
          setInputValue={setInputValue}
        />
        <button className="input-form-btn" onClick={onClick}>
          입력
        </button>
      </div>
      <p className="main-name">
        <span>'{name}'</span> 의 인물관계도
      </p>

      <div className="network-img-div">
        <div className="network-mainimg-div-div">
          <img
            className="main-img"
            src={mainImgUrl === "" ? noimg : mainImgUrl}
          />
        </div>
        {/* {actormovie.length === 1 ? (
          <img className="line-img" src={line1} />
        ) : null}
        {actormovie.length === 2 ? (
          <img className="line-img" src={line2} />
        ) : null}
        {actormovie.length === 3 ? (
          <img className="line-img" src={line3} />
        ) : null}
        {actormovie.length === 4 ? (
          <img className="line-img" src={line4} />
        ) : null}
        {actormovie.length >= 5 ? (
          <img className="line-img" src={line5} />
        ) : null} */}

        <div className="network-img-group">
          {actormovie.map((e, index) =>
            index < 5 ? (
              <div className="group">
                <p className="movie-name">{e.movie}</p>
                <p className="actor-name">{e.actor}</p>

                <img className="img" src={e.url} />
              </div>
            ) : null
          )}
        </div>
        <div className="tree">
          {actormovie.map((e, index) =>
            index < 5 ? <RootTree name={e.actor} /> : null
          )}
        </div>
      </div>
    </div>
  );
};
