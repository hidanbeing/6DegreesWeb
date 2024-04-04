import InputActor from "../components/InputActor";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div>6Degree-Movie-Web</div>
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InputActor />
        <br />
        to
        <InputActor />
        <Link to="/details">
          <button style={{ width: 50, height: 30, marginTop: 20 }}>전송</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
