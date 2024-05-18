import Spinner from "../../image/Spinner.gif";
import "./loading.css";
function Loading() {
  return (
    <div className="loading-div">
      <img src={Spinner} width="5%"></img>
    </div>
  );
}

export default Loading;
