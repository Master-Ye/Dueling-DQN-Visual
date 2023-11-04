import React from "react";
import ReactECharts from "echarts-for-react";

const EchartsComponents = (props) => {
  const { option, width, height ,border} = props;
  const bod = border==1?"1px solid #9b9da0":""
  return (
    <ReactECharts
      option={option}
      style={{
        height: height,
        width: width,
        border:bod,
        marginTop: "0.5rem",
        borderRadius: "12px",
      }}
    />
  );
};

export default EchartsComponents;
