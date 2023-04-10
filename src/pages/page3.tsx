import React from "react";
import { useInView } from "react-intersection-observer";
import "./page.css";

interface Props {
  width: number;
  height: number;
  src: string;
}

const LazyImage = ({ width, height, src, ...rest }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    root: document.querySelector(".scroll-container"),
    rootMargin: `0px 0px ${window.innerHeight}px 0px`,
    onChange: (inView, entry) => {
      console.log("info", inView, entry.intersectionRatio);
    },
  });

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        paddingBottom: `${(height / width) * 100}%`,
        background: "#2a4b7a",
      }}
    >
      {inView ? (
        <img
          {...rest}
          src={src}
          width={width}
          height={height}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
          }}
        />
      ) : null}
    </div>
  );
};

const Page3 = (props: { handleShowTypeChange: (type: number) => void }) => {
  const { handleShowTypeChange } = props;

  return (
    <div className="scroll-container">
      <button className="btn" onClick={() => handleShowTypeChange(0)}>
        返回
      </button>
      <div className="placeholder">其他元素</div>
      <div className="placeholder">其他元素</div>
      <div className="placeholder">其他元素</div>
      <LazyImage
        width={750}
        height={200}
        src={
          "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4acf97e7dc944bf8ad5719b2b42f026~tplv-k3u1fbpfcp-watermark.image?"
        }
      />
    </div>
  );
};

export default Page3;
