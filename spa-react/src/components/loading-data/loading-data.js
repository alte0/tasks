import React from "react";
import "./loading-data.scss";

const LoadingData = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="text">Загрузка данных</div>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  )
};

export default LoadingData