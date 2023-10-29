import React from "react";
import { LiaHandPointDown } from "react-icons/lia";
import { useResize } from "../../hooks/useResize";

const Title = () => {
  const screen = useResize();
  return (
    <div
      className={` pb-5 ${
        screen > 500 ? "" : "text-center"
      }`}
    >
      <h3 className="blue">ABOUT ME</h3>
      <span className="subtitle">
        A dedicated FullStack Web Developer based in Hod-Hasharon, Israel
        <LiaHandPointDown className="text-success" />
      </span>
    </div>
  );
};

export default Title;
