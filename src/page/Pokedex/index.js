import { connect } from "react-redux";
import React from "react";
import styles from "./style";

const Pokedex = (props) => {
  console.log("props :>> ", props);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>My Pokedex</h1>
      </div>
      <div className={styles.content}>
        <h1>content</h1>
      </div>
      <div className={styles.footer}>
        <button>+</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
