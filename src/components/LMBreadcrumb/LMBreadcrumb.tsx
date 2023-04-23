import React from "react";
import { LMPathSegment } from "../../types";
import styles from "./styles.module.scss";
import LMBreadcrumbProps from "./types";

const LMBreadcrumb: React.FC<LMBreadcrumbProps> = ({ path }) => {
  const chunck = ({ name, ...segment }: LMPathSegment) => (
    <>
      <div className={styles.segment}>
        <a {...segment}>{name}</a>
      </div>
      <div className={styles.slash}>/</div>
    </>
  );
  const lastChunck = ({ name }: LMPathSegment) => (
    <div className={styles.last}>{name}</div>
  );
  return (
    <div className={styles.breadcrum}>
      {path.map((segment, index) =>
        index !== path.length - 1 ? chunck(segment) : lastChunck(segment)
      )}
    </div>
  );
};

export default LMBreadcrumb;
