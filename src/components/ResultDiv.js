function ResultDiv({ type, name }) {
  const color = type === "cast" ? "#d7d1ea" : "#f3f3f3";
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: color,
        fontSize: 20,
        width: 120,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
      }}
    >
      <p style={{ color: "black", fontSize: 18 }}>{name}</p>
    </div>
  );
}

export default ResultDiv;
