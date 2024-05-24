import { useState } from "react";
import "./Main.css";

export const SearchForm = () => {
    const [isopen, setIsopen] = useState(true);
    
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
                    <li>1등</li>
                    <li>2등</li>
                    <li>3등</li>
                    <li>4등</li>
                    <li>5등</li>
                    <li>6등</li>
                    <li>7등</li>
                    <li>8등</li>
                    <li>9등</li>
                    <li>10등</li>
                </ol>
            </div>: <div>
                <ol>
                    <li>11등</li>
                    <li>12등</li>
                    <li>13등</li>
                    <li>14등</li>
                    <li>15등</li>
                    <li>16등</li>
                    <li>17등</li>
                    <li>18등</li>
                    <li>19등</li>
                    <li>20등</li>
                </ol>
            </div>}
            
           
        </div>
    </div>
    );
}