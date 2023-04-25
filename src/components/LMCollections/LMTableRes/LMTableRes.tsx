import React from "react";
import { LMTableResProps } from "./types";
import styles from "./styles.module.scss";

const LMTableRes = <T extends Record<string, unknown>>({
  columns,
  data,
}: LMTableResProps<T>): JSX.Element => {
  return (
    <div className={styles.tableList}>
      {data.map((data: T, index) => (
        <div key={index} className={styles.ele}>
          {columns.map((col) => (
            <div
              key={col.key}
              className={styles.chunk}
              style={{ width: col.width }}
            >
              {col.transform
                ? col.transform(data)
                : (data[col.key] as JSX.Element)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LMTableRes;
