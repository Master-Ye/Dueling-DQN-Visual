"use client";
import React from "react";
import StatisticsView from "../views/StatisticsView";
import EpochView from "@/views/EpochView";
import styles from "./Main.module.sass";
export default function Main() {
  return (
    <div className={styles.main}>
      <StatisticsView></StatisticsView>
      <EpochView></EpochView>
    </div>
  );
}
