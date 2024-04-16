import ContactDiv from "../components/ContactDiv";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../css/app.css";

function Contact() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <ContactDiv
          name={"최나경"}
          email={"@naver.com"}
          phoneNumber={"0100000000"}
          github={"@github.com"}
        />
        <ContactDiv
          name={"권보원"}
          email={"@naver.com"}
          phoneNumber={"0100000000"}
          github={"@github.com"}
        />
        <ContactDiv
          name={"이단비"}
          email={"@naver.com"}
          phoneNumber={"0100000000"}
          github={"@github.com"}
        />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
