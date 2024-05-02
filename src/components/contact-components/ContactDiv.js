import hwang from "../../image/hwang.png";

function ContactDiv({ width, height, name, email, phoneNumber, github, tf }) {
  return (
    <>
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: "white",
          margin: 30,
          display: "flex",
          flexDirection: tf ? "column" : "row",
          alignItems: "center",
          padding: 20,
          border: "solid 1px",
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: tf ? 0 : 60,
            alignItems: "center",
          }}
        >
          <p>{name}</p>
          <p>{email}</p>
          <p>{phoneNumber}</p>
          <p>{github}</p>
        </div>

        <br />
      </div>
    </>
  );
}

export default ContactDiv;
