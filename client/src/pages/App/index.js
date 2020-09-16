import React, { useState, useEffect } from "react";
import Form from "../../components/Form";
import "./App.css";
import { Router } from "@reach/router";

function App() {
  const [data, setData] = useState({
    message: "Fetching from API...",
    fetched: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:8080/").then((res) =>
        res.json()
      );
      setData({
        message: data.data.message,
        fetched: true,
      });
    };

    if (!data.fetched) {
      fetchData();
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Us</h1>
        <p>{data.message}</p>
      </header>
      <section>
        <Router>
          <Form path="/" />
        </Router>
      </section>
    </div>
  );
}

export default App;
