import React, { useEffect, useState } from "react";
import cur from "./images/Cursor.svg";

const Compo = () => {
  console.log(cur);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <img
      alt=""
      src={cur}
      className="custom-curso scale-[170%] absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 select-none"
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default Compo;
