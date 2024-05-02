import ContactDiv from "./ContactDiv";

function ContactMobile() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <ContactDiv
        width={350}
        height={200}
        name={"최나경"}
        email={"@naver.com"}
        phoneNumber={"0100000000"}
        github={"@github.com"}
        tf={false}
      />
      <ContactDiv
        width={350}
        height={200}
        name={"권보원"}
        email={"@naver.com"}
        phoneNumber={"0100000000"}
        github={"@github.com"}
        tf={false}
      />
      <ContactDiv
        width={350}
        height={200}
        name={"이단비"}
        email={"@naver.com"}
        phoneNumber={"0100000000"}
        github={"@github.com"}
        tf={false}
      />
    </div>
  );
}

export default ContactMobile;
