import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}
const HighchartsCmponent = (props) => {
  const { options, width, height } = props;
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        style={{
          height: height,
          width: width,
          border: "1px solid #9b9da0",
          marginTop: "0.5rem",
          borderRadius: "12px",
        }}
      />
    </div>
  );
};
export default HighchartsCmponent;
