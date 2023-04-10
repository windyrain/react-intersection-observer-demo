import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./page.css";

const Page4 = (props: { handleShowTypeChange: (type: number) => void }) => {
  const { handleShowTypeChange } = props;
  const [datas, setDatas] = useState([1, 1, 1]);
  const { ref } = useInView({
    onChange: (inView, entry) => {
      console.log("inView", inView);
      if (inView) {
        setDatas((prevDatas) => [...prevDatas, ...new Array(3).fill(1)]);
      }
    },
  });

  return (
    <div className="scroll-container">
      <button className="btn" onClick={() => handleShowTypeChange(0)}>
        返回
      </button>
      {datas.map((item, index) => {
        return (
          <div key={index + 1} className="placeholder">
            第{index + 1}个元素
          </div>
        );
      })}
      <div className="load-more" ref={ref}></div>
    </div>
  );
};

export default Page4;
