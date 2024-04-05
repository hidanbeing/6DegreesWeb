function DetailDiv({ name }) {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        fontSize: 18,

        // fontFamily: "Song Myung",
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      {name}
    </div>
  );
}

export default DetailDiv;
