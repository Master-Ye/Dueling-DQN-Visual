import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import styles from "../style/viewStyle/EpochView.module.sass";
import EchartsComponents from "@/components/EchartsComponent";
import { useMemo } from "react";
import { Input } from "@nextui-org/react";
import { actionNum, rewardNum } from "@/data/statistic";
import { useState } from "react";
import {RepochLineData,AepochLineData} from "@/data/epoch"
function EpochView() {
  const [Index, setIndex] = useState(1);
  const sLineChartOption = (name, color, data, nameArray) => {
    const lineOption = {
      title: {
        text: name,
      },
      tooltip: {
        trigger: "axis",
      },

      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type:"value",
        min:0,
        max:100
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: nameArray[2],
          type: "line",
          stack: "Total",
          data: data[0],
          color:color[0]
        },
        {
          name: nameArray[1],
          type: "line",
          stack: "Total",
          data: data[1],
          color:color[1]
        },
        {
          name: nameArray[0],
          type: "line",
          stack: "Total",
          data: data[2],
          color:color[2]
        },
      ],
    };
    return lineOption;
  };

  const sPineChartOption = (name, color, data, index = 0, nameArray) => {
    return {
      title: {
        text: name,
        x: "34%",
      },
      legend: {
        top: "10%",
        textStyle: {},
        show: false,
        z: 1000,
      },
      tooltip: {
        trigger: "item",
        show: true,
      },
      color: color,
      series: [
        {
          name: "",
          type: "pie",
          radius: ["15%", "70%"], //大小修改
          avoidLabelOverlap: false,
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          labelLine: {
            show: false,
          },
          label: {
            formatter: function (e) {
              let data = e.data;
              if (data.value == 0) {
                data.label.show = false;
              } else {
                return `${data.name}`;
              }
            },
            show: true,
            position: "inside",

            fontSize: 10,
            fontFamily: "Microsoft YaHei-Regular, Microsoft YaHei",
            fontWeight: 400,
            color: "black",
          },
          itemStyle: {
            borderWidth: 1, // 外边框的宽度
            borderColor: "black", // 外边框的颜色
            borderType: "solid", // 外边框的样式，默认为'solid'
          },
          data: [
            {
              value: data[0][index],
              name: nameArray[0],
              label: { show: true },
            },
            {
              value: data[1][index],
              name: nameArray[1],
              label: { show: true },
            },
            {
              value: data[2][index],
              name: nameArray[2],
              label: { show: true },
            },
          ],
        },
      ],
    };
  };
  const color1 = ["#7cc380", "#81acda", "#f17f72"];
  const color2 = ["#f7be87", "#bbadcf", "#e2eec8"];
  const color =["#e2eec8", "#bbadcf", "#f7be87"];
  const pineOption2 = useMemo(() => {
    return sPineChartOption("reward_dis", color2, rewardNum, Index - 1, [
      "7",
      "4",
      "1",
    ]);
  }, [Index]);


  const pineOption1 = useMemo(()=>{
    return sPineChartOption("action_dis", color1, actionNum, Index - 1, [
      "NOOP",
      "LEFT",
      "RIGHT",
    ])},[Index])

  const lineOption2 =  sLineChartOption("Reward",color,RepochLineData, [
      "7",
      "4",
      "1",
    ])
  const lineOption1 = sLineChartOption("Action",color1,AepochLineData,  [
    "NOOP",
    "LEFT",
    "RIGHT",
  ])
  const changeIndex = (e) => {
    console.log(e.target.value);
    setIndex(e.target.value);
  };
  console.log(lineOption1)
  console.log(pineOption1)
  console.log(lineOption2)
  return (
    <div className={styles.epochView}>
      <Card className={styles.topCard}>
        <CardBody className={styles.card}>
          <span>Epoch view</span>
          <div className={styles.epochInput}>
            <span>Epoch: </span>
            <Input
              onChange={(e) => changeIndex(e)}
              className={styles.valueInput}
              value={Index}
              type="number"
              min={1}
              max={100}
            />
          </div>
        </CardBody>
      </Card>
      <Card>
        <Card className={styles.smallCard}>
          <EchartsComponents option={pineOption1} width="30%" height="14rem" />
          <EchartsComponents
            option={lineOption1}
            width="65%"
            height="13rem"
            mt="1rem"
          />
        </Card>
        <Card className={styles.smallCard}>
          <EchartsComponents option={pineOption2} width="30%" height="14rem" />
          <EchartsComponents
            option={lineOption2}
            width="65%"
            height="13rem"
            mt="1rem"
          />
        </Card>
      </Card>
    </div>
  );
}

export default EpochView;
