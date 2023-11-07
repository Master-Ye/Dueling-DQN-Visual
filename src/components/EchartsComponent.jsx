import React from "react";
import ReactECharts from "echarts-for-react";

const EchartsComponents = (props) => {
  const { option, width, height ,border,mt} = props;
  const bod = border==1?"1px solid #9b9da0":""
  const mt1 = mt?mt:"0.5rem"
  return (
    <ReactECharts
      option={option}
      style={{
        height: height,
        width: width,
        border:bod,
        marginTop: mt1,
        borderRadius: "12px",
      }}
    />
  );
};

export default EchartsComponents;
