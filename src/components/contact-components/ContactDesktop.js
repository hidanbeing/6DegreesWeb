import ContactDiv from "./ContactDiv";

function ContactDeskTop() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <ContactDiv
        width={200}
        height={350}
        name={"최나경"}
        email={"@naver.com"}
        phoneNumber={"0100000000"}
        github={"@github.com"}
        tf={true}
      />
      <ContactDiv
        width={200}
        height={350}
        name={"권보원"}
        email={"@naver.com"}
        phoneNumber={"0100000000"}
        github={"@github.com"}
        tf={true}
      />
      <ContactDiv
        width={200}
        height={350}
        name={"이단비"}
        email={"@naver.com"}
        phoneNumber={"0100000000"}
        github={"@github.com"}
        tf={true}
      />
    </div>
  );
}

export default ContactDeskTop;
