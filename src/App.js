import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

//components
import Header from "./components/Header/Header";

//views
import Home from "./views/Home/Home";
import Signin from "./views/Signin/Signin";
import Signup from "./views/Singup/Signup";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState();

  const [token, setToken] = useState(Cookies.get("COOKIETEST") || null);

  const setUser = (token) => {
    if (token !== null) {
      Cookies.set("COOKIETEST", token);
    } else {
      Cookies.remove("COOKIETEST");
    }
    setToken(token);
  };

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
      <Router>
        <Header token={token} setUser={setUser} />
        <Routes>
          <Route
            path="/"
            element={
              <Home data={data} refresh={refresh} setRefresh={setRefresh} />
            }
          />
          <Route
            path="/user/signup"
            element={<Signup setUser={setUser} />}
          ></Route>
          <Route
            path="/user/signin"
            element={<Signin setUser={setUser} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
