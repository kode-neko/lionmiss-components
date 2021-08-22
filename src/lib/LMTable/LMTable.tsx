import React from "react";
import { LMTableProps } from "./types";
import styles from "./styles.module.scss";

const LMTable = <T extends Record<string, unknown>>({
  columns,
  data,
}: LMTableProps<T>): JSX.Element => {
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              className={styles.headCol}
              style={{ width: col.width }}
            >
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.body}>
        {data.map((row: T, index) => (
          <tr key={index} className={styles.row}>
            {columns.map((col) => (
              <td key={col.key} className={styles.rowData}>
                {col.transform
                  ? col.transform(row)
                  : (row[col.key] as JSX.Element)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LMTable;
