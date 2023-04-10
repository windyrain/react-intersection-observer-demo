import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./page.css";

const Page2 = (props: { handleShowTypeChange: (type: number) => void }) => {
  const { handleShowTypeChange } = props;
  const { ref } = useInView({
    onChange: (inView, entry) => {
      console.log(entry.intersectionRatio);
    },
  });

  return (
    <div className="scroll-container">
      <button className="btn" onClick={() => handleShowTypeChange(0)}>
        返回
      </button>
      <div className="placeholder">其他元素</div>
      <div className="placeholder">其他元素</div>
      <div className="placeholder">其他元素</div>
      <div className="footer" ref={ref}>
        被观察的元素
      </div>
    </div>
  );
};

export default Page2;
