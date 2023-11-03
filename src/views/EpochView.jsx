import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import styles from "../style/viewStyle/EpochView.module.sass";
import EchartsComponents from "@/components/EchartsComponent";
import HighchartsCmponent from "@/components/HighchartsComponent";

function EpochView() {
  const options = {};
  return (
    <div className={styles.epochView}>
      <Card className={styles.topCard}>
        <CardBody className={styles.card}>
          <span>Epoch view</span>
        </CardBody>
      </Card>
      <Card>
        <Card className={styles.smallCard}>
          <HighchartsCmponent></HighchartsCmponent>
          <EchartsComponents option={options} width="65%" height="14rem" />
        </Card>
        <Card className={styles.smallCard}>
          <EchartsComponents option={options} width="30%" height="14rem" />
          <EchartsComponents option={options} width="65%" height="14rem" />
        </Card>
      </Card>
    </div>
  );
}

export default EpochView;
