import { useEffect, useState } from "react";
import "./Main.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const SearchForm = () => {
    const [isopen, setIsopen] = useState(true);
    const [searchActor, setSearchActor] = useState([]);

    useEffect(()=>{
        axios.get(
            `https://4yvlnqrw19.execute-api.ap-northeast-2.amazonaws.com/default/`
          )
        .then((response) => {
          setSearchActor(response.data);
        })
    },[])
    
    return (
    <div className="search-form-div">
        <div className="search-form-title">실시간 급상승 검색어</div>
        <div className="search-form-choice">
            <div className="search-form-choice-div"
                style={{backgroundColor:isopen?"white":"grey"}}
                onClick={()=>setIsopen(true)}>1~10위</div>
            <div className="search-form-choice-div" 
                style={{backgroundColor:isopen?"grey":"white"}}
                onClick={()=>setIsopen(false)}>11~20위</div>
        </div>
        <div>
            {isopen?<div>
                <ol>
                    
                    {searchActor.map((e,index)=>
                        index<10?<Link style={{ textDecoration: "none"}} to={`/degrees?cast1=${e[0]}&cast2=${e[1]}`}><li>{index+1+". "+e[0] +" - "+e[1]}</li> </Link>:null
                    )}
                   
                </ol>
            </div>: <div>
                <ol>
                {searchActor.map((e,index)=>
                        (index>9&&index<20)?<Link style={{ textDecoration: "none"}} to={`/degrees?cast1=${e[0]}&cast2=${e[1]}`}><li>{index+1+". "+e[0] +" - "+e[1]}</li> </Link>:null
                    )}
                
                </ol>
            </div>}
        </div>
    </div>
    );
}