import "./Intro.css"
import introgroup from "../../image/introgroup.png"
import introgroupmobile from "../../image/introgroupmobile.png"
import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import song from "../../image/song.png"


export const IntroDeskTop = () => {
  const [isopen, setIsopen] = useState(false);
    return (
      <div className="intro-div">
      <div className="intro-div-text">
        
        <p>우리 사이트는 "6단계 분리 이론"에 따라 우리나라 배우들 간의 연결 점을 찾아보는 사이트이다.<br/>
        6단계 분리 이론에 의하면 지구에 있는 모든 사람들은 최대 6단계 이내에서 서로 아는 사람으로 연결될 수 있다는 케빈 베이컨 게임을 활용한다. 
<br/>
        </p>
        <p>케빈 베이컨 게임의 목적은 영화에 출연한 배우부터 시작하여 가능한 최소한의 링크로 케빈 베이컨과 연결하는 것이다 . 두 사람이 함께 영화를 출연한 적이 있으면 연결된다.
          이를 우리나라영화계에 활용하여 두 배우간의 최소한의 연결점을 찾아준다.<br/><br/>
          예를 들어 배우 "송강"과 "송강호"의 연결고리는 다음과 같다.</p>
          <div><img src={song}/></div>
       

        <p className="last-text">데이터 제공 "<a href="https://www.kmdb.or.kr/eng/main">한국영화데이터베이스</a>" </p><br/><br/>
        <hr/>
        <div className="downarrow" onClick={() => {
                setIsopen(!isopen);
              }}>
        "6단계 분리 이론" 이란? ; Six Degrees of Separations {isopen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {isopen?<div>인간관계는 6단계만 거치면 지구상 대부분의 사람과 연결될 수 있다는 사회 이론이다 <br/>
        '나의 친구의 친구의 친구' 같은 식으로 주변 사람들이 중간다리 역할을 해준다면 시작점이 되는 사람과 목표가 되는 사람이 서로 알고있지 않다 하더라도 대부분 6단계 안으로는 연결된다.<br/><br/>

          너무 멀어서 도저히 도달이 불가능하다고 생각될지 모르는 상대도 의외로 다음과 같은 예시로 6단계 안으로 도달하는게 가능하다. <br/><br/>
          1. 평범한 정치외교학과 대학생 <br/>
          2. 학회에서 만난 서울대 정치외교학과 친구 <br/>
          3. 서울대 학생의 지도교수인 서울대 정치외교학과 교수 <br/>
          4. 서울대 정치외교학과 교수와 친한 대한민국 외교부 장관 <br/>
          5. 대한민국 외교부 장관과 친분이 있는 미국 대통령 <br/><br/>

          한국의 평범한 대학생이 미국 대통령까지 불과 4단계만에 연결되고, 아예 서울대생이 시작이라면 3단계로 끝난다.<br/> <br/>

        </div>:<div></div>}
        
        <div className="img-div">
          <img className="intro-img" src={introgroup} />
        </div>
  </div>
  
</div>
  );
}

export const IntroMobile = () => {
  return (
    <div className="intro-div">
    <div className="intro-div-text-mobile"
  >
   

// 결과





"6단계 분리 이론" 이란? ; Six Degrees of Separations

인간관계는 6단계만 거치면 지구상 대부분의 사람과 연결될 수 있다는 사회 이론이다
'나의 친구의 친구의 친구' 같은 식으로 주변 사람들이 중간다리 역할을 해준다면 시작점이 되는 사람과 목표가 되는 사람이 서로 알고있지 않다 하더라도 대부분 6단계 안으로는 연결된다.

너무 멀어서 도저히 도달이 불가능하다고 생각될지 모르는 상대도 의외로 다음과 같은 예시로 6단계 안으로 도달하는게 가능하다.

1. 평범한 정치외교학과 대학생
2. 학회에서 만난 서울대 정치외교학과 친구
3. 서울대 학생의 지도교수인 서울대 정치외교학과 교수
4. 서울대 정치외교학과 교수와 친한 대한민국 외교부 장관
5. 대한민국 외교부 장관과 친분이 있는 미국 대통령

한국의 평범한 대학생이 미국 대통령까지 불과 4단계만에 연결되고, 아예 서울대생이 시작이라면 3단계로 끝난다.

<img className="intro-img-mobile" src={introgroupmobile} />

</div>
<div>
</div>
</div>
);
}