import React, { useEffect } from "react";
import "./page.css";

const Page1 = (props: { handleShowTypeChange: (type: number) => void }) => {
  const { handleShowTypeChange } = props;

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      console.log(entries[0].intersectionRatio);
    });

    const footer = document.querySelector(".footer");

    if (footer) {
      io.observe(footer);
    }

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div className="scroll-container">
      <button className="btn" onClick={() => handleShowTypeChange(0)}>
        返回
      </button>
      <div className="placeholder">其他元素</div>
      <div className="placeholder">其他元素</div>
      <div className="placeholder">其他元素</div>
      <div className="footer">被观察的元素</div>
    </div>
  );
};

export default Page1;
