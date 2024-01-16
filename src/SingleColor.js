import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  const bg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [alert]);
  //console.log(bg);
  return (
    <article
      className={` color ${index > 10 && "color-light"} `}
      style={{ backgroundColor: `rgb(${bg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      {/* <p className="color-value">{hex}</p> */}
      <p className="color-value">{hexValue}</p>
      <p className="alert">{alert ? "Copied" : ""} </p>
    </article>
  );
};

export default SingleColor;
