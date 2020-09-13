import React from "react";
import { css } from "emotion";
import styles from "./style";

const ProgressBar = ({ label, percent }) => (
  <div className={styles.container}>
    <h3>{label}</h3>
    <div className={styles.progressBar}>
      <div
        className={css`
          width: ${percent}%;
          border-radius: 10px;
          height: 100%;
          background: #f3701a;
        `}
      ></div>
    </div>
  </div>
);

export default ProgressBar;
