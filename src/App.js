import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("i run only once");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log(`SEARCH FOR ${keyword}`);
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'keyword' change.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' change.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'keyword and counter' change.");
  }, [keyword,counter])
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
