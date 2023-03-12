// import { useState } from "react";

const Home = ({ data, refresh, setRefresh }) => {
  return (
    <div>
      <div className="header">Time for you</div>
      <button onClick={() => setRefresh(!refresh)}>BUTTON</button>
      <div className="rubrique">{data}</div>
    </div>
  );
};

export default Home;
