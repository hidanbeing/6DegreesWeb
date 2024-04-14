import Header from "../components/Header";
import Footer from "../components/Footer";

function Introduction() {
  return (
    <>
      <Header />
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div
          style={{
            width: "80%",
            height: 470,
          }}
        >
          Six Degrees of Separations - 인간관계는 6단계만 거치면 지구상 대부분의
          사람과 연결될 수 있다는 사회 이론이다 '나의 친구의 친구의 친구' 같은
          식으로 주변 사람들이 중간다리 역할을 해준다면 시작점이 되는 사람과
          목표가 되는 사람이 서로 알고있지 않다 하더라도 대부분 6단계 안으로는
          연결된다. 이 이론을 활용하여 한국 연예인들끼리 작품을 통해 6단계
          안으로 연결됨
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Introduction;
