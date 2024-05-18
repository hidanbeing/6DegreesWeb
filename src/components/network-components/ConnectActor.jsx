import { useState, useRef,useEffect } from "react";
import "./Network.css"
import { movie } from "./tmpdata";
import axios from "axios";
import { TMDB_API_KEY } from "../../Config";
import InputActor from "../main/input/InputActor";
import { GiFamilyTree } from "react-icons/gi";
import { LiaStreetViewSolid } from "react-icons/lia";




export const ConnectActor = () => {
    // inputvalue, name은 계속 같아야함!!
    const [inputvalue, setInputValue] = useState("황정민");
    const [name, setName] = useState("황정민");

    const [mainImgUrl, setMainImgUrl] =  useState();
    
    const [networkImgName, setNetworkImgName] = useState(["김윤진","유아인","정우","강동원","곽도원"]);
    const [networkImgUrl, setNetworkImgUrl] =  useState([]);

    const networkSetting = () => {
        for(const element of movie) {
           setNetworkImgName(e => [...e, element.actorList[1]])
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
            setMainImgUrl(
            "http://image.tmdb.org/t/p/w185/" +
              response.data.results[0].profile_path
          );
        })
        if (networkImgUrl.length<6){
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
    
    return (<div className="network-div">
        <div className="title">인물 관계도 <LiaStreetViewSolid/> </div>
        <div className="input-form">
            <InputActor inputValue={inputvalue} setInputValue={setInputValue}/>
            <button className="input-form-btn" onClick={onClick}>입력</button>
        </div>
        <div className="network-img-div">
            <div className="network-img-div-main">
            <img className="img" src={mainImgUrl}/>
            </div>
            <br />
            <div className="network-img-div-images">
            <img className="img" src={networkImgUrl[0]}/>
            <img className="img" src={networkImgUrl[1]}/>
            <img className="img" src={networkImgUrl[2]}/>
            <img className="img" src={networkImgUrl[3]}/>
            <img className="img" src={networkImgUrl[4]}/>
            </div>
            {console.log(networkImgUrl)}
        </div>
    </div>);
}