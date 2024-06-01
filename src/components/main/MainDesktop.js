import InputForm2 from "./input/InputForm2";
import mainimage from "../../image/maingroup.png";
import { SearchForm } from "./SearchForm";
import inki from "../../image/inki.png";
import inki2 from "../../image/inki2.png";
import "./Main.css";

function MainDesktop() {
  return (
    <div className="main-div">
      <div className="main-left">
        <img className="inki1-image" src={inki} />
        <div className="main-title">두명의 배우를 입력해보세요!</div>
        <div className="main-subtitle">CONNECTION BETWEEN THE TWO ACTORS</div>
        <div className="main-input-field">
          <InputForm2 />
          <img className="inki2-image" src={inki2} />
        </div>
        <div className="main-img-div">
          {/* <img className="inki-image" src={inki} /> */}

          {/* <img className="main-image" src={mainimage} /> */}
        </div>
      </div>

      <div className="main-right">
        <SearchForm />
      </div>
    </div>
  );
}

export default MainDesktop;
