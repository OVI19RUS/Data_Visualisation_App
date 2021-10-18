import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import Bottom from "./Bottom";
import Norm from "./Norm";
import Prod from "./Prod";
import Test from "./Test";
import Dev from "./Dev";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputText, setInputText] = useState("1");

  function handleLink(event) {
    const newValue = event.target.value;
    setInputText(newValue);
    event.preventDefault();
  }

  useEffect(() => {
    axios('https://rcslabs.ru/ttrp' + inputText + '.json')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [inputText]);
  if (loading) return "Loading...";
  if (error) return "Error!";


  const title = data.title;
  const dev__front = data.dev.front;
  const dev__back = data.dev.back;
  const dev__db = data.dev.db;
  const test__front = data.test.front;
  const test__back = data.test.back;
  const test__db = data.test.db;
  const prod__front = data.prod.front;
  const prod__back = data.prod.back;
  const prod__db = data.prod.db;
  const norm = data.norm;
  const dev__data = data.dev.front + data.dev.back + data.dev.db;
  const test__data = data.test.front + data.test.back + data.test.db;
  const prod_data = data.prod.front + data.prod.back + data.prod.db;

  return (
    <main>
      <div className="container">
      <form>
        <input onChange={handleLink} name="Link" placeholder="Place Your Link" />
        <button>Submit</button>
      </form>
        <div className="card">
          <div className="header">
            <p>Количество пройденных тестов {title}</p>
          </div>
          <Card dev__data={dev__data} test__data={test__data} prod_data={prod_data} />
          <div className="middle">
            <Dev
              dev__front={dev__front}
              dev__back={dev__back}
              dev__db={dev__db}
            />
            <Test
              test__front={test__front}
              test__back={test__back}
              test__db={test__db}
            />
            <Prod
              prod__front={prod__front}
              prod__back={prod__back}
              prod__db={prod__db}
            />
            <Norm norm={norm} />
          </div>
          <Bottom />
        </div>
      </div>
    </main>
  );
}

export default App;
