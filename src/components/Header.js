import { useMediaQuery } from "react-responsive";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

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

function Header() {
  return (
    <>
      <Desktop>
        <HeaderDesktop />
      </Desktop>
      <Tablet>
        <HeaderMobile />
      </Tablet>
      <Mobile>
        <HeaderMobile />
      </Mobile>
      <hr />
    </>
  );
}
export default Header;
