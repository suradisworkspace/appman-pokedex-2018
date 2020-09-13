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
  modalOverlay: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    padding: 32px;
    display: flex;
  `,
  modal: css`
    background: white;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 8px;
    &:focus {
      outline: 0;
    }
  `,
  search: css`
    display: flex;
    flex-direction: row;
    height: 60px;
    border: 4px solid #e6e6e6;
    justify-content: center;
    border-radius: 5px;
    input {
      font-size: 32px;
      width: 100%;
      border: 0;
      &:focus {
        outline: 0;
      }
    }
    img {
      cursor: pointer;
      height: 50px;
      width: 50px;
    }
  `,
  searchedContent: css`
    flex: 1;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  searchCardContainer: css`
    display: flex;
    flex-direction: row;
    background: #f3f4f7;
    margin: 8px;
    padding: 8px;
    &:hover {
      h2 {
        display: block;
      }
    }
  `,
  cardImage: css`
    height: 200px;
  `,
  cardInfo: css`
    margin-left: 16px;
    flex: 1;
  `,
  name: css`
    line-height: 0;
  `,
  hapinessContainer: css`
    display: flex;
    flex-direction: row;
  `,
  hapiness: css`
    width: 50px;
    height: 50px;
  `,
  searchAddContainer: css`
    width: 200px;
    text-align: right;
    h2 {
      line-height: 0;
      cursor: pointer;
      color: #dc7777;
      display: none;
    }
  `,
};

export default styles;
