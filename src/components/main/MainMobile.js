import InputForm from "./input/InputForm";
import hwang from "../../image/hwang.png";
import mainimage from "../../image/maingroupmobile.png";
import inki from "../../image/inki.png";
import inki2 from "../../image/inki2.png";

function MainMobile() {
  return (
    <div className="main-div-mobile">
      <div className="main-title-mobile">두명의 배우를 입력해보세요!</div>
      <div className="main-subtitle">CONNECTION BETWEEN THE TWO ACTORS</div>
      <div className="main-input-field">
        <InputForm />
      </div>
      <div className="images">
        <img className="inki-image-mobile" src={inki} width={120} />
        <img className="inki2-image-mobile" src={inki2} width={130} />
      </div>
    </div>
  );
}

export default MainMobile;
