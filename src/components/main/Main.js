import { useMediaQuery } from "react-responsive";
import MainDesktop from "./MainDesktop";
import MainMobile from "./MainMobile";
import MainTablet from "./MainTablet";

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

function Main() {
  return (
    <>
      <Desktop>
        <MainDesktop />
      </Desktop>
      <Tablet>
        <MainTablet />
      </Tablet>
      <Mobile>
        <MainMobile />
      </Mobile>
    </>
  );
}

export default Main;
