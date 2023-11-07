import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import styles from "../style/viewStyle/EpochView.module.sass";
import EchartsComponents from "@/components/EchartsComponent";
import { useMemo } from "react";
import { Input } from "@nextui-org/react";
import { actionNum ,rewardNum} from "@/data/statistic";
import { useState } from "react";
function EpochView() {
  const [ Index, setIndex ] = useState(1);
  const options = {
    title: {
      text: "Reward",
      x: "34%",
    },
    legend: {
      top: "10%",
      textStyle: {},
      show: false,
    },
    tooltip: {
      trigger: "item",
      show: true,
    },
    color: ["#7cc380", "white", "#81acda"],
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
            show: false,
          },
        },
        labelLine: {
          show: false,
        },
        itemStyle: {
          borderWidth: 1, // 外边框的宽度
          borderColor: "black", // 外边框的颜色
          borderType: "solid", // 外边框的样式，默认为'solid'
        },
        data: [
          { value: 580, name: "未开始", label: { color: "#dffaef" } },
          { value: 735, name: "已完成", label: { color: "#1be8df" } },
          { value: 1048, name: "进行中", label: { color: "#fbd408" } },
        ],
      },
    ],
  };
  const option = {
    title: {
      text: "",
    },
    grid: {
      x: 50,
      y: 30,
      x2: 0,
      y2: 20,
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      show: false,
      itemWidth: 15,
      itemHeight: 15,
      data: ["可用", "不可用"],
    },
    xAxis: {
      data: ["网络设备", "服务器", "应用", "其他", "虚拟机", "存储"],
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      name: "action_dis",
    },
    series: [
      {
        barWidth: 50,
        barCategoryGap: "0%",
        name: "可用",
        type: "bar",
        stack: "使用情况",
        data: [5, 20, 36, 10, 10, 20],
        itemStyle: {
          normal: { color: "#FF8849" },
        },
      },
      {
        name: "不可用",
        type: "bar",
        stack: "使用情况",
        data: [30, 22, 18, 35, 30, 30],
        itemStyle: {
          normal: { color: "#3FBB49" },
        },
      },
    ],
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
        z:1000,
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
            formatter:function(e){
              let data=e.data;
                if(data.value==0){

                  data.label.show=false;
                }else{
                  return  `${data.name}`
                }
              },
              show: true,
              position: 'inside',

              fontSize: 10,
              fontFamily: 'Microsoft YaHei-Regular, Microsoft YaHei',
              fontWeight: 400,
              color: "black"

          },
          itemStyle: {
            borderWidth: 1, // 外边框的宽度
            borderColor: "black", // 外边框的颜色
            borderType: "solid", // 外边框的样式，默认为'solid'
          },
          data: [
            { value: data[0][index], name: nameArray[0],label:{show:true} },
            { value: data[1][index], name: nameArray[1] ,label:{show:true}},
            { value: data[2][index], name: nameArray[2] ,label:{show:true}},
          ],
        },
      ],
    }
  };
  const color1 = ["#7cc380", "#81acda", "#f17f72"];
  const color2 = ["#f7be87", "#bbadcf", "#e2eec8"];
  const pineOption2 = useMemo(() => {return sPineChartOption("reward_dis",color2,rewardNum,Index-1,["7","4","1"])}, [Index]);
  const pineOption1 = useMemo(() => { return sPineChartOption("action_dis",color1,actionNum,Index-1,["NOOP","LEFT","RIGHT"])}, [Index]);

  const changeIndex = (e) => {
    console.log(e.target.value);
    setIndex(e.target.value);
  };
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
            option={option}
            width="65%"
            height="13rem"
            mt="1rem"
          />
        </Card>
        <Card className={styles.smallCard}>
          <EchartsComponents option={pineOption2} width="30%" height="14rem" />
          <EchartsComponents
            option={option}
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
