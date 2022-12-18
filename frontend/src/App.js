import "./App.css";
import * as React from "react";

const get = async () => {
  const res = await fetch("http://localhost:9999/api/users");
  const json = await res.json();
  return json;
};

function App() {
  React.useEffect(() => {
    get().then(console.log);
  }, []);

  return <div className="App">aaaaa</div>;
}

export default App;
