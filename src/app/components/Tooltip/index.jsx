"use client";

import React, { useState } from "react";

const Tooltip = ({ children, text, position = "bottom" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  const getTooltipPosition = () => {
    switch (position) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mt-2";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 -mt-1";
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 -ml-1";
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-1";
      default:
        return "top-full left-1/2 transform -translate-x-1/2 -mt-1";
    }
  };

  return (
    <div className="relative inline-block" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {isVisible && (
        <div
          className={`absolute whitespace-nowrap bg-gray-900 text-white text-xs rounded py-1 px-2 z-50 ${getTooltipPosition()}`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
