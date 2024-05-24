import { useNavigate, useSearchParams } from "react-router-dom";
import InputActor from "../main/input/InputActor";
import { useState } from "react";

function NetworkActor(){
    const [inputvalue, setInputValue] = useState("마동석");
    const [name, setName] = useState("마동석");

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const Submit = () => {
        setName(inputvalue);
        navigate(`/network?actor=${name}`);
    }
    return (
        <div className="network-div">
            <div className="input-form">
                <p>배우 이름 :</p>
                <InputActor className="input-form-input" inputValue={inputvalue} setInputValue={setInputValue}/>
                <button className="input-form-btn" onClick={Submit}>입력</button>
            </div>
            <p className="main-name"><span>'{name}'</span> 의 인물관계도</p>
    
            <div className="network-img-div">
                <div className="network-mainimg-div-div">
                    {/* <img className="main-img" src={mainImgUrl===""?noimg:mainImgUrl}/> */}
                </div>
                {/* <div className="movie-name-div">
                <p className="movie-name">{networkmovie[0]}</p>
                <p className="movie-name">{networkmovie[1]}</p>
                <p className="movie-name">{networkmovie[2]}</p>
                <p className="movie-name">{networkmovie[3]}</p>
                <p className="movie-name">{networkmovie[4]}</p> */}
                </div>
    
                {/* <img className="line1-img" src={lines} width={800}/> */}
                
                {/* <div className="network-img-div-images">
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
                 
                </div> */}
            </div>);

}

export default NetworkActor;