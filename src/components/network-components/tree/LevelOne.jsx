import { useState, useRef, useEffect } from "react";
import "../Network.css";
import { movie } from "../tmpdata";
import axios from "axios";
import { TMDB_API_KEY } from "../../../Config";
import line1 from "../../../image/line1.png";
import line2 from "../../../image/line2.png";
import line3 from "../../../image/line3.png";
import line4 from "../../../image/line4.png";
import line5 from "../../../image/line5.png";
import noimg from "..//../../image/noimg.jpeg";

function LevelOne(prop){

    const [data, setData] = useState(movie);
  
  
    const [actormovie, setActormovie] = useState([]);

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
              response.data.results.length !== 0
                ? "http://image.tmdb.org/t/p/w185/" +
                  response.data.results[0].profile_path
                : "";
            setActormovie((e) => [...e, object]);
          });
      }
    };
  
   
    useEffect(() => {
        console.log(prop);
      axios
        .get(
          `https://8voa49c8ee.execute-api.ap-northeast-2.amazonaws.com/default/?actor=${prop.name}`
        )
        .then((result) => {
            console.log(result)
          if (result.data === null) {
            // window.confirm("결과를 찾을 수 없습니다.");
          }
          setData(result.data);
        })
        .catch((err) => {
        //   window.confirm("결과를 찾을 수 없습니다.");
        });
    }, []);
  
    useEffect(() => {
      networkSetting();
    }, [data]);
  
    return (
      <div className="network-div">
        
  
          {actormovie.length === 1 ? (
            <img className="line-img" src={line1} />
          ) : null}
          {actormovie.length === 2 ? (
            <img className="line-img" src={line2} />
          ) : null}
          {actormovie.length >= 3 ? (
            <img className="line-img" src={line3} />
          ) : null}
          
          
          <div className="network-img-div-images">
            {actormovie.map((e, index) =>
              index < 3 ? <p className="actor-name">{e.actor}</p> : null
            )}
          </div>
          <div className="network-img-div-images">
            {actormovie.map((e, index) =>
              index < 3 ? <p className="actor-name">{e.movie}</p> : null
            )}
          </div>
          <div className="network-img-div-images">
            {actormovie.map((e, index) =>
              index < 3 ? <img className="img" src={e.url} /> : null
            )}
          </div>
          
        </div>
    );
}

export default LevelOne;