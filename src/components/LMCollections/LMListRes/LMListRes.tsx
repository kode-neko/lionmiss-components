import React from "react";
import { LMListResProps } from "./types";
import styles from "./styles.module.scss";

const LMListRes = <T extends Record<string, unknown>>({
  data,
  transform,
}: LMListResProps<T>): JSX.Element => {
  return <div className={styles.cont}>{data.map((ele) => transform(ele))}</div>;
};

export default LMListRes;
