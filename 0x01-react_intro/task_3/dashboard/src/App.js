
import './App.css';
import logo from "./Holberton_logo.jpg"

function App() {
  return (
    <div className="App">
      <div className="header App-header">
        <p><img src={logo} style={{ height: '200px', width: '200px' }} alt="logo" /></p>
        <h1>School dashboard</h1>
      </div>
      <div className="body App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="button">OK</button>
      </div>
      <div className=" footer App-footer">
        © {getFullYear()} - {getFooterCopy(true)}

      </div>
    </div>
  );
}

export default App;
