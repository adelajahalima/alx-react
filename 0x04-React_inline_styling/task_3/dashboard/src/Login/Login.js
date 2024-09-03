import React from "react";

function Login() {
  return (
    <React.Fragment>
      <div className="App-body" style={styles.body}>
        <p>Login to access the full dashboard</p>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" style={styles.input}></input>
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" style={styles.input}></input>
          </div>
          <button style={styles.button}>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

const styles = {
  body: {
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  inputGroup: {
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "5px",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px",
    width: "100%",
    boxSizing: "border-box",
  },
  "@media (min-width: 900px)": {
    form: {
      flexDirection: "row",
      alignItems: "center",
    },
    inputGroup: {
      marginBottom: "0",
      marginRight: "10px",
      flexDirection: "row",
    },
    button: {
      marginLeft: "10px",
      width: "auto",
    },
  },
};

export default Login;
