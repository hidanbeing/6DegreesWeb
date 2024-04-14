import hwang from "../image/hwang.png";

function ContactDiv({ name, email, phoneNumber, github }) {
  return (
    <>
      <div
        style={{
          width: 250,
          height: 400,
          backgroundColor: "gray",
          margin: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 10,
        }}
      >
        <img
          src={hwang}
          style={{
            width: 150,
            height: 150,
            justifyContent: "center",
          }}
        />
        <p>{name}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <p>{github}</p>
        <br />
      </div>
    </>
  );
}

export default ContactDiv;
