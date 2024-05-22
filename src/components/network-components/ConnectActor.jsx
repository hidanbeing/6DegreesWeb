import { useState, useRef,useEffect } from "react";
import "./Network.css"
import { movie } from "./tmpdata";
import axios from "axios";
import { TMDB_API_KEY } from "../../Config";
import InputActor from "../main/input/InputActor";
import { LiaStreetViewSolid } from "react-icons/lia";
import lines from "../../image/lines.png"
import noimg from "../../image/noimg.jpeg"




export const ConnectActor = () => {
    // inputvalue, name은 계속 같아야함!!
    const [inputvalue, setInputValue] = useState("황정민");
    const [name, setName] = useState("황정민");

    const [mainImgUrl, setMainImgUrl] =  useState();
    
    const [networkImgName, setNetworkImgName] = useState(["김윤진","유아인","정우","강동원","곽도원"]);
    const [networkImgUrl, setNetworkImgUrl] =  useState([]);
    const [networkmovie, setNetworkmovie] = useState(["국제시장", "베테랑", "히말라야", "검사외전", "곡성"]);

    const networkSetting = () => {
        for(const element of movie) {
           setNetworkImgName(e => [...e, element.actorList[1]])
          }
          for(const element of movie) {
            setNetworkmovie(e => [...e, element.movieName])
           }
    }
    const onClick = () => {
        setName(inputvalue);
        setNetworkImgUrl([]);
        networkSetting();
    }

    
    useEffect(() => {
      axios
        .get(
           `https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&page=1&query=${name}&language=ko-KR`
        )
        .then((response) => {
            response.data.results.length!==0?setMainImgUrl(
                "http://image.tmdb.org/t/p/w185/" +
                  response.data.results[0].profile_path
              ):setMainImgUrl("");
            
        })
        if (networkImgUrl.length==0){
            axios
            .get(
            `https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&page=1&query=${networkImgName[0]}&language=ko-KR`
            )
            .then((response) => {
                
                setNetworkImgUrl(networkImgUrl => [
                    ...networkImgUrl,
                "http://image.tmdb.org/t/p/w185/" +
                    response.data.results[0].profile_path]
                );
            });
        }
        if (networkImgUrl.length==1){
            axios
            .get(
            `https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&page=1&query=${networkImgName[1]}&language=ko-KR`
            )
            .then((response) => {
                
                setNetworkImgUrl(networkImgUrl => [
                    ...networkImgUrl,
                "http://image.tmdb.org/t/p/w185/" +
                    response.data.results[0].profile_path]
                );
            });
        }
        if (networkImgUrl.length==2){
            axios
            .get(
            `https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&page=1&query=${networkImgName[2]}&language=ko-KR`
            )
            .then((response) => {
                
                setNetworkImgUrl(networkImgUrl => [
                    ...networkImgUrl,
                "http://image.tmdb.org/t/p/w185/" +
                    response.data.results[0].profile_path]
                );
            });
        }
        if (networkImgUrl.length==3){
            axios
            .get(
            `https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&page=1&query=${networkImgName[3]}&language=ko-KR`
            )
            .then((response) => {
            
                setNetworkImgUrl(networkImgUrl => [
                    ...networkImgUrl,
                "http://image.tmdb.org/t/p/w185/" +
                    response.data.results[0].profile_path]
                );
            });
        }
        if (networkImgUrl.length==4){
            axios
            .get(
            `https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&page=1&query=${networkImgName[4]}&language=ko-KR`
            )
            .then((response) => {
                setNetworkImgUrl(networkImgUrl => [
                    ...networkImgUrl,
                "http://image.tmdb.org/t/p/w185/" +
                    response.data.results[0].profile_path]
                );
            });
        }
    },[onClick]);
    
    return (
    <div className="network-div">
        <div className="input-form">
            <p>배우 이름 :</p>
            <InputActor className="input-form-input" inputValue={inputvalue} setInputValue={setInputValue}/>
            <button className="input-form-btn" onClick={onClick}>입력</button>
        </div>
        <p className="main-name"><span>'{name}'</span> 의 인물관계도</p>

        <div className="network-img-div">
            <div className="network-mainimg-div-div">
                <img className="main-img" src={mainImgUrl===""?noimg:mainImgUrl}/>
            </div>
            <div className="movie-name-div">
            <p className="movie-name">{networkmovie[0]}</p>
            <p className="movie-name">{networkmovie[1]}</p>
            <p className="movie-name">{networkmovie[2]}</p>
            <p className="movie-name">{networkmovie[3]}</p>
            <p className="movie-name">{networkmovie[4]}</p>
            </div>

            <img className="line1-img" src={lines} width={800}/>
            
            <div className="network-img-div-images">
                <div className="network-img-div-div">
                    <img className="img" src={networkImgUrl[0]}/>
                </div>
                <div className="network-img-div-div">
                    <img className="img" src={networkImgUrl[1]}/>
                </div>
                <div className="network-img-div-div">
                    <img className="img" src={networkImgUrl[2]}/>
                </div>
                <div className="network-img-div-div">
                    <img className="img" src={networkImgUrl[3]}/>
                </div>
                <div className="network-img-div-div">
                    <img className="img" src={networkImgUrl[4]}/>
                </div>
             
            </div>
            {/* {console.log(networkImgUrl)} */}
        </div>
    </div>);
}