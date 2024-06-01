import InputForm2 from "./input/InputForm2";
import mainimage from "../../image/maingroup.png";
import { SearchForm } from "./SearchForm";
import inki from "../../image/inki.png";
import inki2 from "../../image/inki2.png";

function MainTablet() {
  return (
    <div className="tablet-main">
      <img className="inki1-image" src={inki} />
      <img className="inki2-image" src={inki2} />

      <div className="main-title">두명의 배우를 입력해보세요!</div>
      <div className="main-subtitle">CONNECTION BETWEEN THE TWO ACTORS</div>
      <div className="main-input-field">
        <InputForm2 />
      </div>
      <div className="tabelt-form">
        <SearchForm />
      </div>
    </div>
  );
}

export default MainTablet;
