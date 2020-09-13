import { css } from "emotion";

const styles = {
  container: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    h3 {
      width: 120px;
      line-height: 0;
    }
  `,
  progressBar: css`
    background: #e4e4e4;
    height: 20px;
    width: 100%;
    border-radius: 10px;
    align-items: flex-start;
  `,
};

export default styles;
