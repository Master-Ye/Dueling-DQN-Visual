import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import styles from "../style/viewStyle/EpochView.module.sass";
import EchartsComponents from "@/components/EchartsComponent";
import HighchartsCmponent from "@/components/HighchartsComponent";
import { Input } from "@nextui-org/react";
function EpochView() {
  const options =  {
title:{
text:"Reward",
x:"34%",
},
    legend: {
       top:"10%",
       textStyle:{
       },
       show:false
   },
   tooltip: {
       trigger: 'item',
       show:true
   },
   color: ["#7cc380","white","#81acda"],
   series: [
       {
           name: '',
           type: 'pie',
           radius: ['15%', '70%'],//大小修改
           avoidLabelOverlap: false,
           label: {
               show: false
           },
           emphasis: {
               label: {
                   show:false
               }
           },
           labelLine: {
               show: false
           },
           itemStyle :{
            borderWidth: 1, // 外边框的宽度
            borderColor: 'black', // 外边框的颜色
            borderType: 'solid' // 外边框的样式，默认为'solid'
          },
           data: [
               {value: 580, name: '未开始',label:{color:"#dffaef"}},
               {value: 735, name: '已完成',label:{color:"#1be8df"}},
               {value: 1048, name: '进行中',label:{color:"#fbd408"}},
           ]
       }
   ]
};
const option = {
  title: {
      text: '',
  },
  grid:{
x:50,
y:0,
x2:0,
y2:20
  },
  tooltip: {
       trigger: "axis",
  },
  legend: {
    show:false,
      itemWidth:15,
      itemHeight:15,
      data:['可用','不可用'],
  },
  xAxis: {
      data: ["网络设备","服务器","应用","其他","虚拟机","存储"],
      splitLine:{
          show:false,
      },
  },
  yAxis: {
       splitLine:{
          show:false,
      },
  },
  series: [{
    barWidth: 50,
    barCategoryGap: "0%",
      name: '可用',
      type: 'bar',
      stack:'使用情况',
      data: [5, 20, 36, 10, 10, 20],
      itemStyle:{
           normal:{color:"#FF8849"},
      }
  },{
      name: '不可用',
      type: 'bar',
      stack:'使用情况',
      data: [30, 22, 18, 35, 30, 30],
      itemStyle:{
           normal:{color:"#3FBB49"},
      }
  }]
};
  return (
    <div className={styles.epochView}>
      <Card className={styles.topCard}>
        <CardBody className={styles.card}>
          <span>Epoch view</span>
          <div className={styles.epochInput}>
            <span>Epoch: </span>
            <Input onChange={(e)=>changeEvent(e)} className={styles.valueInput} />
          </div>
        </CardBody>
      </Card>
      <Card>
        <Card className={styles.smallCard}>
        <EchartsComponents option={options} width="30%" height="14rem" />
          <EchartsComponents option={option} width="65%" height="13rem" />
        </Card>
        <Card className={styles.smallCard}>
          <EchartsComponents option={options} width="30%" height="14rem" />
          <EchartsComponents option={option} width="65%" height="13rem" className="mt-2"  />
        </Card>
      </Card>
    </div>
  );
}

export default EpochView;
