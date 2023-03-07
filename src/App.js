import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/toto");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [refresh]);

  return (
    <div className="App">
      <div className="header">Time for you</div>
      <button onClick={() => setRefresh(!refresh)}>BUTTON</button>
      <div className="rubrique">{data}</div>
      <div className="rubrique">coucou</div>
      <div className="rubrique">relax</div>
      <div className="rubrique">yes</div>
    </div>
  );
}

export default App;
