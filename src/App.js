// import styles from "./App.module.css";
// import { useState, useEffect } from "react";
import { useState } from "react";
/*
* 기초학습
*
function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

function Showing() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}
* function App() {
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
  }, [keyword, counter]);

  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <Showing />
    </div>
  );
}
 */

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = ({ target: target }) => setToDo(target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo !== "") {
      setToDos((currentArray) => [toDo,...currentArray]);
      setToDo("");
    }
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
