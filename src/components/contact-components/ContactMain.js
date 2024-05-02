import { useMediaQuery } from "react-responsive";
import ContactDeskTop from "./ContactDesktop";
import ContactMobile from "./ContactMobile";

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

function ContactMain() {
  return (
    <>
      <Desktop>
        <ContactDeskTop />
      </Desktop>
      <Tablet>
        <ContactMobile />
      </Tablet>
      <Mobile>
        <ContactMobile />
      </Mobile>
    </>
  );
}

export default ContactMain;
