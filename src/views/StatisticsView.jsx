import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import styles from "../style/viewStyle/StatisticsView.module.css";
import { Input } from "@nextui-org/react";
import EchartsComponents from "@/components/EchartsComponent";
import { rewardNum } from "@/data/statistic";
import { average_reward, nr_games, loss ,actionNum} from "@/data/statistic";
import HighChartsComponent from "@/components/HighchartsComponent";

function StatisticsView(props) {
  const HlineOption = (name, data) => {
    let option = {
      chart: {
        width: 325,
        height: 400,
      },
      title: {
        text: name,
      },
      tooltip: {
        valueDecimals: 2,
      },
      xAxis: {
        type: "number",
      },

      series: [
        {
          data: data,
          lineWidth: 0.5,
          name: "Hourly data points",
        },
      ],
    };
    return option;
  };
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
  const options1 = {
    backgroundColor: "#fff",
    grid: {
      top: "0px",
      left: "20px",
      right: "5px",
      bottom: "0px",
      containLabel: false,
    },
    color: ["#37A2DA", "#32C5E9", "#67E0E3"],
    tooltip: {
      trigger: "axis",
      show: false,
    },
    legend: {
      data: ["邮件", "联盟", "视频"],
      show: false,
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        show: false,
      },
    ],
    yAxis: [
      {
        type: "value",
        show: false,
      },
    ],
    series: [
      {
        name: "邮件",
        type: "line",
        stack: "总量",
        areaStyle: {
          normal: {},
        },
        data: [100, 140, 100, 100, 130, 90, 110],
      },
      {
        name: "联盟",
        type: "line",
        stack: "总量",
        areaStyle: {
          normal: {},
        },
        data: [230, 300, 300, 140, 190, 180, 160],
      },
      {
        name: "视频",
        type: "line",
        stack: "总量",
        areaStyle: {
          normal: {},
        },
        data: [550, 430, 500, 530, 390, 500, 410],
      },

    ],
  };
  const options2 = {
    backgroundColor: "#fff",
    grid: {
      top: "0px",
      left: "20px",
      right: "5px",
      bottom: "0px",
      containLabel: false,
    },
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8"],
    tooltip: {
      trigger: "axis",
      show: false,
    },
    legend: {
      data: ["邮件", "联盟", "视频", "搜索"],
      show: false,
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
    ],
    yAxis: [
      {
        type: "value",
        show: false,
      },
    ],
    series: [
      {
        name: "邮件",
        type: "line",
        stack: "总量",
        areaStyle: {
          normal: {},
        },
        data: [100, 140, 100, 100, 130, 90, 110],
      },
      {
        name: "联盟",
        type: "line",
        stack: "总量",
        areaStyle: {
          normal: {},
        },
        data: [230, 300, 300, 140, 190, 180, 160],
      },
      {
        name: "视频",
        type: "line",
        stack: "总量",
        areaStyle: {
          normal: {},
        },
        data: [550, 430, 500, 530, 390, 500, 410],
      },
      {
        name: "搜索",
        type: "line",
        stack: "总量",
        areaStyle: {
          normal: {},
        },
        data: [620, 630, 600, 730, 790, 730, 820],
      },
    ],
  };
  const  HAreaOption = (name, data,arr) => {
    const option =  {
      chart: {
        type: 'area',
        width: null,
    height: "150px",
    margin: null,
    spacingBottom: 0,
    spacingTop: 0,
    spacingLeft: 0,
    spacingRight: 0,
      },
      credits: {
        enabled: false
    },
      colors:[
        "#7cc380",
        "#81acda",
        "#f17f72"
      ],
      title: {
        text: ""
      },
      subtitle: {
        text: ''
      },
      legend:{
        enabled:false
      },
      xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
          enabled: false
        },
        labels:{
          enabled:false
        }
      },
      yAxis: {
        title: {
          text: name
        },
        labels:{
          enabled:false
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} )<br/>',
        shared: false
      },
      plotOptions: {
        area: {
          stacking: 'percent',
          lineColor: '#ffffff',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#ffffff',
            enabled:false
          }
        }
      },
      series: [{
        name: arr[0],
        data:data[0]},
        {name: arr[1],
        data: data[1]},
        {name: arr[2],
        data: data[2]   }]}
    return option
  }
  return (
    <div className={styles.epochView}>
      <Card className={styles.topCard}>
        <CardBody className={styles.card}>
          <span>Statistics view</span>
          <div className={styles.epochInput}>
            <span>Epoch: </span>
            <Input type="email" className={styles.valueInput} />
          </div>
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
            option={lineOption("nr_game", nr_games)}
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

        <HighChartsComponent options={HAreaOption("Action",actionNum,["NOOP","LEFT","RIGHT"])} width="100%" height="7rem" className="AreaOne"  />
        <HighChartsComponent options={HAreaOption("Reward",rewardNum,["7","4","1"])} width="100%" height="7rem" className="AreaOne"   />
      </Card>
    </div>
  );
}

export default StatisticsView;
