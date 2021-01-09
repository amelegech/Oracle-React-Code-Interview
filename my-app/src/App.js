import React from "react";
import "./App.css";
import axios from "axios";
// Given url: https://httpbin.org/get

function App() {
  const [myData, setMyData] = React.useState("");
  React.useEffect(() => {
    myFetchFunction();
  }, []);

  const myFetchFunction = () => {
    axios
      .get("https://httpbin.org/get")
      .then((res) => {
        console.log("axios response", res);
        setMyData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="App">
      <h3>ORACLE, React Live code interview </h3>
      <div>
        <table>
          <tr>
            <th>origin</th> ||
            <th>url</th>
          </tr>
          <tr>
            <td>{myData.origin} </td>||
            <td>{myData.url} </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
