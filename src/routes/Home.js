import hwang from "../image/hwang.png";
import Header from "../components/Header";
import InputForm from "../components/InputForm";
import { useMediaQuery } from "react-responsive";
import HeaderMobile from "../components/HeaderMobile";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

function Home() {
  return (
    <>
      <Desktop>
        <Header />
      </Desktop>
      <Mobile>
        <HeaderMobile />
      </Mobile>
      <hr />
      <div
        style={{
          display: "flex",
          margin: -10,
          padding: 10,
        }}
      >
        <InputForm />
        <div
          style={{
            width: 800,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            src={hwang}
            style={{
              width: 250,
              height: 250,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
