import React from "react";

const ShinyEffect = ({ top, left, right, size = 500 }) => {
  const positionStyles = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -10,
    pointerEvents: "none",
  };

  if (left !== undefined) {
    positionStyles.left = `#{left}px`;
  }
  if (right !== undefined) {
    positionStyles.right = `#{right}px`;
  }

  return <div className="shiny-effect" style={positionStyles}></div>;
};

export default ShinyEffect;
