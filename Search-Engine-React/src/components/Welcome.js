import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <div style={styles.main}>
        <div style={styles.container}>
          <div style={styles.heading}>Welcome to the Question Bank</div>
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    height: "40%",
    width: "50%",
    marginTop: "10%",
    backgroundColor: "orangered",
    borderRadius: "80px",
  },
  heading: {
    display: "flex",
    fontSize: "35px",
    alignItems: "center",
    color: "white",
  },
};
