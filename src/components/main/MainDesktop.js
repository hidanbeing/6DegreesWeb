import InputForm2 from "./input/InputForm2";
import mainimage from "../../image/maingroup.png";
import { SearchForm } from "./SearchForm";
function MainDesktop() {
  return (
    <div className="main-div">
      <div className="main-left">
        <div className="main-title">두명의 배우를 입력해보세요!</div>
        <div className="main-subtitle">CONNECTION BETWEEN THE TWO ACTORS</div>
        <div className="main-input-field">
          <InputForm2 />
        </div>
        <div className="main-img-div">
          <img className="main-image" src={mainimage} />
        </div>
      </div>
      <SearchForm />
    </div>
  );
}

export default MainDesktop;
