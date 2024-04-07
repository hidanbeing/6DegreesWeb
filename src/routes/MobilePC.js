import { useMediaQuery } from "react-responsive";

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

function MobilePC() {
  return (
    <div>
      <Desktop>Desktop or laptop</Desktop>
      <Tablet>Tablet</Tablet>
      <Mobile>Mobile</Mobile>
    </div>
  );
}

export default MobilePC;
