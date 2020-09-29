import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Top Trending" fetchUrl={requests.fetchTrending} islargeRow />
      <Row title="Top Comedy" fetchUrl={requests.fetchComedy} />
      <Row title="Top Romantic" fetchUrl={requests.fetchRomantic} />
      <Row title="Top Historic movies" fetchUrl={requests.fetchHistory} />
      <Row
        title="Science and Fiction"
        fetchUrl={requests.fetchScienceFiction}
      />
      <Row title="Mystery movies" fetchUrl={requests.fetchMystery} />
    </div>
  );
}

export default App;
