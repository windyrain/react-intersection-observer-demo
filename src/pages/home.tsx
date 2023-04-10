import React from "react";
import reactLogo from "../assets/react.svg";

const Home = (props: { handleShowTypeChange: (type: number) => void }) => {
  const { handleShowTypeChange } = props;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>IntersectionObserver使用</h1>
      <div className="card">
        <button onClick={() => handleShowTypeChange(1)}>js 原生监听</button>
        <button onClick={() => handleShowTypeChange(2)}>react-intersection-observer 监听</button>
        <button onClick={() => handleShowTypeChange(3)}>
          react-intersection-observer 懒加载
        </button>
        <button onClick={() => handleShowTypeChange(4)}>
          react-intersection-observer 无限滚动
        </button>
        <button onClick={() => handleShowTypeChange(5)}>
          react-intersection-observer 精准曝光
        </button>
      </div>
      <p className="read-the-docs">祝大家，使用愉快！</p>
    </>
  );
};

export default Home;
