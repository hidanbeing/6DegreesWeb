import bateman_emoji from "../image/bateman_emoji.png";

function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p
        style={{
          fontSize: 30,
          top: "18%",
          paddingLeft: 10,
          fontFamily: "Song Myung",
        }}
      >
        한국의 Kevin Bacon을 찾아서.. &nbsp;
        <img
          src={bateman_emoji}
          style={{
            top: "10%",
            width: 30,
            height: 30,
          }}
        />
      </p>
    </div>
  );
}

export default Header;
