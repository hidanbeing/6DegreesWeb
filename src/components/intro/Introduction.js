import { useMediaQuery } from "react-responsive";
import { IntroDeskTop, IntroMobile } from "./Intro";
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

function Introduction() {
  return (
    <>
      <Desktop>
        <IntroDeskTop />
      </Desktop>
      <Tablet>
        <IntroDeskTop />
      </Tablet>
      <Mobile>
        <IntroMobile />
      </Mobile>
    </>
  );
}

export default Introduction;
