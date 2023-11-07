import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import styles from "../style/viewStyle/StatisticsView.module.css";

import EchartsComponents from "@/components/EchartsComponent";

import { average_reward, nr_games, loss, actionNum ,avgQ,rewardNum} from "@/data/statistic";
import HighChartsComponent from "@/components/HighchartsComponent";
import { useRef } from "react";
function StatisticsView(props) {
  const lineOption = (name, data) => {
    let option = {
      title: {
        text: name,
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["avg_reward"],
        show: false,
      },
      grid: {
        left: "3%",
        right: "8%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        name: "Epoch",
        splitLine: {
          //网格线
          show: false,
        },
        axisLabel: {
          interval: 30, // 设置为 0 表示强制显示所有刻度标签
          rotate: 0, // 旋转角度
          textStyle: {
            fontSize: 12, // 设置刻度标签的字体大小
          },
        },
      },

      yAxis: {
        splitLine: {
          //网格线
          show: false,
        },
      },
      series: [
        {
          name: "Number",
          type: "line",
          showSymbol: false,
          data: data,
          color: "#df8341",
        },
      ],
    };
    return option;
  };

  const HAreaOption = (name, data, arr,color) => {
    const option = {
      chart: {
        type: "area",
        width: null,
        height: "150px",
        margin: null,
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
      },
      credits: {
        enabled: false,
      },
      navigation: {
        buttonOptions: {
          enabled: false, //不显示上下文菜单。要与credits.enabled: false 一起用
        },
      },
      colors: color,
      title: {
        text: "",
      },
      subtitle: {
        text: "",
      },
      legend: {
        enabled: false,
      },
      xAxis: {
        categories: ["1750", "1800", "1850", "1900", "1950", "1999", "2050"],
        tickmarkPlacement: "on",
        title: {
          enabled: false,
        },
        labels: {
          enabled: false,
        },
      },
      yAxis: {
        title: {
          text: name,
        },
        labels: {
          enabled: false,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} )<br/>',
        shared: false,
      },
      plotOptions: {
        area: {
          stacking: "percent",
          lineColor: "#ffffff",
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: "#ffffff",
            enabled: false,
          },
        },
      },
      series: [
        {
          name: arr[0],
          data: data[0],
        },
        { name: arr[1], data: data[1] },
        { name: arr[2], data: data[2] },
      ],
    };
    return option;
  };
  const echart = useRef(null);
  console.log(echart);
  const color1 = ["#7cc380", "#81acda", "#f17f72"];
  const color2 = ["#f7be87", "#bbadcf", "#e2eec8"];
  return (
    <div className={styles.epochView}>
      <Card className={styles.topCard}>
        <CardBody className={styles.card}>
          <span>Statistics view</span>
        </CardBody>
      </Card>
      <Card>
        <div className={styles.lineChart}>
          <EchartsComponents
            option={lineOption("average_reward", average_reward)}
            width="19%"
            height="12rem"
            border="1"

          />
          <EchartsComponents
            option={lineOption("nr_game", nr_games)}
            width="19%"
            height="12rem"
            border="1"
          />
          <EchartsComponents
            option={lineOption("loss", loss)}
            width="19%"
            height="12rem"
            border="1"
          />
          <EchartsComponents
            option={lineOption("avgQ",avgQ)}
            width="19%"
            height="12rem"
            border="1"
          />
          <EchartsComponents
            option={lineOption("nr_game", nr_games)}
            width="19%"
            height="12rem"
            border="1"
          />
        </div>

        <HighChartsComponent
          options={HAreaOption("Action", actionNum, ["NOOP", "LEFT", "RIGHT"],color1)}
          width="100%"
          height="7rem"
          className="AreaOne"

        />
        <HighChartsComponent
          options={HAreaOption("Reward", rewardNum, ["7", "4", "1"],color2)}
          width="100%"
          height="7rem"
          className="AreaOne"

        />
      </Card>
    </div>
  );
}

export default StatisticsView;
