import hwang from "../image/hwang.png";

function ActorGraph() {
  // 캔버스 크기 및 중앙 좌표 설정
  const canvasSizeWidth = 800;
  const canvasSizeHeight = 450;
  const centerX = canvasSizeWidth / 2;
  const centerY = canvasSizeHeight / 2;

  // 중심에 위치할 꼭짓점
  const centerVertex = { x: centerX, y: centerY };

  // 각 꼭짓점의 각도와 반지름 계산
  const verticesCount = 10;
  const angleStep = (Math.PI * 2) / verticesCount;
  const radius = 150; // 중심 꼭짓점에서 각 꼭짓점까지의 거리

  // 꼭짓점과 간선 정보 생성
  const vertices = [];
  const edges = [];
  const edgeTexts = [];
  for (let i = 0; i < verticesCount; i++) {
    const angle = angleStep * i;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    const vertex = { x, y };
    vertices.push(vertex);

    // 중심 꼭짓점과 각 꼭짓점 연결
    edges.push([centerVertex, vertex]);

    // 나무 가지처럼 뻗어나가는 새로운 꼭짓점과 연결
    const newX = centerX + Math.cos(angle) * (radius + 100); // 새로운 꼭짓점까지의 거리는 기존 꼭짓점에서의 거리 + 100
    const newY = centerY + Math.sin(angle) * (radius + 100);
    const newVertex = { x: newX, y: newY };
    vertices.push(newVertex);
    edges.push([vertex, newVertex]);

    // 간선의 중간 지점 계산
    const midX = (vertex.x + newVertex.x) / 2;
    const midY = (vertex.y + newVertex.y) / 2;

    // 텍스트 추가 - 꼭짓점과 연결된 간선
    const distance = Math.sqrt(
      (newVertex.x - vertex.x) ** 2 + (newVertex.y - vertex.y) ** 2
    );
    edgeTexts.push({ x: midX, y: midY, text: distance.toFixed(2) }); // 간선 길이 텍스트
  }

  // 가운데 꼭짓점과 각 꼭짓점 연결 간선
  const centerEdgeTexts = [];
  for (let i = 0; i < verticesCount; i++) {
    const angle = angleStep * i;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
    centerEdgeTexts.push({
      x: (centerX + x) / 2,
      y: (centerY + y) / 2,
      text: distance.toFixed(2),
    });
  }

  // 꼭짓점과 간선 그리기
  const vertexElements = vertices.map((vertex, index) => (
    <image
      key={index}
      href={hwang}
      x={vertex.x - 25}
      y={vertex.y - 25}
      width={50}
      height={50}
    />
  ));

  const edgeElements = edges.map((edge, index) => (
    <line
      key={index}
      x1={edge[0].x}
      y1={edge[0].y}
      x2={edge[1].x}
      y2={edge[1].y}
      stroke="red"
      strokeWidth="2"
    />
  ));

  // 간선 위에 텍스트 그리기
  const edgeTextElements = edgeTexts.map((text, index) => (
    <text
      key={index}
      x={text.x}
      y={text.y}
      fontSize="12"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {text.text}
    </text>
  ));

  // 가운데 꼭짓점과 연결된 간선의 텍스트 그리기
  const centerEdgeTextElements = centerEdgeTexts.map((text, index) => (
    <text
      key={index}
      x={text.x}
      y={text.y}
      fontSize="12"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {text.text}
    </text>
  ));

  // 중점 이미지
  const centerElement = (
    <image
      href={hwang}
      x={centerX - 25}
      y={centerY - 25}
      width={50}
      height={50}
      style={{
        borderRadius: 100,
        overflow: "hidden",
      }}
    />
  );

  return (
    <svg width={canvasSizeWidth} height={canvasSizeHeight}>
      {edgeElements} {/* 간선을 먼저 그리면 꼭짓점이 위에 올라가지 않습니다 */}
      {edgeTextElements}
      {centerEdgeTextElements}
      {centerElement}
      {vertexElements}
    </svg>
  );
}

export default ActorGraph;
