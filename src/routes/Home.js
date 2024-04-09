import Header from "../components/Header";

import { useMediaQuery } from "react-responsive";
import HeaderMobile from "../components/HeaderMobile";
import Main from "../components/Main";
import MainMobile from "../components/MainMobile";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
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
        <hr />
        <Main />
      </Desktop>
      <Tablet>
        <Header />
        <hr />
        <MainMobile />
      </Tablet>
      <Mobile>
        <HeaderMobile />
        <hr />
        <MainMobile />
      </Mobile>
    </>
  );
}

export default Home;
