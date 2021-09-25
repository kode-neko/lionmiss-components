import React from "react";
import { LMListBoxProps } from "./types";
import styles from "./styles.module.scss";

const LMListBox = <T extends Record<string, unknown>>({
  data,
  transform,
}: LMListBoxProps<T>): JSX.Element => {
  return <div className={styles.cont}>{data.map((ele) => transform(ele))}</div>;
};

export default LMListBox;
