function ResultDiv({ type, name }) {
  const color = type === "cast" ? "#d7d1ea" : "#f3f3f3";
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: color,
        fontSize: 20,
        // width: 200,
        // height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        cursor: "pointer",
      }}
    >
      <p
        style={{
          color: "black",
          fontSize: 15,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        onClick={() => window.open(`https://namu.wiki/w/${name}`)}
      >
        {type === "cast" ? "" : "🎞️ "}
        {name}
        {type === "cast" ? "" : " 🎞️"}
      </p>
      <div></div>
    </div>
  );
}

export default ResultDiv;
