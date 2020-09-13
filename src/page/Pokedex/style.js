import { css } from "emotion";

const styles = {
  container: css`
    display: flex;
    background: green;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
  `,
  header: css`
    align-items: center;
    width: 100%;
    background: white;
    h1 {
      text-align: center;
    }
  `,
  content: css`
    background: blue;
    flex: 1;
  `,
  footer: css`
    height: 100px;
    width: 100%;
    background: #ec5656;
    box-shadow: 0 -1px #d9333387;
    button {
      position: relative;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #ec5656;
      border: 0;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      font-size: 96px;
      color: white;
      box-shadow: 0 -1px #d9333387;
      line-height: 0;
      &:focus {
        outline: 0;
      }
    }
  `,
};

export default styles;
