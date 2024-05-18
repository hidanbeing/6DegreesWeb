import InputForm from "./input/InputForm";
import hwang from "../../image/hwang.png";
import mainimage from "../../image/maingroup.png";

function MainMobile() {
  return (
    <div className="main-div-mobile">
      <div className="main-title-mobile">두명의 배우를 입력해보세요!</div>
      <div className="main-subtitle">CONNECTION BETWEEN THE TWO ACTORS</div>
      <div className="main-input-field">
        <InputForm />
      </div>
      <div className="main-img-div-mobile">
        <img className="main-image-moblie" src={mainimage} />
      </div>
    </div>
  );
}

export default MainMobile;
