import React, { useEffect, useRef, useState } from "react";
import hwang from "../../image/hwang.png";
import { movie1, movie2, movie3, movie4, movie5, actorHwang } from "./tmpdata";
import { TMDB_API_KEY } from "../../Config";
import axios from "axios";

// https://velog.io/@ncookie/IMDB-TMDB-API-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%A0%95%EB%A6%AC

//https://cpro95.tistory.com/694

const defaultStyle = {
  border: "1px solid gray",
  display: "inline-block",
  margin: "1rem",
};

function NetworkActor() {
  const [loading, setLoading] = useState(true);
  const name = "조승우";
  const [imgUrl, setImgUrl] = useState("");
  const canvas = canvasRef.current;
  canvas.width = canvasSizeWidth;
  canvas.height = canvasSizeHeight;
  const context = canvas.getContext("2d");
  const images = [movie1, movie2, movie3, movie4, movie5];
  const angleStep = (2 * Math.PI) / images.length;
  const radius = 155;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&page=1&query=${name}&language=ko-KR`
      )
      .then((response) => {
        console.log(
          "http://image.tmdb.org/t/p/w185/" +
            response.data.results[0].profile_path
        );
        setImgUrl(
          "http://image.tmdb.org/t/p/w185/" +
            response.data.results[0].profile_path
        );
      });

    setCtx(context);

    // 다섯 개의 이미지를 추가하고 선으로 연결

    images.forEach((image, index) => {
      const angle = angleStep * index;
      var x = centerX + radius * Math.cos(angle) - 20; // 이미지 크기의 반만큼 이동
      var y = centerY + radius * Math.sin(angle) - 20;

      x = index === 2 || index === 3 ? x - 70 : x;
      y = index === 4 ? y - 10 : y;
      drawImageWithLine(
        canvas,
        image,
        x,
        y,
        radius,
        actorHwang.movieList[index]
      );
    });

    centerImage({ canvas });
    console.log(imgUrl);

    setLoading(false);
  }, []);

  const canvasSizeWidth = 800;
  const canvasSizeHeight = 420;
  const centerX = canvasSizeWidth / 2;
  const centerY = canvasSizeHeight / 2;

  const [ctx, setCtx] = useState();

  const canvasRef = useRef(null);

  const centerImage = ({ canvas }) => {
    const centerImg = new Image();
    centerImg.onload = function () {
      const ctx = canvas.getContext("2d");

      const radius = 60;

      ctx.drawImage(
        centerImg,
        centerX - radius,
        centerY - radius,
        radius * 2,
        radius * 2
      );
    };
    centerImg.src = hwang; // 이미지 파일 경로를 지정합니다.
  };

  const drawLine = (canvas, startX, startY, endX, endY, text) => {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.fillText(text, (startX + endX) / 2 - 10, (startY + endY) / 2);
  };

  const drawImageWithLine = (canvas, image, x, y, radius, text) => {
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = function () {
      drawLine(canvas, centerX, centerY, x + 20, y + 40, text); // 이미지 중점과 중점을 연결하는 선

      ctx.drawImage(img, x, y, 60, 60); // 이미지 크기는 원하는 크기로 조정 가능
    };
    img.src = imgUrl; // 이미지 파일 경로를 지정합니다.
  };

  return (
    <>
      {loading ? "loading" : null}
      {console.log(loading)}
      <div className="container">
        <canvas ref={canvasRef} style={defaultStyle}></canvas>
      </div>
    </>
  );
}

export default NetworkActor;
